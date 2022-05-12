import social from "@src/content/social";
import Head from "next/head";

interface SeoProps {
    title: string;
    description: string;
}

const Seo = ({ title, description }: SeoProps) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="shortcut icon" href="favicon.ico" />
            <link rel="canonical" href="https://johnpels.com" />

            <meta name="description" content={description} />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
            <link rel="manifest" href="/images/site.webmanifest" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={social.me} />
            <meta property="og:url" content="https://johnpels.com" />
            <meta name="twitter:card" content="summary" />
        </Head>
    );
};

export { Seo };
