import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// import logo from '/Users/tappy/Byte/Phase_3_Project/front-end/my-app/src/components/images/Covid-spy-logo.png';

const NavBar = () => {
        return(
            <nav className='navStyle'>
                <div>
                    <Link to='/'>
                        <img src={logo} className='logo' />
                    </Link>
                </div>
                <div>
                    <Link style={{color:'white', fontWeight:'bold', 
                    textDecoration:'none', padding:20}} to='/about'>About</Link>
                    <Link style={{color:'white', fontWeight:'bold', 
                    textDecoration:'none', padding:20}} to='/tracker'>Map</Link>
                    <Link style={{color:'white', fontWeight:'bold', 
                    textDecoration:'none', padding:20}} to='/graphs'>Graph</Link>
                    <Link style={{color:'white', fontWeight:'bold', 
                    textDecoration:'none', padding:20}} to='/user'>Account</Link>
                    <Link style={{color:'white', fontWeight:'bold', 
                    textDecoration:'none', padding:20}} to='/login' 
                    onClick={logOut} >Logout</Link>
                </div>
                <Redirect from='/' to='/user' />
            </nav>
        )
}
export default NavBar;
