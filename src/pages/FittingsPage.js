import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_FITTINGS_DATA } from '../queries/Queries';

import TransitionEffect from '../lib/TransitionEffect';
import SEOHelmet from '../components/seoHelmet/SEOHelmet';
import HeroSection from '../components/heroSection/HeroSection';
import DoorsWithCatalog from '../components/doorsWithCatalog/DoorsWithCatalog';
import Loader from '../components/loader/Loader';

export default function FittingsPage({ initialLoading, onLoaded, toggleModalFormVisibility }) {
    const { loading, error, data } = useQuery(GET_FITTINGS_DATA);

    const seoFittings = data && data.allSeoFittings.edges[0].node.seoFittings;
    const heroSection = data && data.allFittingsHero.edges[0].node.fittingsHero;
    const content = data && data.allFittingsContent.edges.map((item) => item.node.fittingsContent.text).reverse();
    const catalogs = data && data.allFittingsCatalogs.edges.map((item) => item.node.fittingsCatalogs).reverse();

    // eslint-disable-next-line
    useEffect(() => setTimeout(onLoaded, 2500), []);

    return (
        <>
            {loading && !initialLoading ? <Loader /> : null}
            {error && <Loader />}
            {!(loading && error) && (
                <TransitionEffect loading={loading}>
                    <SEOHelmet seoData={seoFittings} />
                    <HeroSection heroSection={heroSection} />
                    <DoorsWithCatalog
                        content={content}
                        catalogs={catalogs}
                        toggleModalFormVisibility={toggleModalFormVisibility}
                    />
                </TransitionEffect>
            )}
        </>
    );
}
