import React from "react";
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                alt=""/>
        </div>
        <div>
            {/*<img src="https://im0-tub-ru.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d&n=27&h=480&w=480" alt=""/>*/}
            ava + description
        </div>
        <div className={s.posts}>
            <div className={s.item}>
                New post
            </div>
            <div className={s.item}>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>
    </div>

}

export default Profile;