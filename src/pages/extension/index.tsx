import React, {JSX} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';


export default function Community(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            {/*<HomepageHeader/>*/}
            {/*<main>*/}
            {/*    <HomepageFeatures/>*/}
            {/*</main>*/}

            <Contract/>
        </Layout>
    );
}


function Contract(): JSX.Element {
    return <div className={styles.contract}>
        <h2>Knowledge Planet:</h2>
        <img src={'/img/metrics/demo.png'}/>
    </div>
}