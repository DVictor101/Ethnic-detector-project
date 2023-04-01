import "./register.css";

const Register = ({ onRouteChange }) => {
 return (
  <div className="signin">
   <div className="signin_center">
    <div>
     <h2 className="sign_head">Enter details</h2>
    </div>
    {
     <div className="signin_form">
      <label>Name</label>
      <div>
       <input
        className="signin_input"
        type="text"
       />
      </div>
      <label>Email</label>
      <div>
       <input
        className="signin_input"
        type="text"
       />
      </div>
      <label>Password</label>
      <div>
       <input
        className="signin_input inputtwo"
        type="password"
       />
      </div>
      <div>
       <button
        onClick={() => onRouteChange("home")}
        className="signin_btn"
       >
        Sign up
       </button>
      </div>
      <div>
       <p
        onClick={() => onRouteChange("signin")}
        className="signin_reg"
       >
        Sign in
       </p>
      </div>
     </div>
    }
   </div>
  </div>
 );
};
export default Register;
