import React, {ReactElement, useEffect} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import "../css/style.css";

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <img className={styles.logo} src="img/logo.png" alt="Gobatis Logo"/>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/getting-started/installation">
                        Get Started - 5min ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactElement {
    const {siteConfig} = useDocusaurusContext();
    // return (
    //     <Layout
    //         title={`${siteConfig.title}`}
    //         description="Description will go into a meta tag in <head />">
    //         <HomepageHeader/>
    //         <main>
    //             <HomepageFeatures/>
    //         </main>
    //     </Layout>
    // );

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            {/*<HomepageHeader/>*/}
            <main>
                {/*<HomepageFeatures/>*/}
                <Content/>
            </main>
        </Layout>
    );
}

function Content(): ReactElement {
    return <div className="nk-body is-dark" data-menu-collapse="lg">
        <div className="nk-app-root has-mask">
            <div className="nk-mask bg-pattern-dot-white-sm"></div>
            <header className="nk-header has-shape">
                <div className="nk-shape bg-shape-blur-q mt-n20p ms-10p start-50 translate-middle-x"></div>
                <div className="nk-shape bg-shape-blur-r mt-n10p ms-n10p start-50 translate-middle-x"></div>
                <div className="nk-shape bg-shape-border-a mt-n10 ms-40p start-50 top-100 translate-middle-x"></div>
                <div className="nk-shape bg-shape-border-b mt-n9 ms-30p start-50 translate-middle-x"></div>
                <div className="nk-shape bg-shape-border-c mt-12 ms-n40p start-50 translate-middle-x"></div>

                <div className="nk-hero pb-xl-4">
                    <div className="container">
                        <div
                            className="row g-gs align-items-center justify-content-center justify-content-xl-between flex-xl-row-reverse text-center text-xl-start">
                            <div className="col-xl-4 col-xxl-4 col-lg-4 col-md-6 col-6">
                                <div className="nk-hero-gfx me-xxl-n7">
                                    <div className="p-1 rounded-3">
                                        {/*<img className="w-100 rounded-3" src="images/gfx/banner/g.jpg" alt=""/>*/}
                                        <img className="w-100 rounded-3" src="img/logo.png" alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-7 col-xl-6 col-lg-11">
                                <div className="nk-hero-content">
                                    <h5 className="brand-name text-uppercase fw-normal mb-3">Gobatis</h5>
                                    <h1 className="title mb-3 mb-lg-4">
                                        Make system building
                                        <br/>
                                        <span className="text-gradient-primary">simple</span> and <span
                                        className="text-gradient-primary">efficient</span>
                                    </h1>
                                    <p className="lead ">one comprehensively considers engineering implementation ORM
                                        library.</p>
                                    <ul className="btn-list btn-list-inline py-3 gy-3">
                                        <li>
                                            <Link
                                                className="btn btn-primary btn-lg"
                                                to="/docs/getting-started/installation">
                                                Get Started - 5min ⏱️
                                            </Link>
                                            {/*<a href="#" className="btn btn-primary btn-lg">*/}
                                            {/*/!*<em className="icon ni ni-google"></em>*!/*/}
                                            {/*<span>Get Started</span></a>*/}
                                        </li>
                                        {/*<li><a href="#" className="btn btn-light btn-lg"><span>Sign up with email</span>*/}
                                        {/*    <em className="icon ni ni-arrow-long-right"></em></a></li>*/}
                                    </ul>
                                    <p className="sub-text mt-2"><strong>*100% </strong> unit test coverage.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </header>

            <main className="nk-pages">
                <section className="section section-lg section-bottom-0 has-shape">
                    <div className="nk-shape bg-shape-border-d mt-n8 mt-lg-n9 start-50 translate-middle-x"></div>
                    <div className="container">
                        <div className="section-head">
                            <div className="row justify-content-center text-center">
                                <div className="col-lg-9 col-xl-7">
                                    <h2 className="title">Features</h2>
                                    <p className="lead">Continuously refine the API design based on real business
                                        scenarios, aiming to provide developers with as smooth an experience as
                                        possible..</p>
                                </div>
                            </div>
                        </div>

                        <div className="section-content">
                            <div className="row g-gs">
                                <div className="col-lg-4">
                                    <div className="card bg-gradient-light border-0 h-100">
                                        <div className="card-body p-3 d-flex">
                                            <div className="feature feature-inline align-items-center">
                                                <div className="feature-text me-auto">
                                                    <h4 className="title">Simple</h4>
                                                    <p>Less is more. Provide the most reliable service with the simplest implementation. </p>
                                                </div>
                                                <div className="feature-decoration flex-shrink-0 ms-4 me-n3">
                                                    <img src="images/number/1-light.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card bg-gradient-light border-0 h-100">
                                        <div className="card-body p-3 d-flex">
                                            <div className="feature feature-inline align-items-center">
                                                <div className="feature-text me-auto">
                                                    <h4 className="title">Precise</h4>
                                                    <p>A miss by a hair's breadth is a miss by a mile; data processing must be done with precision. </p>
                                                </div>
                                                <div className="feature-decoration flex-shrink-0 ms-4 me-n3">
                                                    <img src="images/number/2-light.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="card bg-gradient-light border-0 h-100">
                                        <div className="card-body p-3 d-flex">
                                            <div className="feature feature-inline align-items-center">
                                                <div className="feature-text me-auto">
                                                    <h4 className="title">Efficient</h4>
                                                    <p>Stay close to real development scenarios and explore the most efficient engineering implementations. </p>
                                                </div>
                                                <div className="feature-decoration flex-shrink-0 ms-4 me-n3">
                                                    <img src="images/number/3-light.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/*<section className="section section-lg section-bottom-0">*/}
                {/*    <div className="container">*/}
                {/*        <div className="section-content">*/}
                {/*            <div className="row justify-content-center text-center g-gs">*/}
                {/*                <div className="col-xxl-10">*/}
                {/*                    <ul className="d-flex flex-wrap justify-content-center has-gap gy-3">*/}
                {/*                        <li className="px-3 px-xl-5">*/}
                {/*                            <img className="h-2rem visible-on-dark-mode"*/}
                {/*                                 src="images/brands/72-a-tone-white.png" alt=""/>*/}
                {/*                                <img className="h-2rem visible-on-light-mode"*/}
                {/*                                     src="images/brands/72-a.png" alt=""/>*/}
                {/*                        </li>*/}
                {/*                        <li className="px-3 px-xl-5">*/}
                {/*                            <img className="h-2rem visible-on-dark-mode"*/}
                {/*                                 src="images/brands/72-b-tone-white.png" alt=""/>*/}
                {/*                                <img className="h-2rem visible-on-light-mode"*/}
                {/*                                     src="images/brands/72-b.png" alt=""/>*/}
                {/*                        </li>*/}
                {/*                        <li className="px-3 px-xl-5">*/}
                {/*                            <img className="h-2rem visible-on-dark-mode"*/}
                {/*                                 src="images/brands/72-c-tone-white.png" alt=""/>*/}
                {/*                                <img className="h-2rem visible-on-light-mode"*/}
                {/*                                     src="images/brands/72-c.png" alt=""/>*/}
                {/*                        </li>*/}
                {/*                        <li className="px-3 px-xl-5">*/}
                {/*                            <img className="h-2rem visible-on-dark-mode"*/}
                {/*                                 src="images/brands/72-d-tone-white.png" alt=""/>*/}
                {/*                                <img className="h-2rem visible-on-light-mode"*/}
                {/*                                     src="images/brands/72-d.png" alt=""/>*/}
                {/*                        </li>*/}
                {/*                        <li className="px-3 px-xl-5">*/}
                {/*                            <img className="h-2rem visible-on-dark-mode"*/}
                {/*                                 src="images/brands/72-e-tone-white.png" alt=""/>*/}
                {/*                                <img className="h-2rem visible-on-light-mode"*/}
                {/*                                     src="images/brands/72-e.png" alt=""/>*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                {/*                    <p className="fs-4 pt-5 mt-xl-3 ">Join hundreds of teams that rely on our AI Article*/}
                {/*                        Writer to create better content faster</p>*/}
                {/*                    /!*<ul className="btn-list btn-list-inline pt-3 pt-xl-4">*!/*/}
                {/*                    /!*    <li><a href="#" className="btn btn-primary btn-lg"><span>Start Free Trial</span></a>*!/*/}
                {/*                    /!*    </li>*!/*/}
                {/*                    /!*</ul>*!/*/}
                {/*                </div>*/}
                {/*             */}
                {/*            </div>*/}
                {/*         */}
                {/*        </div>*/}
                {/*     */}
                {/*    </div>*/}
                {/* */}
                {/*</section>*/}

                {/*<section className="section section-lg section-bottom-0">*/}
                {/*    <div className="container">*/}
                {/*        <div className="section-head">*/}
                {/*            <div className="row justify-content-center text-center">*/}
                {/*                <div className="col-lg-9 col-xl-9 px-xxl-5">*/}
                {/*                    <h2 className="title h1">Increase profits and efficiency with our AI text*/}
                {/*                        generator</h2>*/}
                {/*                    <p className="lead">An AI text generator can help businesses increase profits by*/}
                {/*                        improving their content marketing strategy. By leveraging the power of*/}
                {/*                        artificial intelligence a faster rate than ever before.</p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*     */}
                {/*        <div className="section-content">*/}
                {/*            <div className="row gx-5 gy-6 align-items-center justify-content-lg-between">*/}
                {/*                <div className="col-lg-6 col-xl-5">*/}
                {/*                    <div className="block-gfx ms-lg-n4 me-lg-0 me-xl-n6 my-lg-0 m-n3 m-sm-n4">*/}
                {/*                        <img className="w-100" src="images/gfx/feature/b.png" alt=""/>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*             */}
                {/*                <div className="col-lg-6 col-xl-6">*/}
                {/*                    <div className="block-text">*/}
                {/*                        <h2 className="title">Full-length article drafts gives you a solid base for*/}
                {/*                            writing.</h2>*/}
                {/*                        <p className="lead">With an AI text generator, businesses can create*/}
                {/*                            high-quality content in a fraction of the time it would take to create the*/}
                {/*                            same content manually. </p>*/}
                {/*                        <ul className="list gy-3">*/}
                {/*                            <li><em className="icon fs-4 ni ni-check-circle-fill text-info"></em><span>The AI-generated text is always fresh and relevant.</span>*/}
                {/*                            </li>*/}
                {/*                            <li><em className="icon fs-4 ni ni-check-circle-fill text-info"></em><span>The AI-generated text is guaranteed to be unique and original.</span>*/}
                {/*                            </li>*/}
                {/*                            <li><em className="icon fs-4 ni ni-check-circle-fill text-info"></em><span>The AI-generated text is SEO-friendly and authoritative.</span>*/}
                {/*                            </li>*/}
                {/*                            <li><em className="icon fs-4 ni ni-check-circle-fill text-info"></em><span>AI text generators can help businesses create content that is more engaging and personalized to their customers' needs</span>*/}
                {/*                            </li>*/}
                {/*                        </ul>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*             */}
                {/*            </div>*/}
                {/*         */}
                {/*        </div>*/}
                {/*     */}
                {/*    </div>*/}
                {/* */}
                {/*</section>*/}


                <section className="section section-lg section-bottom-0">
                    <div className="container">
                        <div className="section-head">
                            <div className="row justify-content-center text-center">
                                <div className="col-lg-10 col-xl-9 col-xxl-8">
                                    <h2 className="title h1">Design Thoughts</h2>
                                    {/*<p className="lead">Copygen.ai allows you to create multiple pieces of content*/}
                                    {/*    quickly and efficiently, increasing your productivity and freeing up time to*/}
                                    {/*    focus on other important tasks.</p>*/}
                                </div>
                            </div>
                        </div>

                        <div className="section-content">
                            <div className="row gy-gs gx-xxl-9">
                                <div className="col-md-6">
                                    <div className="feature feature-inline">
                                        <div className="feature-media">
                                            <div className="text-gradient-primary fs-2 d-inline-flex">
                                                <em className="icon ni ni-note-add"></em>
                                            </div>
                                        </div>
                                        <div className="feature-text">
                                            <h4 className="title">Write copy &amp; content that converts</h4>
                                            <p>You can generate high-quality content in seconds, saving you valuable
                                                time that you can spend on other important tasks.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="feature feature-inline">
                                        <div className="feature-media">
                                            <div className="text-gradient-primary fs-2 d-inline-flex">
                                                <em className="icon ni ni-bulb"></em>
                                            </div>
                                        </div>
                                        <div className="feature-text">
                                            <h4 className="title">Brainstorm new ideas.</h4>
                                            <p>An interview-style show featuring industry leaders, experts, and
                                                influencers, covering topics ranging from tech, politics, art, and
                                                more.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="feature feature-inline">
                                        <div className="feature-media">
                                            <div className="text-gradient-primary fs-2 d-inline-flex">
                                                <em className="icon ni ni-activity-round"></em>
                                            </div>
                                        </div>
                                        <div className="feature-text">
                                            <h4 className="title">10X your content output</h4>
                                            <p>Use templates to streamline your content creation process. This can
                                                include templates for blog posts, social media posts, videos, and
                                                more.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="feature feature-inline">
                                        <div className="feature-media">
                                            <div className="text-gradient-primary fs-2 d-inline-flex">
                                                <em className="icon ni ni-text-a"></em>
                                            </div>
                                        </div>
                                        <div className="feature-text">
                                            <h4 className="title">Write better, everywhere.</h4>
                                            <p>Reading widely can help improve your writing skills by exposing you to
                                                different writing styles, grammar structures, and vocabulary.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="feature feature-inline">
                                        <div className="feature-media">
                                            <div className="text-gradient-primary fs-2 d-inline-flex">
                                                <em className="icon ni ni-text2"></em>
                                            </div>
                                        </div>
                                        <div className="feature-text">
                                            <h4 className="title">Create content in 26 languages</h4>
                                            <p>Copygen can read and write content in 25 languages including English,
                                                Spanish, Japanese, and Portuguese.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="feature feature-inline">
                                        <div className="feature-media">
                                            <div className="text-gradient-primary fs-2 d-inline-flex">
                                                <em className="icon ni ni-puzzle"></em>
                                            </div>
                                        </div>
                                        <div className="feature-text">
                                            <h4 className="title">Build an AI-Powered business.</h4>
                                            <p>Building an AI-powered business is an ongoing process, and requires
                                                ongoing investment in data, technology, and expertise.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="feature feature-inline">
                                        <div className="feature-media">
                                            <div className="text-gradient-primary fs-2 d-inline-flex">
                                                <em className="icon ni ni-presentation"></em>
                                            </div>
                                        </div>
                                        <div className="feature-text">
                                            <h4 className="title">Collaborate with your team</h4>
                                            <p>Clear communication is key to successful collaboration. Be sure to
                                                express your ideas clearly and listen actively to others.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="feature feature-inline">
                                        <div className="feature-media">
                                            <div className="text-gradient-primary fs-2 d-inline-flex">
                                                <em className="icon ni ni-happy"></em>
                                            </div>
                                        </div>
                                        <div className="feature-text">
                                            <h4 className="title">Have fun! CopyGen is a joy.</h4>
                                            <p>AI is an exciting, new technology that can unlock your imagination to
                                                create some amazing things.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/*<section className="section section-lg section-bottom-0 has-shape">*/}
                {/*    <div className="nk-shape bg-shape-border-f ms-40p mt-8 start-50 translate-middle-x"></div>*/}
                {/*    <div className="container">*/}
                {/*        <div className="section-head">*/}
                {/*            <div className="row justify-content-center text-center">*/}
                {/*                <div className="col-lg-10 col-xl-9 col-xxl-8">*/}
                {/*                    <h2 className="title h1">See what AI writers have to say</h2>*/}
                {/*                    <p className="lead px-xxl-10">This is a straightforward and commonly used header*/}
                {/*                        that lets customers know they are looking at different pricing options.</p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*     */}
                {/*        <div className="section-content">*/}
                {/*            <div className="row g-gs" data-masonry='{"percentPosition": true }'>*/}
                {/*                <div className="col-xl-4 col-md-6">*/}
                {/*                    <div className="card border-0 shadow-none rounded-4 bg-gradient-light">*/}
                {/*                        <div className="card-body">*/}
                {/*                            <div className="d-flex pb-5">*/}
                {/*                                <div className="media media-lg media-middle media-lg rounded-pill">*/}
                {/*                                    <img src="images/avatar/author/sm-e.jpg" alt=""/>*/}
                {/*                                </div>*/}
                {/*                                <div className="media-info ms-3">*/}
                {/*                                    <h5 className="mb-1">Ozioma Egwuonwu</h5>*/}
                {/*                                    <div className="sub-text">CEO at Hire &amp; Retain</div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <h4 className="title mb-3">Great app - Easy to use</h4>*/}
                {/*                            <p>Great value and so easy to use and saves me so much time! I was shocked*/}
                {/*                                by how much time and brain energy it saved me. Simple &amp; easy...gotta*/}
                {/*                                love that. ✌️</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                 */}
                {/*                </div>*/}
                {/*             */}
                {/*                <div className="col-xl-4 col-md-6">*/}
                {/*                    <div className="card border-0 shadow-none rounded-4 bg-gradient-light">*/}
                {/*                        <div className="card-body">*/}
                {/*                            <div className="d-flex pb-5">*/}
                {/*                                <div className="media media-lg media-middle media-lg rounded-pill">*/}
                {/*                                    <img src="images/avatar/author/sm-m.jpg" alt=""/>*/}
                {/*                                </div>*/}
                {/*                                <div className="media-info ms-3">*/}
                {/*                                    <h5 className="mb-1">Frances Burns</h5>*/}
                {/*                                    <div className="sub-text">CEO at Hire &amp; Retain</div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <h4 className="title mb-3">Like the name the Software also very SIMPLE to*/}
                {/*                                use</h4>*/}
                {/*                            <p>I was impressed I have to say, from the time it took me to come up with*/}
                {/*                                this stuff, your system improved my productivity. I think you have a*/}
                {/*                                creative tool, properly postured, it can generate alot of positive*/}
                {/*                                impact.</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                 */}
                {/*                </div>*/}
                {/*             */}
                {/*                <div className="col-xl-4 col-md-6">*/}
                {/*                    <div className="card border-0 shadow-none rounded-4 bg-gradient-light">*/}
                {/*                        <div className="card-body">*/}
                {/*                            <div className="d-flex pb-5">*/}
                {/*                                <div className="media media-lg media-middle media-lg rounded-pill">*/}
                {/*                                    <img src="images/avatar/author/sm-b.jpg" alt=""/>*/}
                {/*                                </div>*/}
                {/*                                <div className="media-info ms-3">*/}
                {/*                                    <h5 className="mb-1">Ben Tortora</h5>*/}
                {/*                                    <div className="sub-text">CEO at Hire &amp; Retain</div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <h4 className="title mb-3">Just wanna shout out the whole team for this*/}
                {/*                                amazing tool</h4>*/}
                {/*                            <p>I love it! The simplicity of writing and designing in one app 🎉 Makes*/}
                {/*                                social media marketing a breeze ❤️</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                 */}
                {/*                </div>*/}
                {/*             */}
                {/*                <div className="col-xl-4 col-md-6">*/}
                {/*                    <div className="card border-0 shadow-none rounded-4 bg-gradient-light">*/}
                {/*                        <div className="card-body">*/}
                {/*                            <div className="d-flex pb-5">*/}
                {/*                                <div className="media media-lg media-middle media-lg rounded-pill">*/}
                {/*                                    <img src="images/avatar/author/sm-n.jpg" alt=""/>*/}
                {/*                                </div>*/}
                {/*                                <div className="media-info ms-3">*/}
                {/*                                    <h5 className="mb-1">Derek Gehl</h5>*/}
                {/*                                    <div className="sub-text">CEO at Hire &amp; Retain</div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <h4 className="title mb-3">Time Saving and Better Than PLR Content</h4>*/}
                {/*                            <p>CpoyGen is a fantastic tool for writing product descriptions and getting*/}
                {/*                                started on blog posts. No longer do I have to stare at a blank screen*/}
                {/*                                trying to figure out how to flesh out a topic beyond 50 words. For me,*/}
                {/*                                CopyGen replaces buying PLR content that I would similarly edit and*/}
                {/*                                personalize. This saves me time because I can actually tailor to my*/}
                {/*                                keyword and niche needs.</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                 */}
                {/*                </div>*/}
                {/*             */}
                {/*                <div className="col-xl-4 col-md-6">*/}
                {/*                    <div className="card border-0 shadow-none rounded-4 bg-gradient-light">*/}
                {/*                        <div className="card-body">*/}
                {/*                            <div className="d-flex pb-5">*/}
                {/*                                <div className="media media-lg media-middle media-lg rounded-pill">*/}
                {/*                                    <img src="images/avatar/author/sm-p.jpg" alt=""/>*/}
                {/*                                </div>*/}
                {/*                                <div className="media-info ms-3">*/}
                {/*                                    <h5 className="mb-1">Martin Schoel</h5>*/}
                {/*                                    <div className="sub-text">CEO at Hire &amp; Retain</div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <h4 className="title mb-3">They've hit a home run with this AI tool</h4>*/}
                {/*                            <p>I was literally speechless from the originality of the content that my*/}
                {/*                                very first CopyGen test was able to produce from only a small sample of*/}
                {/*                                my original content. I was anticipating useless gibberish, but was*/}
                {/*                                instead genuinely dumbfounded. I stared at it in amazement for a solid 3*/}
                {/*                                minutes while the idea machine in my head spun wildly, and I*/}
                {/*                                contemplated</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                 */}
                {/*                </div>*/}
                {/*             */}
                {/*                <div className="col-xl-4 col-md-6">*/}
                {/*                    <div className="card border-0 shadow-none rounded-4 bg-gradient-light">*/}
                {/*                        <div className="card-body">*/}
                {/*                            <div className="d-flex pb-5">*/}
                {/*                                <div className="media media-lg media-middle media-lg rounded-pill">*/}
                {/*                                    <img src="images/avatar/author/sm-o.jpg" alt=""/>*/}
                {/*                                </div>*/}
                {/*                                <div className="media-info ms-3">*/}
                {/*                                    <h5 className="mb-1">Merri Evans</h5>*/}
                {/*                                    <div className="sub-text">CEO at Hire &amp; Retain</div>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <h4 className="title mb-3">A year of organic marketing in about 30*/}
                {/*                                minutes</h4>*/}
                {/*                            <p>Writing articles has never been easier for me. Since I started using*/}
                {/*                                CopyGen, I only need a few minutes 🎉</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                 */}
                {/*                </div>*/}
                {/*             */}
                {/*            </div>*/}
                {/*         */}
                {/*        </div>*/}
                {/*     */}
                {/*    </div>*/}
                {/* */}
                {/*</section>*/}

                {/*<section className="section section-lg section-bottom-0">*/}
                {/*    <div className="container">*/}
                {/*        <div className="section-head">*/}
                {/*            <div className="row justify-content-center text-center">*/}
                {/*                <div className="col-lg-9 col-xl-7 col-xxl-8">*/}
                {/*                    <h2 className="title h1">Plans that best suit your business requirements</h2>*/}
                {/*                    <p className="lead px-lg-10 px-xxl-9">This is a straightforward and commonly used*/}
                {/*                        header that lets customers know they are looking at different pricing*/}
                {/*                        options.</p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*     */}
                {/*        <div className="section-content">*/}
                {/*            <div className="row g-gs justify-content-center">*/}
                {/*                <div className="col-lg-4">*/}
                {/*                    <div className="pricing shadow-none">*/}
                {/*                        <div className="pricing-body p-5 bg-gradient-light d-md-flex d-lg-block h-100">*/}
                {/*                            <div*/}
                {/*                                className="position-relative w-md-50 w-lg-100 pe-md-5 pe-lg-0 d-md-flex d-lg-block flex-column align-items-start">*/}
                {/*                                <div*/}
                {/*                                    className="badge bg-primary rounded-pill position-absolute position-md-static position-lg-absolute  top-0 end-0 mb-3 px-2">Most*/}
                {/*                                    Popular*/}
                {/*                                </div>*/}
                {/*                                <div className="fs-6 mb-2">Silver</div>*/}
                {/*                                <h5 className="mb-3">Unlimited Words</h5>*/}
                {/*                                <h3 className="h2 mb-4 mt-auto">$139 <span*/}
                {/*                                    className="caption-text text-muted"> / month</span></h3>*/}
                {/*                                <a href="#"*/}
                {/*                                   className="btn btn-lg btn-block btn-primary rounded-1"><span>Start free trial today</span><em*/}
                {/*                                    className="icon ni ni-arrow-long-right"></em></a>*/}
                {/*                            </div>*/}
                {/*                            <ul className="list list-sap-border gx-0 gy-3 pt-5 pt-md-0 pt-lg-5 w-md-50 w-lg-100">*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em>*/}
                {/*                                    <span><strong>20,000</strong> Monthly Word Limit</span></li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em>*/}
                {/*                                    <span><strong>10+</strong> Templates</span></li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em> <span>50+ Languages</span>*/}
                {/*                                </li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em> <span>Advance Editor Tool</span>*/}
                {/*                                </li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em> <span>Regular Technical Support</span>*/}
                {/*                                </li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em> <span>Unlimited Logins</span>*/}
                {/*                                </li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em> <span>Newest Features</span>*/}
                {/*                                </li>*/}
                {/*                            </ul>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*             */}
                {/*                <div className="col-lg-4 col-md-6 order-lg-first">*/}
                {/*                    <div className="pricing shadow-none">*/}
                {/*                        <div className="pricing-body p-5 bg-gradient-light">*/}
                {/*                            <div className="position-relative">*/}
                {/*                                <div*/}
                {/*                                    className="badge bg-dark bg-opacity-30 border border-white border-opacity-10 rounded-pill position-absolute top-0 end-0 px-2">Active*/}
                {/*                                </div>*/}
                {/*                                <div className="fs-6 mb-2">Basic</div>*/}
                {/*                                <h5 className="mb-3">Limited Words</h5>*/}
                {/*                                <h3 className="h2 mb-4">Free</h3>*/}
                {/*                                <a href="#"*/}
                {/*                                   className="btn btn-lg btn-block bg-dark bg-opacity-30 text-white hover-bg-primary rounded-1"><span>Start free trial today</span><em*/}
                {/*                                    className="icon ni ni-arrow-long-right"></em></a>*/}
                {/*                            </div>*/}
                {/*                            <ul className="list list-sap-border gx-0 gy-3 pt-5">*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em>*/}
                {/*                                    <span><strong>5,000</strong> Monthly Word Limit</span></li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em>*/}
                {/*                                    <span><strong>5+</strong> Templates</span></li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em> <span>50+ Languages</span>*/}
                {/*                                </li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em> <span>Advance Editor Tool</span>*/}
                {/*                                </li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em> <span>Regular Technical Support</span>*/}
                {/*                                </li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em> <span>Unlimited Logins</span>*/}
                {/*                                </li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em> <span>Newest Features</span>*/}
                {/*                                </li>*/}
                {/*                            </ul>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*             */}
                {/*                <div className="col-lg-4 col-md-6">*/}
                {/*                    <div className="pricing shadow-none">*/}
                {/*                        <div className="pricing-body p-5 bg-gradient-light">*/}
                {/*                            <div className="position-relative">*/}
                {/*                                <div className="fs-6 mb-2">Diamond</div>*/}
                {/*                                <h5 className="mb-3">Customized Plan</h5>*/}
                {/*                                <h3 className="h2 mb-4">$269 <span className="caption-text text-muted"> / month</span>*/}
                {/*                                </h3>*/}
                {/*                                <a href="#"*/}
                {/*                                   className="btn btn-lg btn-block bg-dark bg-opacity-30 text-white hover-bg-primary rounded-1"><span>Start free trial today</span><em*/}
                {/*                                    className="icon ni ni-arrow-long-right"></em></a>*/}
                {/*                            </div>*/}
                {/*                            <ul className="list list-sap-border gx-0 gy-3 pt-5">*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em>*/}
                {/*                                    <span><strong>50,000</strong> Monthly Word Limit</span></li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em>*/}
                {/*                                    <span><strong>15+</strong> Templates</span></li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em> <span>50+ Languages</span>*/}
                {/*                                </li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em> <span>Advance Editor Tool</span>*/}
                {/*                                </li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em> <span>Regular Technical Support</span>*/}
                {/*                                </li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em> <span>Unlimited Logins</span>*/}
                {/*                                </li>*/}
                {/*                                <li><em className="icon ni ni-check text-primary"></em> <span>Newest Features</span>*/}
                {/*                                </li>*/}
                {/*                            </ul>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*             */}
                {/*            </div>*/}
                {/*         */}
                {/*        </div>*/}
                {/*     */}
                {/*    </div>*/}
                {/* */}
                {/*</section>*/}

                <section className="section section-lg has-shape">
                    <div className="nk-shape bg-shape-border-e ms-n25p mt-2 start-50 translate-middle-x"></div>
                    <div className="container">
                        <div
                            className="nk-shape bg-shape-wormhole-a mt-n45p mt-xl-n40p mt-xxl-n35p ms-2 start-50 top-100 translate-middle-x"></div>
                        <div className="section-head">
                            <div className="row justify-content-center text-center">
                                <div className="col-lg-9 col-xl-7 col-xxl-8">
                                    <h2 className="title h1">Questions &amp; Answers</h2>
                                    <p className="lead px-lg-10 px-xxl-9">This is a straightforward and commonly used
                                        header that lets customers know they are looking at different pricing
                                        options.</p>
                                </div>
                            </div>
                        </div>

                        <div className="section-content">
                            <div className="row g-gs justify-content-center">
                                <div className="col-xl-9 col-xxl-8">
                                    <div className="accordion accordion-separated" id="faq-1">
                                        <div className="accordion-item border-0 bg-gradient-light">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" data-bs-toggle="collapse"
                                                        data-bs-target="#faq-1-1"> What is a copy?
                                                </button>
                                            </h2>
                                            <div id="faq-1-1" className="accordion-collapse collapse show"
                                                 data-bs-parent="#faq-1">
                                                <div className="accordion-body"> Yes, you can write long articel for
                                                    your blog posts, product descriptions or any long article with
                                                    CopyGen. We're always updating our template and tools, so let us
                                                    know what are expecting!
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item border-0 bg-gradient-light">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-toggle="collapse"
                                                        data-bs-target="#faq-1-2"> Does CopyGen to write long articles?
                                                </button>
                                            </h2>
                                            <div id="faq-1-2" className="accordion-collapse collapse"
                                                 data-bs-parent="#faq-1">
                                                <div className="accordion-body"> Yes, you can write long articel for
                                                    your blog posts, product descriptions or any long article with
                                                    CopyGen. We're always updating our template and tools, so let us
                                                    know what are expecting!
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item border-0 bg-gradient-light">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-toggle="collapse"
                                                        data-bs-target="#faq-1-3"> Is the generated content original?
                                                </button>
                                            </h2>
                                            <div id="faq-1-3" className="accordion-collapse collapse"
                                                 data-bs-parent="#faq-1">
                                                <div className="accordion-body"> Yes, you can write long articel for
                                                    your blog posts, product descriptions or any long article with
                                                    CopyGen. We're always updating our template and tools, so let us
                                                    know what are expecting!
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item border-0 bg-gradient-light">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" data-bs-toggle="collapse"
                                                        data-bs-target="#faq-1-4"> Do you have wordpress plugin?
                                                </button>
                                            </h2>
                                            <div id="faq-1-4" className="accordion-collapse collapse"
                                                 data-bs-parent="#faq-1">
                                                <div className="accordion-body"> Yes, you can write long articel for
                                                    your blog posts, product descriptions or any long article with
                                                    CopyGen. We're always updating our template and tools, so let us
                                                    know what are expecting!
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </main>
        </div>
    </div>
}
