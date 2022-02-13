import React from 'react'
import "./Post.css";
import { Avatar } from '@material-ui/core';
import InputOptions from './InputOptions';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className='post_header'>
                <Avatar />
                <div className='post_info'>
                    <h2>Kelvin Kirui</h2>
                    <p>Description</p>
                </div>
            </div>
            <div className='post_body'>
                <p>{message}</p>

            </div>
<div className='post_buttons'>
<InputOptions Icon={ThumbUpAltIcon} title="Like" color="gray"/>
<InputOptions Icon={ChatIcon} title="Comment" color="gray"/>
<InputOptions Icon={ShareIcon } title="Share" color="gray"/>
<InputOptions Icon={SendIcon} title="Send" color="gray"/>
</div>
        </div>
    )
}

export default Post;