import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTACT_PAGE_DATA } from '../queries/Queries';

import TransitionEffect from '../lib/TransitionEffect';
import SEOHelmet from '../components/seoHelmet/SEOHelmet';
import HeroSection from '../components/heroSection/HeroSection';
import ContactSection from '../components/contactSection/ContactSection';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

export default function ContactPage({ dataContacts, initialLoading, onLoaded }) {
    const { loading, error, data } = useQuery(GET_CONTACT_PAGE_DATA);

    const seoContact = data && data.allSeoContact.edges[0].node.seoContact;
    const heroSection = data && data.allContactHero.edges[0].node.contactHero;
    const content = data && data.allContactText.edges[0].node.contactText;

    // eslint-disable-next-line
    useEffect(() => setTimeout(onLoaded, 2500), []);

    return (
        <>
            {loading && !initialLoading ? <Loader /> : null}
            {error && <ErrorMessage />}
            {!(loading && error) && (
                <TransitionEffect loading={loading}>
                    <SEOHelmet seoData={seoContact} />
                    <HeroSection heroSection={heroSection} />
                    <ContactSection content={content} dataContacts={dataContacts} />
                </TransitionEffect>
            )}
        </>
    );
}
