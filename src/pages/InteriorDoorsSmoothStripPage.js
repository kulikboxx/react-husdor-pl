import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_STRIP_DOORS_DATA } from '../queries/Queries';

import TransitionEffect from '../lib/TransitionEffect';
import SEOHelmet from '../components/seoHelmet/SEOHelmet';
import HeroSection from '../components/heroSection/HeroSection';
import InteriorDoorsSection from '../components/interiorDoorsSection/InteriorDoorsSection';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

export default function InteriorDoorsSmoothStripPage({ initialLoading, onLoaded, toggleModalFormVisibility }) {
    const { loading, error, data } = useQuery(GET_STRIP_DOORS_DATA);

    const seoStripDoors = data && data.allSeoStripDoors.edges[0].node.seoStripDoors;
    const heroSection = data && data.allStripDoorsHero.edges[0].node.stripDoorsHero;
    const content =
        data &&
        data.allStripDoorsContent.edges
            .map((item) => {
                const text = item.node.stripDoorsContent.text;

                const arr = item.node.content.split('src="').filter((item) => item.includes('http'));
                const images = arr && arr.map((item) => item.split(' ')[0].replace('"', ''));

                return [images, text];
            })
            .reverse();

    const catalogs = data && data.allStripDoorsCatalogs.edges.map((item) => item.node.stripDoorsCatalogs).reverse();

    // eslint-disable-next-line
    useEffect(() => setTimeout(onLoaded, 2500), []);

    return (
        <>
            {loading && !initialLoading ? <Loader /> : null}
            {error && <ErrorMessage />}
            {!(loading && error) && (
                <TransitionEffect loading={loading}>
                    <SEOHelmet seoData={seoStripDoors} />
                    <HeroSection heroSection={heroSection} />
                    <InteriorDoorsSection
                        content={content}
                        catalogs={catalogs}
                        toggleModalFormVisibility={toggleModalFormVisibility}
                    />
                </TransitionEffect>
            )}
        </>
    );
}
