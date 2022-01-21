import { Helmet } from 'react-helmet';

export default function SEOHelmet({ seoData }) {
    return (
        <>
            {seoData && (
                <Helmet>
                    <title>{seoData.title}</title>
                    <link rel="canonical" href={window.location.href} />
                    <meta name="description" content={seoData.description} />
                    <meta name="keywords" content={seoData.keywords} />
                    <meta property="og:title" content={seoData.title} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:image" content={seoData.image.sourceUrl} />
                    <meta property="og:description" content={seoData.description} />
                    <meta property="og:locale" content="pl_PL" />
                    <meta property="og:site_name" content="Husdor.pl - Sprzedaż Drzwi" />
                    <meta name="twitter:title" content={seoData.title} />
                    <meta name="twitter:description" content={seoData.description} />
                    <meta name="twitter:image" content={seoData.image.sourceUrl} />
                </Helmet>
            )}
        </>
    );
}
