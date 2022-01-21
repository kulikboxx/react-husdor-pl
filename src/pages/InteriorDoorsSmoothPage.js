import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SMOOTH_DOORS_DATA } from '../queries/Queries';

import TransitionEffect from '../lib/TransitionEffect';
import SEOHelmet from '../components/seoHelmet/SEOHelmet';
import HeroSection from '../components/heroSection/HeroSection';
import InteriorDoorsSection from '../components/interiorDoorsSection/InteriorDoorsSection';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

export default function InteriorDoorsSmoothPage({ initialLoading, onLoaded, toggleModalFormVisibility }) {
    const { loading, error, data } = useQuery(GET_SMOOTH_DOORS_DATA);

    const seoSmoothDoors = data && data.allSeoSmoothDoors.edges[0].node.seoSmoothDoors;
    const heroSection = data && data.allSmoothDoorsHero.edges[0].node.smoothDoorsHero;
    const content =
        data &&
        data.allSmoothDoorsContent.edges
            .map((item) => {
                const text = item.node.smoothDoorsContent.text;

                const arr = item.node.content.split('src="').filter((item) => item.includes('http'));
                const images = arr && arr.map((item) => item.split(' ')[0].replace('"', ''));

                return [images, text];
            })
            .reverse();

    const catalogs = data && data.allSmoothDoorsCatalogs.edges.map((item) => item.node.smoothDoorsCatalogs).reverse();

    // eslint-disable-next-line
    useEffect(() => setTimeout(onLoaded, 2500), []);

    return (
        <>
            {loading && !initialLoading ? <Loader /> : null}
            {error && <ErrorMessage />}
            {!(loading && error) && (
                <TransitionEffect loading={loading}>
                    <SEOHelmet seoData={seoSmoothDoors} />
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
