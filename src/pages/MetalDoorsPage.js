import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_METAL_DOORS_DATA } from '../queries/Queries';

import TransitionEffect from '../lib/TransitionEffect';
import SEOHelmet from '../components/seoHelmet/SEOHelmet';
import HeroSection from '../components/heroSection/HeroSection';
import DoorsWithCatalog from '../components/doorsWithCatalog/DoorsWithCatalog';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

export default function MetalDoorsPage({ initialLoading, onLoaded, toggleModalFormVisibility }) {
    const { loading, error, data } = useQuery(GET_METAL_DOORS_DATA);

    const seoMetalDoors = data && data.allSeoMetalDoors.edges[0].node.seoMetalDoors;
    const heroSection = data && data.allMetalDoorsHero.edges[0].node.metalDoorsHero;
    const content = data && data.allMetalDoorsContent.edges.map((item) => item.node.metalDoorsContent.text).reverse();
    const catalogs = data && data.allMetalDoorsCatalogs.edges.map((item) => item.node.metalDoorsCatalogs).reverse();

    // eslint-disable-next-line
    useEffect(() => setTimeout(onLoaded, 2500), []);

    return (
        <>
            {loading && !initialLoading ? <Loader /> : null}
            {error && <ErrorMessage />}
            {!(loading && error) && (
                <TransitionEffect loading={loading}>
                    <SEOHelmet seoData={seoMetalDoors} />
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
