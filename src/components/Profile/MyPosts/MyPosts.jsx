import React from "react";
import s from './Post.module.css'

const Post = () => {
    return <div>
        My post
        <div className={s.item}>
            New post
        </div>
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg" alt=""/>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>
    </div>

}

export default Post;