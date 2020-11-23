import React from "react"
import styles from './index.module.css'
import LinkComponent from "../link"

const Nav = () => {

    return (
        <nav className={styles.nav}>
            <LinkComponent href="/spices" styleType="link" title="Spices" />
            <LinkComponent href="/aboutUs" styleType="link" title="About us" />
            <LinkComponent href="/login" styleType="link" title="Login" />
            <LinkComponent href="/shoppingCart" styleType="link" title="Shopping cart" />
        </nav>
    )

}

export default Nav