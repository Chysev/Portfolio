import Script from "next/script";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* cdn fontawesome */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
                    />

                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

                    {/* META TAGS */}

                    {/* Defaults */}

                    <meta
                        id="meta-application-name"
                        name="application-name"
                        content="John Layda's Portfolio"
                    />
                    <meta
                        id="meta-description"
                        name="description"
                        content="Creating a website without the help of a Developer is difficult; I'm committed to providing you with the best website design and high quality hosting including support, website maintenance, and many other services."
                    />
                    <meta
                        id="meta-keywords"
                        name="keywords"
                        content="John, Albert, Layda, John Albert Layda, John Layda, John Albert Layda Chysev, John Albert Layda (Chysev), John Layda Chysev"
                    />

                    {/* Schema.org markup for Google+ */}

                    <meta
                        id="meta-item-name"
                        itemProp="name"
                        content="John Layda's Portfolio"
                    />
                    <meta
                        id="meta-item-description"
                        itemProp="description"
                        content="Creating a website without the help of a Developer is difficult; I'm committed to providing you with the best website design and high quality hosting including support, website maintenance, and many other services."
                    />
                    <meta
                        id="meta-item-image"
                        itemProp="image"
                        content=""
                    />

                    {/* Twitter Card Data */}

                    <meta
                        id="twt-card"
                        name="twitter:card"
                        content="summary"
                    />
                    <meta
                        id="twt-site"
                        name="twitter:site"
                        content="@JohnLaydaPortfolio"
                    />
                    <meta
                        id="twt-title"
                        name="twitter:title"
                        content="John Layda's Portfolio"
                    />
                    <meta
                        id="twt-description"
                        name="twitter:description"
                        content="Creating a website without the help of a Developer is difficult; I'm committed to providing you with the best website design and high quality hosting including support, website maintenance, and many other services."
                    />
                    <meta
                        id="twt-creator"
                        name="twitter:creator"
                        content="@JohnLaydaPortfolio"
                    />
                    <meta
                        id="twt-image"
                        name="twitter:image"
                        content=""
                    />

                    {/* Open Graph Data */}

                    <meta
                        id="og-title"
                        property="og:title"
                        content="John Layda's Portfolio"
                    />
                    <meta
                        id="og-type"
                        property="og:type"
                        content="website"
                    />
                    <meta
                        id="og-url"
                        property="og:url"
                        content="https://johnlayda.vercel.app"
                    />
                    <meta
                        id="og-image"
                        property="og:image"
                        content=""
                    />
                    <meta
                        id="og-description"
                        property="og:description"
                        content="Creating a website without the help of a Developer is difficult; I'm committed to providing you with the best website design and high quality hosting including support, website maintenance, and many other services."
                    />
                </Head>

                <body>
                    <Main />
                    <NextScript />

                    {/* Email */}

                    <Script
                        id="Email"
                        src="https://s.pageclip.co/v1/pageclip.js"
                        charSet="utf-8"
                    />

                </body>
            </Html>
        );
    }
}