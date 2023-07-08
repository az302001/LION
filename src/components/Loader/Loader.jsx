import React from 'react'
import style from './Loader.module.css'

const Loader = () => {
    return (
        <div className={style.loader}>
        <div className={style.leaf}></div>
        <div className={style.leaf}></div>
        <div className={style.leaf}></div>
      </div>
    )
}

export default Loader