import { gql } from '@apollo/client';

const GET_HOME_DATA = gql`
    query Home {
        allSeoHome {
            edges {
                node {
                    seoHome {
                        description
                        keywords
                        title
                        image {
                            sourceUrl
                        }
                    }
                }
            }
        }
        allHomeSlider {
            edges {
                node {
                    homeSlider {
                        suptitle
                        title
                        imagelarge {
                            sourceUrl
                        }
                        imagemedium {
                            sourceUrl
                        }
                        imagesmall {
                            sourceUrl
                        }
                    }
                }
            }
        }
        allHomeAboutus {
            edges {
                node {
                    homeAboutus {
                        supertitle
                        title
                        text
                        image1 {
                            sourceUrl
                        }
                        image2 {
                            sourceUrl
                        }
                    }
                }
            }
        }
        allHomeCounters {
            edges {
                node {
                    homeCounters {
                        counter
                        title
                    }
                }
            }
        }
        allHomeDoorsText {
            edges {
                node {
                    homeDoorsText {
                        supertitle
                        title
                        text
                    }
                }
            }
        }
        allHomeDoorsSlider {
            edges {
                node {
                    homeDoorsSlider {
                        title
                        image {
                            sourceUrl
                        }
                    }
                }
            }
        }
        allHomePartners {
            edges {
                node {
                    content(format: RENDERED)
                }
            }
        }
        allHomeFaqText {
            edges {
                node {
                    homeFaqText {
                        supertitle
                        title
                    }
                }
            }
        }
        allHomeFaqQuestions {
            edges {
                node {
                    homeFaqQuestions {
                        questiontitle
                        questiontext
                    }
                }
            }
        }
    }
`;

const GET_CONTACT_DATA = gql`
    query DataContacts {
        allDataContacts {
            edges {
                node {
                    dataContacts {
                        addresscentraloffice
                        addresscentralofficelink
                        addressheadername
                        emailcentraloffice
                        emailheadername
                        emailsubsidiary
                        facebook
                        instagram
                        phonecentraloffice1
                        phonecentraloffice2
                        phoneheadername
                        phonesubsidiary
                        workhours
                    }
                }
            }
        }
        allFooter {
            edges {
                node {
                    footer {
                        text
                    }
                }
            }
        }
    }
`;

const GET_REALIZATIONS_DATA = gql`
    query RealizationsData {
        allSeoRealizations {
            edges {
                node {
                    seoRealizations {
                        description
                        keywords
                        title
                        image {
                            sourceUrl
                        }
                    }
                }
            }
        }
        allRealizationsHero {
            edges {
                node {
                    realizationsHero {
                        heroimage {
                            sourceUrl
                        }
                        herotitle
                    }
                }
            }
        }
        allRealizationsImages {
            edges {
                node {
                    content(format: RENDERED)
                }
            }
        }
    }
`;

const GET_CONTACT_PAGE_DATA = gql`
    query ContactPage {
        allSeoContact {
            edges {
                node {
                    seoContact {
                        description
                        image {
                            sourceUrl
                        }
                        keywords
                        title
                    }
                }
            }
        }
        allContactHero {
            edges {
                node {
                    contactHero {
                        heroimage {
                            sourceUrl
                        }
                        herotitle
                    }
                }
            }
        }
        allContactText {
            edges {
                node {
                    contactText {
                        centralofficeemailtext
                        centralofficephonetext
                        centralofficetext
                        consent
                        image {
                            sourceUrl
                        }
                        imagemap {
                            sourceUrl
                        }
                        subsidiaryemailtext
                        subsidiaryphonetext
                        text
                        workhourstext
                    }
                }
            }
        }
    }
`;

const GET_PRIVACY_POLICY_DATA = gql`
    query PrivacyPolicyData {
        allSeoPrivacyPolicy {
            edges {
                node {
                    seoPrivacyPolicy {
                        description
                        image {
                            sourceUrl
                        }
                        keywords
                        title
                    }
                }
            }
        }
        allPrivacyPolicyHero {
            edges {
                node {
                    privacyPolicyHero {
                        heroimage {
                            sourceUrl
                        }
                        herotitle
                    }
                }
            }
        }
        allPrivacyPolicyText {
            edges {
                node {
                    privacyPolicyText {
                        text
                    }
                }
            }
        }
    }
`;

const GET_PROFILE_DOORS_DATA = gql`
    query ProfileDoorsData {
        allSeoProfileDoors {
            edges {
                node {
                    seoProfileDoors {
                        description
                        image {
                            sourceUrl
                        }
                        keywords
                        title
                    }
                }
            }
        }
        allProfileDoorsHero {
            edges {
                node {
                    profileDoorsHero {
                        heroimage {
                            sourceUrl
                        }
                        herotitle
                    }
                }
            }
        }
        allProfileDoorsContent {
            edges {
                node {
                    profileDoorsContent {
                        text
                    }
                    content(format: RENDERED)
                }
            }
        }
        allProfileDoorsCatalogs {
            edges {
                node {
                    profileDoorsCatalogs {
                        catalog {
                            mediaItemUrl
                        }
                        image {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`;

const GET_SMOOTH_DOORS_DATA = gql`
    query SmoothDoorsData {
        allSeoSmoothDoors {
            edges {
                node {
                    seoSmoothDoors {
                        description
                        image {
                            sourceUrl
                        }
                        keywords
                        title
                    }
                }
            }
        }
        allSmoothDoorsHero {
            edges {
                node {
                    smoothDoorsHero {
                        heroimage {
                            sourceUrl
                        }
                        herotitle
                    }
                }
            }
        }
        allSmoothDoorsContent {
            edges {
                node {
                    content(format: RENDERED)
                    smoothDoorsContent {
                        text
                    }
                }
            }
        }
        allSmoothDoorsCatalogs {
            edges {
                node {
                    smoothDoorsCatalogs {
                        catalog {
                            mediaItemUrl
                        }
                        image {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`;

