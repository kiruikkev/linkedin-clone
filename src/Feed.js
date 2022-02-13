import React, { useEffect, useState } from 'react';
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from "./Firebase";
const Feed = () => {
    const [post, setPosts] = useState([])

useEffect(() => {
db.collection('posts').onSnapshot(snapshot => (
setPosts(snapshot.docs.map(doc =>({
    id:doc.id,
    data:doc.data(),
})
    ))

))

}, []);



    const sendPost = e => {
     e.preventDefault();



    }

    return (
        <div className="feed">
            <div className='feed_inputContatiner'>
                <div className='feed_input'>
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>

            </div>
            <div className='feed_inputOptions'>
                <InputOptions Icon={ImageIcon} title='photo' color='#70B5F9' />
                <InputOptions Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                <InputOptions Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                <InputOptions Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
            </div>

            {post.map((post) => (
                <Post />


            ))}

            <Post name='Kelvin Kirui' description='This is a test' message='This worked' />
        </div>

    )
}

export default Feed;