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
            <link rel="shortcut icon" href="/icon0.png" />
            <link rel="canonical" href="https://johnpels.com" />

            <meta name="description" content={description} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={social.me} />
            <meta property="og:url" content="https://johnpels.com" />
            <meta name="twitter:card" content="summary" />
        </Head>
    );
};

export { Seo };