const GET_STRIP_DOORS_DATA = gql`
    query StripDoorsData {
        allSeoStripDoors {
            edges {
                node {
                    seoStripDoors {
                        description
                        image {
                            sourceUrl
                        }
                        keywords
                        title
                    }
                }
            }
        }
        allStripDoorsHero {
            edges {
                node {
                    stripDoorsHero {
                        heroimage {
                            sourceUrl
                        }
                        herotitle
                    }
                }
            }
        }
        allStripDoorsContent {
            edges {
                node {
                    content(format: RENDERED)
                    stripDoorsContent {
                        text
                    }
                }
            }
        }
        allStripDoorsCatalogs {
            edges {
                node {
                    stripDoorsCatalogs {
                        catalog {
                            mediaItemUrl
                        }
                        image {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`;

const GET_METAL_DOORS_DATA = gql`
    query MetalDoorsData {
        allSeoMetalDoors {
            edges {
                node {
                    seoMetalDoors {
                        description
                        image {
                            sourceUrl
                        }
                        keywords
                        title
                    }
                }
            }
        }
        allMetalDoorsHero {
            edges {
                node {
                    metalDoorsHero {
                        heroimage {
                            sourceUrl
                        }
                        herotitle
                    }
                }
            }
        }
        allMetalDoorsContent {
            edges {
                node {
                    metalDoorsContent {
                        text
                    }
                }
            }
        }
        allMetalDoorsCatalogs {
            edges {
                node {
                    metalDoorsCatalogs {
                        catalog {
                            mediaItemUrl
                        }
                        image {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`;

const GET_WOODEN_DOORS_DATA = gql`
    query WoodenDoorsData {
        allSeoWoodenDoors {
            edges {
                node {
                    seoWoodenDoors {
                        description
                        image {
                            sourceUrl
                        }
                        keywords
                        title
                    }
                }
            }
        }
        allWoodenDoorsHero {
            edges {
                node {
                    woodenDoorsHero {
                        heroimage {
                            sourceUrl
                        }
                        herotitle
                    }
                }
            }
        }
        allWoodenDoorsContent {
            edges {
                node {
                    woodenDoorsContent {
                        text
                    }
                }
            }
        }
        allWoodenDoorsCatalogs {
            edges {
                node {
                    woodenDoorsCatalogs {
                        catalog {
                            mediaItemUrl
                        }
                        image {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`;

const GET_INTERIOR_DOORS_DATA = gql`
    query InteriorDoorsData {
        allSeoInteriorDoors {
            edges {
                node {
                    seoInteriorDoors {
                        description
                        image {
                            sourceUrl
                        }
                        keywords
                        title
                    }
                }
            }
        }
        allInteriorDoorsHero {
            edges {
                node {
                    interiorDoorsHero {
                        heroimage {
                            sourceUrl
                        }
                        herotitle
                    }
                }
            }
        }
        allInteriorDoorsContent {
            edges {
                node {
                    interiorDoorsContent {
                        text
                    }
                }
            }
        }
        allInteriorDoorsCatalogs {
            edges {
                node {
                    interiorDoorsCatalogs {
                        catalog {
                            mediaItemUrl
                        }
                        image {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`;

const GET_FITTINGS_DATA = gql`
    query FittingsData {
        allSeoFittings {
            edges {
                node {
                    seoFittings {
                        description
                        image {
                            sourceUrl
                        }
                        keywords
                        title
                    }
                }
            }
        }
        allFittingsHero {
            edges {
                node {
                    fittingsHero {
                        heroimage {
                            sourceUrl
                        }
                        herotitle
                    }
                }
            }
        }
        allFittingsContent {
            edges {
                node {
                    fittingsContent {
                        text
                    }
                }
            }
        }
        allFittingsCatalogs {
            edges {
                node {
                    fittingsCatalogs {
                        catalog {
                            mediaItemUrl
                        }
                        image {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`;

const GET_COMPANIES_DOORS_DATA = gql`
    query MyQuery {
        allSeoCompaniesDoors {
            edges {
                node {
                    seoCompaniesDoors {
                        description
                        image {
                            sourceUrl
                        }
                        keywords
                        title
                    }
                }
            }
        }
        allCompaniesDoorsHero {
            edges {
                node {
                    companiesDoorsHero {
                        heroimage {
                            sourceUrl
                        }
                        herotitle
                    }
                }
            }
        }
        allCompaniesDoorsContent {
            edges {
                node {
                    companiesDoorsContent {
                        text
                    }
                }
            }
        }
        allCompaniesDoorsCatalogs {
            edges {
                node {
                    companiesDoorsCatalogs {
                        catalog {
                            mediaItemUrl
                        }
                        image {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`;

const GET_MODAL_CONSENT = gql`
    query ModalConsent {
        allContactText {
            edges {
                node {
                    contactText {
                        consent
                    }
                }
            }
        }
    }
`;

export {
    GET_HOME_DATA,
    GET_CONTACT_DATA,
    GET_REALIZATIONS_DATA,
    GET_CONTACT_PAGE_DATA,
    GET_PRIVACY_POLICY_DATA,
    GET_PROFILE_DOORS_DATA,
    GET_SMOOTH_DOORS_DATA,
    GET_STRIP_DOORS_DATA,
    GET_METAL_DOORS_DATA,
    GET_WOODEN_DOORS_DATA,
    GET_INTERIOR_DOORS_DATA,
    GET_FITTINGS_DATA,
    GET_COMPANIES_DOORS_DATA,
    GET_MODAL_CONSENT,
};
