
import { Logo_img } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header = () => {

  // let btnName = "Login";

  const onlineStatus = useOnlineStatus();

  const [btnNameReact, setBtnNameReact] = useState("Login");
  // console.log("Headeer Render");

  const { loggedInUser } = useContext(userContext);
  // console.log(data);
  
  // selector for cart and hook
  // subscribing to the store using a aselector will make the component re-render whenever the state changes
  const cartItems = useSelector((store) => store.cart.items );

  return (
    <>
      <div className="header flex items-center justify-between p-5 bg-gray-800 text-white  ">

        {/* logo */}
        <div className="logo-container  ">
          <img
            src={Logo_img}
            alt="App Logo of  food app "
            className="h-14 w-auto"
          />
        </div>


        <div className="nav-items">
          <ul className="flex space-x-8" >
            <li>
              Online Status : {onlineStatus ? " ✅" : "❌"}
            </li>
            <li>
              <Link to="/" className="links"  > Home </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-gray-300" > Contact us </Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-gray-300" >About us</Link>
            </li>
            <li>
              <Link to="/Grocery" className="hover:text-gray-300" >Grocery</Link>
            </li>
            <li className="hover:text-gray-300 font-bold text-xl "  >
              Cart ({cartItems.length} items) 
            </li>
            <button className="login"
              onClick={() => {
                btnNameReact === "Login" ? setBtnNameReact("Logout ") : setBtnNameReact("Login");
              }
              } > {btnNameReact} </button>

            <li className="hover:text-gray-300"  >
            {loggedInUser}
            </li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;