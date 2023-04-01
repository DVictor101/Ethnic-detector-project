import "./navigation.css";

function Navigation({ onRouteChange }) {
 return (
  <div className="nav">
   <a className="nav_link" href="#!">
    <p
     onClick={() => onRouteChange("signin")}
     className="nav_p"
    >
     SignOut
    </p>
   </a>
  </div>
 );
}
export default Navigation;
