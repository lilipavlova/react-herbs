import React from "react"
import styles from './index.module.css'
import Nav from "../nav"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.mainTitle}>Gift of the wild</Link>
            <Nav />
        </header>
    )

}

export default Header