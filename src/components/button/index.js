import React from "react"
import styles from "./index.module.css"

const Button = ({ title, onClick }) => {

    return (
        <button className={styles.button} type="submit" onClick={onClick}>{title}</button>
    )
}

export default Button