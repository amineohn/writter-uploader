import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import MetaTags from "@/components/MetaTags";
import { Firebase } from "@/lib/firebase";
import { seo } from "@/meta/seo";

const App = ({ Component, pageProps }: AppProps) => {
    const fire = new Firebase();
    fire.init();
    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <MetaTags data={seo} />
            </Head>

            <Component {...pageProps} />
        </>
    );
};

export default App;
