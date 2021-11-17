import React from "react";
import s from './Dialogs.module.css'

export const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
      <div className={s.dialog + '' + s.active}>
dima
      </div>
      <div className={s.dialog}>
Sasha
      </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are u< /div>
            </div>
        </div>
    )
}