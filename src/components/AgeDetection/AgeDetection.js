import { Component } from "react";
import "./agedetection.css";

class AgeDection extends Component {
 constructor(props) {
  super(props);
  this.state = {
   isDetecting: false,
  };
 }

 render() {
  const { url, datavalues } = this.props;
  return (
   <div className="agedetection">
    <div>
     <img
      className="race-img"
      src={url}
      alt="detect-age"
     />
    </div>
    <p>Hi</p>
    <div>
     {datavalues.status.description === "Failure"
      ? console.log("failure")
      : console.log("true")}
    </div>
   </div>
  );
 }
}
export default AgeDection;

/**import { Component } from "react";
import "./agedetection.css";

class AgeDetection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetecting: false,
    };
    this.handleDetect = this.handleDetect.bind(this);
  }

  handleDetect() {
    // Set the isDetecting state to true to trigger the component to render
    this.setState({
      isDetecting: true,
    });
  }

  render() {
    const { url, datavalues } = this.props;
    const { isDetecting } = this.state;

    // Render the component only when the "Detect" button is clicked
    if (isDetecting) {
      if (datavalues?.status?.description === "Ok") {
        const concepts = datavalues.outputs[0].data.concepts;
        for (let i = 0; i < concepts.length; i++) {
          const concept = concepts[i];
          const percentage = concept.value * 100;
          console.log(`${concept.name}: ${percentage.toFixed(2)}%`);
        }
      } else {
        console.log(datavalues?.status?.description);
      }
      return (
        <div className="agedetection">
          <img className="race-img" src={url} alt="detect-age" />
        </div>
      );
    }

    // Render a button to trigger the detection
    return (
      <div>
        <button onClick={this.handleDetect}>Detect</button>
      </div>
    );
  }
}

export default AgeDetection;**/
