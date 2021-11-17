import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg" alt=""/>
            {props.message}
            <div>{props.like} Like</div>

        </div>
    )
}


export default Post;