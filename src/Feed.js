import React, { useEffect, useState } from 'react';
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from "./firebase";
import firebase from 'firebase/compat/app';
const Feed = () => {
    const [input, setInput] = useState('')
    const [post, setPosts] = useState([])

    useEffect(() => {
        db.collection('post').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })
            ))

        ))

    }, []);



    const sendPost = e => {
        e.preventDefault();

        db.collection('post').add({
            name: 'Kelvin kirui',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timestamp:firebase.firestore.Fieldvalue.serverTimestamp(),

})

    }

    return (
        <div className="feed">
            <div className='feed_inputContatiner'>
                <div className='feed_input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
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

            {post.map(({id,data: {name,description,message,photoUrl}}) => (

            <Post
            key={id}
            name={name}
            description={description}
            message={message}
            />
            ))}
        </div>

    )
}

export default Feed;