import React from 'react'
import "./Sidebar.css"
import { Avatar } from "@material-ui/core"
function Sidebar() {

const recentItem = (topic) =>(
<div className='Sidebar_recentItem'>
<span className='Sidebar_hash'>#</span>
<p>{topic}</p>

</div>
)



    return (
        <div className="Sidebar">
            <div className='Sidebar_top'>
                <img src="https://static-exp1.licdn.com/sc/h/5q92mjc5c51bjlwaj3rs9aa82" alt="" />
                <Avatar className='Sidebar_avatar' />
                <h2>Kelvin Kirui</h2>
                <h4>kiruikkev@gmail.com</h4>
            </div>
            <div className='Sidebar_stats'>
                <div className='Sidebar_stat'>
                    <p>Who viewed you</p>
                    <p className='Sidebar_statNumber'>2,456</p>
                </div>
                <div className='Sidebar_stat'>
                    <p>Who are you bby</p>
                    <p className='Sidebar_statNumber'>646657</p>
                </div>

            </div>
            <div className='Sidebar_bottom'>
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}  
                {recentItem("softwareengineering")}  
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    )
}

export default Sidebar