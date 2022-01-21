import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_INTERIOR_DOORS_DATA } from '../queries/Queries';

import TransitionEffect from '../lib/TransitionEffect';
import SEOHelmet from '../components/seoHelmet/SEOHelmet';
import HeroSection from '../components/heroSection/HeroSection';
import DoorsWithCatalog from '../components/doorsWithCatalog/DoorsWithCatalog';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

export default function InteriorDoorsPage({ initialLoading, onLoaded, toggleModalFormVisibility }) {
    const { loading, error, data } = useQuery(GET_INTERIOR_DOORS_DATA);

    const seoInteriorDoors = data && data.allSeoInteriorDoors.edges[0].node.seoInteriorDoors;
    const heroSection = data && data.allInteriorDoorsHero.edges[0].node.interiorDoorsHero;
    const content =
        data && data.allInteriorDoorsContent.edges.map((item) => item.node.interiorDoorsContent.text).reverse();
    const catalogs =
        data && data.allInteriorDoorsCatalogs.edges.map((item) => item.node.interiorDoorsCatalogs).reverse();

    // eslint-disable-next-line
    useEffect(() => setTimeout(onLoaded, 2500), []);

    return (
        <>
            {loading && !initialLoading ? <Loader /> : null}
            {error && <ErrorMessage />}
            {!(loading && error) && (
                <TransitionEffect loading={loading}>
                    <SEOHelmet seoData={seoInteriorDoors} />
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
