import React from "react"
import styles from './index.module.css'
import Header from "../header"

const PageLayout = (props) => {
    return (
        <div className={styles.main}>
            <Header />
            <div >
                {props.children}
            </div>
        </div>
    )
}

export default PageLayout