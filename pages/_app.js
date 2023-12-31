import '../styles/globals.css'
import React from "react";
import Head from 'next/head';
import Header from "../src/components/Layout/Header";
import Footer from "../src/components/Layout/Footer";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
