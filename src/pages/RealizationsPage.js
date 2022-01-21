import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REALIZATIONS_DATA } from '../queries/Queries';

import TransitionEffect from '../lib/TransitionEffect';
import SEOHelmet from '../components/seoHelmet/SEOHelmet';
import HeroSection from '../components/heroSection/HeroSection';
import RealizationsSection from '../components/realizationsSection/RealizationsSection';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

export default function RealizationsPage({ initialLoading, onLoaded }) {
    const { loading, error, data } = useQuery(GET_REALIZATIONS_DATA);

    const seoRealizations = data && data.allSeoRealizations.edges[0].node.seoRealizations;
    const heroSection = data && data.allRealizationsHero.edges[0].node.realizationsHero;
    const images = data && data.allRealizationsImages.edges[0].node.content;

    // eslint-disable-next-line
    useEffect(() => setTimeout(onLoaded, 2500), []);

    return (
        <>
            {loading && !initialLoading ? <Loader /> : null}
            {error && <ErrorMessage />}
            {!(loading && error) && (
                <TransitionEffect loading={loading}>
                    <SEOHelmet seoData={seoRealizations} />
                    <HeroSection heroSection={heroSection} />
                    <RealizationsSection images={images} />
                </TransitionEffect>
            )}
        </>
    );
}
