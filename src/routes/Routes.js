import {
    HomePage,
    ProfileDoorsPage,
    InteriorDoorsSmoothPage,
    InteriorDoorsSmoothStripPage,
    InteriorDoorsPage,
    MetalDoorsPage,
    FittingsPage,
    WoodenDoors,
    DoorsForCompaniesPage,
    RealizationsPage,
    ContactPage,
    PrivacyPolicyPage,
    Page404,
} from '../pages';

export default function Routes() {
    const routes = [
        {
            path: '/',
            name: 'Home',
            Component: HomePage,
        },
        {
            path: '/drzwi-zewnetrzne',
            name: 'Zewnętrzne',
            Component: ProfileDoorsPage,
        },
        {
            path: '/drzwi-zewnetrzne/wewnatrzlokalowe',
            name: 'Wewnątrzlokalowe',
            Component: ProfileDoorsPage,
        },
        {
            path: '/drzwi-zewnetrzne/wewnatrzlokalowe/profilowane',
            name: 'Profilowane',
            Component: ProfileDoorsPage,
        },
        {
            path: '/drzwi-zewnetrzne/wewnatrzlokalowe/gladkie',
            name: 'Gładkie',
            Component: InteriorDoorsSmoothPage,
        },
        {
            path: '/drzwi-zewnetrzne/wewnatrzlokalowe/gladkie-z-listwa',
            name: 'Gładkie z listwą',
            Component: InteriorDoorsSmoothStripPage,
        },
        {
            path: '/drzwi-zewnetrzne/metalowe',
            name: 'Metalowe',
            Component: MetalDoorsPage,
        },
        {
            path: '/drzwi-zewnetrzne/drewniane',
            name: 'Drewniane',
            Component: WoodenDoors,
        },
        {
            path: '/drzwi-wewnetrzne',
            name: 'Wewnętrzne',
            Component: InteriorDoorsPage,
        },
        {
            path: '/okucia',
            name: 'Okucia',
            Component: FittingsPage,
        },
        {
            path: '/drzwi-dla-firm',
            name: 'Dla firm',
            Component: DoorsForCompaniesPage,
        },
        {
            path: '/realizacje',
            name: 'Realizacje',
            Component: RealizationsPage,
        },
        {
            path: '/kontakt',
            name: 'Kontakt',
            Component: ContactPage,
        },
        {
            path: '/polityka-prywatnosci',
            name: 'Polityka prywatności',
            Component: PrivacyPolicyPage,
        },
        {
            path: '*',
            name: 'Page404',
            Component: Page404,
        },
    ];

    return { routes };
}
