import React from "react";
import s from './NavBar.module.css';
//
// let s = {
//     'nav': 'NavBar_nav__AIDHv',
//     'item': 'NavBar_item__NmijH'
// }
let c1 = "item";
let c2= "active"
let classes =`${s.item} ${s.active}`;

const NavBar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a>Profile</a>
        </div>
        <div className={s.item}>
            <a>Messages</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>

}

export default NavBar;