import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class NavBar extends React.Component{
    render(){
        return(
            <div className='ui secondary pointing menu'>
            <Link to='/' className='item'>
            <b>Gym Lyfe</b>
            </Link>
                <div className='middle menu'>
                <Link to='/merchandise' className='item'>Merch</Link>
                <Link to='/plans' className='item'>Plans</Link>
                <Link to='/aboutus' className='item'>Our Story</Link>
                </div>
                <GoogleAuth/>
            </div>
        )
    }
}
export default NavBar;