import "./App.css";
import Navigation from "./components/Navigation/navigation";
import Logo from "./components/Logo/logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import { Component } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import SignIn from "./components/Signin/Signin";
import Register from "./components/Register/Register";

const particlesInit = async (main) => {
 // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
 // this loads the tsparticles package bundle, it's the easiest method for getting everything ready

 // starting from v2 you can add only the features you need reducing the bundle size
 await loadFull(main);
};

class App extends Component {
 constructor() {
  super();
  this.state = {
   input: "",
   url: "",
   datavalues: "",
   route: "signin",
  };
 }

 onInputChange = (event) => {
  const inputValue = event.target.value.trim(); // remove leading/trailing whitespace
  if (inputValue.length > 0) {
   // check if non-empty string
   this.setState({ input: inputValue });
  }
 };

 onSubmit = () => {
  this.setState({
   url: this.state.input,
  });

  //this.setState({ imagUrl: this.state.input });

  const raw = JSON.stringify({
   user_app_id: {
    user_id: "clarifai",
    app_id: "main",
   },
   inputs: [
    {
     data: {
      image: {
       url: `${this.state.url}`,
      },
     },
    },
   ],
  });

  const requestOptions = {
   method: "POST",
   headers: {
    Accept: "application/json",

    Authorization:
     // eslint-disable-next-line
     "Key " + "a3f43cfae2fb4db2a10e52434454d565",
   },
   body: raw,
  };

  // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
  // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
  // this will default to the latest version_id

  fetch(
   `https://api.clarifai.com/v2/models/ethnicity-demographics-recognition/versions/b2897edbda314615856039fb0c489796/outputs`,
   requestOptions
  )
   .then((response) => response.json())
   .then((result) =>
    this.setState({
     datavalues: result.outputs[0].data.concepts,
    })
   )
   .catch((error) =>
    alert("Network Error_NAME_NOT_RESOLVE", error)
   );
 };
 onRouteChange = (route) => {
  this.setState({ route: route });
 };

 render() {
  const { url, datavalues, route } = this.state;
  return (
   <div className="App">
    {route === "signin" ? (
     <SignIn onRouteChange={this.onRouteChange} />
    ) : route === "register" ? (
     <Register
      onRouteChange={this.onRouteChange}
     />
    ) : (
     <div>
      <Navigation
       onRouteChange={this.onRouteChange}
      />
      <Logo />
      <Rank />
      <ImageLinkForm
       inpuchangeHandler={this.onInputChange}
       onSubmitHandler={this.onSubmit}
       url={url}
       datavalues={datavalues}
      />
     </div>
    )}

    <Particles
     className="particles"
     id="tsparticles"
     init={particlesInit}
     options={{
      fullScreen: {
       enable: true,
       zIndex: 1,
      },
      particles: {
       number: {
        value: 20,
        density: {
         enable: false,
         value_area: 500,
        },
       },
       color: {
        value: "#fff",
       },
       shape: {
        type: "star",
        options: {
         sides: 4,
        },
       },
       opacity: {
        value: 0.3,
        random: false,
        anim: {
         enable: false,
         speed: 1,
         opacity_min: 0.1,
         sync: false,
        },
       },
       size: {
        value: 4,
        random: false,
        anim: {
         enable: false,
         speed: 40,
         size_min: 0.1,
         sync: false,
        },
       },
       rotate: {
        value: 0,
        random: true,
        direction: "clockwise",
        animation: {
         enable: true,
         speed: 5,
         sync: false,
        },
       },
       line_linked: {
        enable: true,
        distance: 600,
        color: "#ffffff",
        opacity: 0.4,
        width: 2,
       },
       move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
         enable: false,
         rotateX: 600,
         rotateY: 1200,
        },
       },
      },
      interactivity: {
       events: {
        onhover: {
         enable: true,
         mode: ["grab"],
        },
        onclick: {
         enable: false,
         mode: "bubble",
        },
        resize: true,
       },
       modes: {
        grab: {
         distance: 400,
         line_linked: {
          opacity: 1,
         },
        },
        bubble: {
         distance: 400,
         size: 40,
         duration: 2,
         opacity: 8,
         speed: 3,
        },
        repulse: {
         distance: 200,
        },
        push: {
         particles_nb: 4,
        },
        remove: {
         particles_nb: 2,
        },
       },
      },
      retina_detect: true,
      background: {
       color: "#8f88881a",
       opacity: 0,
       image: "",
       position: "50% 50%",
       repeat: "no-repeat",
       size: "cover",
      },
     }}
    />
   </div>
  );
 }
}

export default App;
