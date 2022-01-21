import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_WOODEN_DOORS_DATA } from '../queries/Queries';

import TransitionEffect from '../lib/TransitionEffect';
import SEOHelmet from '../components/seoHelmet/SEOHelmet';
import HeroSection from '../components/heroSection/HeroSection';
import DoorsWithCatalog from '../components/doorsWithCatalog/DoorsWithCatalog';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

export default function MetalDoorsPage({ initialLoading, onLoaded, toggleModalFormVisibility }) {
    const { loading, error, data } = useQuery(GET_WOODEN_DOORS_DATA);

    const seoWoodenDoors = data && data.allSeoWoodenDoors.edges[0].node.seoWoodenDoors;
    const heroSection = data && data.allWoodenDoorsHero.edges[0].node.woodenDoorsHero;
    const content = data && data.allWoodenDoorsContent.edges.map((item) => item.node.woodenDoorsContent.text).reverse();
    const catalogs = data && data.allWoodenDoorsCatalogs.edges.map((item) => item.node.woodenDoorsCatalogs).reverse();

    // eslint-disable-next-line
    useEffect(() => setTimeout(onLoaded, 2500), []);

    return (
        <>
            {loading && !initialLoading ? <Loader /> : null}
            {error && <ErrorMessage />}
            {!(loading && error) && (
                <TransitionEffect loading={loading}>
                    <SEOHelmet seoData={seoWoodenDoors} />
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
