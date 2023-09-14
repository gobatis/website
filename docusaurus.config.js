// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Gobatis【developing】',
    tagline: 'Make system building simple and efficient',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://gobatis.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'gobatis', // Usually your GitHub org/user name.
    projectName: 'gobatis', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh-CN'],
        localeConfigs: {
            en: {
                label: 'English',
            },
            'zh-CN': {
                label: '中文',
            },
        },
    },

    scripts: [
        {src: "https://hm.baidu.com/hm.js?743d7079b5bb8ebc0ba8ef476ba1f615", async: true},
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    sidebarCollapsible: false,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                googleAnalytics: {
                    trackingID: 'GTM-KR6VVJHH',
                    anonymizeIP: true,
                },
            }),
        ],
    ],

    plugins: [
        [
            'content-docs',
            /** @type {import('@docusaurus/plugin-content-docs').Options} */
            ({
                id: 'community',
                path: 'community',
                routeBasePath: 'community',
                // editUrl: ({locale, versionDocsDirPath, docPath}) => {
                //     if (locale !== defaultLocale) {
                //         return `https://crowdin.com/project/docusaurus-v2/${locale}`;
                //     }
                //     return `https://github.com/facebook/docusaurus/edit/main/website/${versionDocsDirPath}/${docPath}`;
                // },
                // remarkPlugins: [npm2yarn],
                editCurrentVersion: true,
                sidebarPath: require.resolve('./sidebarsCommunity.js'),
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            }),
        ],
        [
            'content-docs',
            /** @type {import('@docusaurus/plugin-content-docs').Options} */
            ({
                id: 'metrics',
                path: 'metrics',
                routeBasePath: 'metrics',
                // editUrl: ({locale, versionDocsDirPath, docPath}) => {
                //     if (locale !== defaultLocale) {
                //         return `https://crowdin.com/project/docusaurus-v2/${locale}`;
                //     }
                //     return `https://github.com/facebook/docusaurus/edit/main/website/${versionDocsDirPath}/${docPath}`;
                // },
                // remarkPlugins: [npm2yarn],
                editCurrentVersion: true,
                sidebarPath: require.resolve('./sidebarsMetrics.js'),
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            }),
        ],
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/logo.png',
            navbar: {
                title: 'Gobatis',
                logo: {
                    alt: 'Gobatis Logo',
                    src: 'img/logo.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Documentation'
                    },
                    {to: '/metrics/index', label: 'Metrics', position: 'left'},
                    {to: '/extension', label: 'Extension', position: 'left'},
                    {to: '/', label: 'Community', position: 'left'},
                    {
                        label: 'Test', position: 'left', items: [
                            {
                                label: 'Report',
                                to: 'https://gobatis.com/testing/report.html',
                            },
                            {
                                label: 'Coverage',
                                to: 'https://gobatis.com/testing/coverage.html',
                            },
                        ],
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/gobatis/gobatis',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} gobatis.com. ICP证: <a style="color: #fff;" href="https://beian.miit.gov.cn/" target="_blank">黔ICP备2023011094号</a>`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
