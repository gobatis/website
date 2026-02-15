import React, { ReactElement, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from '@site/src/pages/index.module.css';
import { useLocation } from "@docusaurus/router";
import '@site/src/css/index.css';
import { useMount } from "ahooks";
import Translate, { translate } from "@docusaurus/Translate";
import { Analytics } from "@vercel/analytics/next"


export default function Home(): ReactElement {
    const { siteConfig } = useDocusaurusContext();
    const location = useLocation();

    const checkHome = () => {
        if (location.pathname === '/' || location.pathname === '/zh-CN/') {
            document.body.classList.add('home');
        } else {
            document.body.classList.remove('home');
        }
    }

    useEffect(() => {
        checkHome();
    }, [location]);

    useMount(() => {
        // document.body.classList.add('home');
        setTimeout(() => {
            checkHome();
        }, 1000)
    })

    return (
        <>
            <div className="mask"></div>
            <Layout
                title={`${siteConfig.title}`}
                description="gobatis; golang orm extends from mybatis">
                <Content />
            </Layout>
            <Analytics />
        </>
    );
}


function Content(): ReactElement {
    return <div className={styles.page}>
        <div className="nk-shape bg-shape-blur-r"></div>
        <div className="nk-shape bg-shape-blur-q"></div>
        <div className={styles.header}>
            <div>
                <h5 className={styles.brandName}>Gobatis</h5>
                <h1 className={styles.title}>
                    {translate({ message: 'Make system building' })}
                    <br />
                    <span className={styles.textGradient}>{translate({ message: 'simple' })}</span>
                    {translate({ message: ' and ' })}
                    <span className={styles.textGradient}>{translate({ message: 'efficient' })}</span>

                </h1>
                <p>
                    {translate({ message: 'one comprehensively considers engineering implementation ORM library' })}
                </p>
                <div className={styles.btns}>
                    <Link
                        className={[styles.startBtn, styles.primaryBtn].join(" ")}
                        to="/docs/getting-started/installation">
                        {translate({ message: 'Getting started' })}
                    </Link>

                    <Link
                        className={styles.startBtn}
                        to="/docs/getting-started/installation">
                        {translate({ message: 'Contact Me' })}
                    </Link>
                </div>
            </div>
            <img className={styles.logo} src="img/logo.png" alt="" />
        </div>

        <p style={{ textAlign: 'center', color: '#ff3a00', fontSize: 24 }}>Do not use in the prod environment during
            development</p>

        <section className={styles.features}>
            <div className="nk-shape bg-shape-border-d"></div>
            <div className={styles.featureHead}>

                <h2>{translate({ message: 'Features' })}</h2>
                <p>
                    {translate({
                        message: 'Continuously refine the API design based on real business scenarios, aiming to provide developers with as smooth an experience as possible'
                    })}
                </p>

            </div>

            <div className={styles.featureContent}>
                <div className={styles.feature}>
                    <div>
                        <h4>{translate({ message: 'Simple' })}</h4>
                        <p>Less is more. Provide the most reliable service with the simplest implementation. </p>
                    </div>
                    <img src="images/number/1-light.png" alt="" />
                </div>

                <div className={styles.feature}>
                    <div>
                        <h4>{translate({ message: 'Precise' })}</h4>
                        <p>A miss by a hair's breadth is a miss by a mile; data processing must be done with
                            precision. </p>
                    </div>
                    <img src="images/number/2-light.png" alt="" />
                </div>

                <div className={styles.feature}>
                    <div>
                        <h4>{translate({ message: 'Efficient' })}</h4>
                        <p>Stay close to real development scenarios and explore the most efficient engineering
                            implementations. </p>
                    </div>
                    <img src="images/number/3-light.png" alt="" />
                </div>
            </div>
        </section>

        <section className={styles.help}>
            <div className={styles.helpHead}>
                <h2>{
                    translate({ message: 'How to implement assistance for your efficient development?' })
                }</h2>
            </div>
            <div className={styles.helpList}>
                <div>
                    <h4>{translate({ message: 'Convenient CRUD API' })}</h4>
                    <p>You can generate high-quality content in seconds, saving you valuable time that you can spend on
                        other important tasks.</p>
                </div>

                <div>
                    <h4>{translate({ message: 'MyBatis Dynamic XML' })}</h4>
                    <p>You can generate high-quality content in seconds, saving you valuable time that you can spend on
                        other important tasks.</p>
                </div>

                <div>
                    <h4>{translate({ message: 'Unified Scanning Logic' })}</h4>
                    <p>You can generate high-quality content in seconds, saving you valuable time that you can spend on
                        other important tasks.</p>
                </div>

                <div>
                    <h4>{translate({ message: 'Intuitive Query Syntax' })}</h4>
                    <p>You can generate high-quality content in seconds, saving you valuable time that you can spend on
                        other important tasks.</p>
                </div>

                <div>
                    <h4>{translate({ message: 'Concurrency Safe' })}</h4>
                    <p>You can generate high-quality content in seconds, saving you valuable time that you can spend on
                        other important tasks.</p>
                </div>

                <div>
                    <h4>{translate({ message: 'Activity Monitoring' })}</h4>
                    <p>You can generate high-quality content in seconds, saving you valuable time that you can spend on
                        other important tasks.</p>
                </div>
            </div>
            {/*<div className="nk-shape bg-shape-wormhole-a"></div>*/}
        </section>
    </div>
}

