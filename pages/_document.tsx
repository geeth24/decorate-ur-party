import { createGetInitialProps } from "@mantine/next"
import Document, { Head, Html, Main, NextScript } from "next/document"

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
    static getInitialProps = getInitialProps

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/DUPLogo.png" />
                    <link rel="apple-touch-icon" href="/DUPLogo.png" />
                    <meta property="og:title" content="Decorate Ur Party" />
                    <meta
                        name="image"
                        property="og:image"
                        content="/DUPBC.jpeg"
                    />
                    <meta name="author" content="Padmaja Janjanam" />
                    <meta
                        property="og:description"
                        content="From imagination to reality"
                    />
                    <meta
                        property="og:url"
                        content="https://decorateurparty.com"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
