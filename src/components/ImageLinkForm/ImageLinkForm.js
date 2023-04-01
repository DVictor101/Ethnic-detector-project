import { useState } from "react";
import "./imagelinkform.css";

const ImageLinkForm = ({
 inpuchangeHandler,
 onSubmitHandler,
 url,
 datavalues,
}) => {
 const [apiCalled, setApiCalled] =
  useState(false); // track whether API call has been made

 const renderDataValues = () => {
  if (apiCalled && Array.isArray(datavalues)) {
   return datavalues.map((data) => (
    <p key={data.id}>
     {`${data.name}: ${(data.value * 100).toFixed(
      2
     )}%`}
    </p>
   ));
  } else {
   return <p></p>;
  }
 };

 const handleClick = () => {
  setApiCalled(true); // set state to indicate API call has been made
  onSubmitHandler(); // call API submit handler
 };

 return (
  <div className="imagelinkform">
   <p className="img-link-p">
    {"Magic Face Detection,Give it A try"}
   </p>
   <div className="box-shadow">
    <div className="input-div">
     <input
      className="input"
      type="text"
      onChange={inpuchangeHandler}
     />

     <button
      className="btn"
      onClick={handleClick} // call handleClick instead of onSubmitHandler directly
     >
      Detect
     </button>
    </div>
   </div>
   <div className="image-cont">
    <div>
     <img
      className="race-img"
      src={url}
      alt="detect-age"
     />
    </div>
    <div className="data-cont">
     {renderDataValues()}
    </div>
   </div>
  </div>
 );
};

export default ImageLinkForm;
