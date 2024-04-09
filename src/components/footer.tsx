import '../styles/footer.css'
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter,FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='container'>
        <div className='footer'>
            <p className='logo dm-sans'>Startup </p>
            <div className='footermenu1 dm-sans'>
                <p>Privacy Policy</p>
                <p>Terms</p>
                <div className='footermnu1icon'>
                    <FaTwitter/>
                    <BiLogoFacebook />
                    <FaGooglePlusG/>
                </div>
            </div>
        </div>
        <hr/>
        <div className='footer'>
            <ul className='footermnu dm-sans'>
                <li><a href="/">Tour</a></li>
                <li><a href="/">Features</a></li>
                <li><a href="/">Prising Plans</a></li>
                <li><a href="/">Our Works</a></li>
                <li><a href="/">Brands</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <p className='copyright dm-sans'><span>&#169;</span> 2017 Designmodo. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer