import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COMPANIES_DOORS_DATA } from '../queries/Queries';

import TransitionEffect from '../lib/TransitionEffect';
import SEOHelmet from '../components/seoHelmet/SEOHelmet';
import HeroSection from '../components/heroSection/HeroSection';
import DoorsWithCatalog from '../components/doorsWithCatalog/DoorsWithCatalog';
import Loader from '../components/loader/Loader';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

export default function DoorsForCompaniesPage({ initialLoading, onLoaded, toggleModalFormVisibility }) {
    const { loading, error, data } = useQuery(GET_COMPANIES_DOORS_DATA);

    const seoCompaniesDoors = data && data.allSeoCompaniesDoors.edges[0].node.seoCompaniesDoors;
    const heroSection = data && data.allCompaniesDoorsHero.edges[0].node.companiesDoorsHero;
    const content =
        data && data.allCompaniesDoorsContent.edges.map((item) => item.node.companiesDoorsContent.text).reverse();
    const catalogs =
        data && data.allCompaniesDoorsCatalogs.edges.map((item) => item.node.companiesDoorsCatalogs).reverse();

    // eslint-disable-next-line
    useEffect(() => setTimeout(onLoaded, 2500), []);

    return (
        <>
            {loading && !initialLoading ? <Loader /> : null}
            {error && <ErrorMessage />}
            {!(loading && error) && (
                <TransitionEffect loading={loading}>
                    <SEOHelmet seoData={seoCompaniesDoors} />
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
