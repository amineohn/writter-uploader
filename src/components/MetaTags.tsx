type Tags = {
    title: string;
    description: string;
    url: string;
    image: string;
    themeColor: string;
    keywords: string;
    author: string;
    charSet: string;
    language: string;
    icons: {
        src: string;
        sizes: string;
        type: string;
    }[];
};

export default function MetaTags({ data }: { data: Tags }) {
    return (
        <>
            {/* Primary Meta Tags */}
            <link rel="canonical" href={data.url} />

            {data.icons.map((icon) => (
                <link key={icon.src} rel="icon" type={icon.type} sizes={icon.sizes} href={icon.src} />
            ))}

            <meta name="viewport" content="initial-scale=1" />
            <meta name="robots" content="index, nofollow" />

            <meta charSet={data.charSet} />
            <meta httpEquiv="Content-Type" content={`text/html; charset=${data.charSet}`} />
            <meta name="theme-color" content={data.themeColor} />
            <meta name="msapplication-TileColor" content={data.themeColor} />

            <meta name="title" content={data.title} />
            <meta name="description" content={data.description} />
            <meta name="keywords" content={data.keywords} />
            <meta name="language" content={data.language} />
            <meta name="author" content={data.author} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={data.url} />
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            <meta property="og:image" content={data.image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={data.url} />
            <meta property="twitter:title" content={data.title} />
            <meta property="twitter:description" content={data.description} />
            <meta property="twitter:image" content={data.image} />
        </>
    );
}
