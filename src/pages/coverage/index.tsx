import React, {JSX} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import {useMount} from "ahooks";


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
    useMount(() => {
        if (location.host.indexOf('gobatis.com') > -1) {
            const iframe: any = document.getElementById('iframe');
            if (iframe) {
                iframe.onload = function () {
                    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
                }
            }
        }
    })
    return <iframe id='iframe' className={styles.iframe} src={'https://gobatis.com/testing/coverage.html'}>
    </iframe>
}
