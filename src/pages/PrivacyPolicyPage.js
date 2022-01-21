import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRIVACY_POLICY_DATA } from '../queries/Queries';

import TransitionEffect from '../lib/TransitionEffect';
import SEOHelmet from '../components/seoHelmet/SEOHelmet';
import HeroSection from '../components/heroSection/HeroSection';
import PrivacyPolicy from '../components/privacyPolicy/PrivacyPolicy';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

export default function PrivacyPolicyPage({ initialLoading, onLoaded }) {
    const { loading, error, data } = useQuery(GET_PRIVACY_POLICY_DATA);

    const seoPrivacyPolicy = data && data.allSeoPrivacyPolicy.edges[0].node.seoPrivacyPolicy;
    const heroSection = data && data.allPrivacyPolicyHero.edges[0].node.privacyPolicyHero;
    const content = data && data.allPrivacyPolicyText.edges[0].node.privacyPolicyText;

    // eslint-disable-next-line
    useEffect(() => setTimeout(onLoaded, 2500), []);

    return (
        <>
            {loading && !initialLoading ? <Loader /> : null}
            {error && <ErrorMessage />}
            {!(loading && error) && (
                <TransitionEffect loading={loading}>
                    <SEOHelmet seoData={seoPrivacyPolicy} />
                    <HeroSection heroSection={heroSection} />
                    <PrivacyPolicy content={content} />
                </TransitionEffect>
            )}
        </>
    );
}
