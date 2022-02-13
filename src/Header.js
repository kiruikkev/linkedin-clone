import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import "./Header.css";
import HeaderOption from './HeaderOption';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
    return (
        <div className='header'>

            <div className='header_left'>
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" />
                <div className="header_search">
                    <SearchIcon />

                    <input type="text" />
                </div>

            </div>
            <div className='header_right'>
                <HeaderOption Icon={HomeIcon}title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon}title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon}title="Jobs"/>
                <HeaderOption Icon={ChatIcon }title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon}title="Notifications"/>
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQFeVFpYz5rjcg/profile-displayphoto-shrink_200_200/0/1613577347204?e=1650499200&v=beta&t=kUn-WtvV64m3QkmQZ_Wgn8vITO-eU834FQx49Db1ezA"title="me"/>
            </div>


        </div>
    )
}

export default Header;