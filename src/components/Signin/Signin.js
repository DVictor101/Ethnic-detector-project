import "./signin.css";

const SignIn = ({ onRouteChange }) => {
 return (
  <div className="signin">
   <div className="signin_center">
    <div>
     <h2 className="sign_head">Sign In</h2>
    </div>
    {
     <div className="signin_form">
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
        Sign in
       </button>
      </div>
      <div>
       <p
        onClick={() => onRouteChange("register")}
        className="signin_reg"
       >
        Register
       </p>
      </div>
     </div>
    }
   </div>
  </div>
 );
};
export default SignIn;
