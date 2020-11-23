import React from "react"
import styles from './index.module.css'
import PageLayout from "../../components/page-layout"
import LinkComponent from "../../components/link"

const HomePage = () => {

    return (
        <PageLayout >
            <div className={styles.homeBackground}>
                <div className={styles.h1background}>
                    <h1 className={styles.h1}> Spices from the heart of Bulgaria</h1>
                    <LinkComponent href="/spices" styleType="linkSeeAll" title="Shop all.." />
                </div>
            </div>
        </PageLayout>

    )
}

export default HomePage