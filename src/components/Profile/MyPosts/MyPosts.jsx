import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        My post
       <div>
           <textarea></textarea>
           <button>Add post</button>
       </div>
        <div className={s.posts}>
            <Post  message="hi,how are u?" like= "2"/>
            <Post  message="my first post" like = "1000" />
        </div>

    </div>

}

export default MyPosts;