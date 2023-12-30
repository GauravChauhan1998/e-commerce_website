import React, {useContext, useState, useEffect} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { auth } from "../../firebase";
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import user from "../Assets/user.png"
import logout from "../Assets/logout.png"
import drop from "../Assets/drop-down.png"


const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const [isActive, setIsActive] = useState(false);

    const [isUserLoggedIn,setUserLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                setUserLoggedIn(true);
                setUserName(user.displayName);
            }
            else{
                setUserName("");
                setUserLoggedIn(false);
            }
        })
    })

    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(async()=>{
          navigate("/");
          // window.location.reload(false);
          toast.success("Sign Out Successfull!", {
            position: toast.POSITION.TOP_RIGHT
          });
        })
    }

    function menuToggle() {
        const toggleMenu = document.querySelector(".menu");
        setIsActive("true")
    }

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <Link style={{textDecoration: 'none'}} to='/'><img onClick={()=>{setMenu("shop")}} src={logo} alt="" /></Link>
            <p>SHOPSY</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            {/* {isUserLoggedIn 
            ? <div className='sign-out-container'>
                <div className="sign-out-nav" onClick={menuToggle()}>
                    <img src={user} />
                    <p>{userName}</p>
                </div>

                <div className={`menu ${isActive ? 'active' : ''}`}>
                    <ul>
                        <li onClick={handleSignOut}>
                            <img src={logout} /><p>Logout</p>
                        </li>
                    </ul>
                </div>
            </div>
            : <Link to='/login'><button>Login</button></Link> } */}

            {
               isUserLoggedIn ? 
               <div className="sign-out-container">
                    <div className='sign-out-nav' onClick={menuToggle}>
                        <img src={user} alt="" />
                        <p>{userName}</p> 
                        <img className='drop-down' src={drop} alt="" />
                    </div>
                    <div className={`menu ${isActive ? 'active' : ''}`}>
                        <ul>
                            <li onClick={handleSignOut}>
                                <img src={logout} /><span>Logout</span>
                            </li>
                        </ul>
                    </div>
               </div>
                
                
                : <Link to='/login'><button>Login</button></Link> 
            }
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
