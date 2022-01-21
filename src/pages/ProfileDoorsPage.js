import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROFILE_DOORS_DATA } from '../queries/Queries';

import TransitionEffect from '../lib/TransitionEffect';
import SEOHelmet from '../components/seoHelmet/SEOHelmet';
import HeroSection from '../components/heroSection/HeroSection';
import InteriorDoorsSection from '../components/interiorDoorsSection/InteriorDoorsSection';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

export default function ProfileDoorsPage({ initialLoading, onLoaded, toggleModalFormVisibility }) {
    const tabs = ['Profilowane I', 'Profilowane II', 'Profilowane III', 'Profilowane IV'];

    const { loading, error, data } = useQuery(GET_PROFILE_DOORS_DATA);

    const seoProfileDoors = data && data.allSeoProfileDoors.edges[0].node.seoProfileDoors;
    const heroSection = data && data.allProfileDoorsHero.edges[0].node.profileDoorsHero;
    const content =
        data &&
        data.allProfileDoorsContent.edges
            .map((item) => {
                const text = item.node.profileDoorsContent.text;

                const arr = item.node.content.split('src="').filter((item) => item.includes('http'));
                const images = arr && arr.map((item) => item.split(' ')[0].replace('"', ''));

                return [images, text];
            })
            .reverse();

    const catalogs = data && data.allProfileDoorsCatalogs.edges.map((item) => item.node.profileDoorsCatalogs).reverse();

    // eslint-disable-next-line
    useEffect(() => setTimeout(onLoaded, 2500), []);

    return (
        <>
            {loading && !initialLoading ? <Loader /> : null}
            {error && <ErrorMessage />}
            {!(loading && error) && (
                <TransitionEffect loading={loading}>
                    <SEOHelmet seoData={seoProfileDoors} />
                    <HeroSection heroSection={heroSection} />
                    <InteriorDoorsSection
                        tabs={tabs}
                        content={content}
                        catalogs={catalogs}
                        toggleModalFormVisibility={toggleModalFormVisibility}
                    />
                </TransitionEffect>
            )}
        </>
    );
}
