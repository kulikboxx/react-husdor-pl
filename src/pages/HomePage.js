import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_HOME_DATA } from '../queries/Queries';

import TransitionEffect from '../lib/TransitionEffect';
import SEOHelmet from '../components/seoHelmet/SEOHelmet';
import Slider from '../components/slider/Slider';
import AboutusSection from '../components/aboutusSection/AboutusSection';
import CountersSection from '../components/countersSection/CountersSection';
import DoorsSection from '../components/doorsSection/DoorsSection';
import PartnersSection from '../components/partnersSection/PartnersSection';
import FaqSection from '../components/faqSection/FaqSection';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

export default function HomePage({ routes, initialLoading, onLoaded }) {
    const { loading, error, data } = useQuery(GET_HOME_DATA);

    const seoHome = data && data.allSeoHome.edges[0].node.seoHome;
    const slider = data && data.allHomeSlider.edges.map((item) => item.node.homeSlider);
    const aboutus = data && data.allHomeAboutus.edges[0].node.homeAboutus;
    const counters = data && data.allHomeCounters.edges.map((item) => item.node.homeCounters);
    const doors = data && data.allHomeDoorsText.edges[0].node.homeDoorsText;
    const doorsSlider = data && data.allHomeDoorsSlider.edges.map((item) => item.node.homeDoorsSlider);
    const partners = data && data.allHomePartners.edges[0].node.content;
    const faq = data && data.allHomeFaqText.edges[0].node.homeFaqText;
    const faqQuestions = data && data.allHomeFaqQuestions.edges.map((item) => item.node.homeFaqQuestions);

    // eslint-disable-next-line
    useEffect(() => setTimeout(onLoaded, 2500), []);

    return (
        <>
            {loading && !initialLoading ? <Loader /> : null}
            {error && <ErrorMessage />}
            {!(loading && error) && (
                <TransitionEffect loading={loading}>
                    <SEOHelmet seoData={seoHome} />
                    <Slider slider={slider} />
                    <AboutusSection aboutus={aboutus} />
                    <CountersSection counters={counters} />
                    <DoorsSection doors={doors} doorsSlider={doorsSlider} routes={routes} />
                    <PartnersSection partners={partners} />
                    <FaqSection faq={faq} faqQuestions={faqQuestions} />
                </TransitionEffect>
            )}
        </>
    );
}
