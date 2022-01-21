import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Routes from '../../routes/Routes';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ModalForm from '../modalForm/ModalForm';
import ScrollToTop from '../scrollToTop/ScrollToTop';
import Cookie from '../cookie/Cookie';

import TransitionEffect from '../../lib/TransitionEffect';

const AppLayout = ({ loading, error, data }) => {
    const { routes } = Routes();

    const [initialLoading, setInitialLoading] = useState(true);
    const [showModalForm, setShowModalForm] = useState(false);

    const onLoaded = () => setInitialLoading(false);
    const toggleModalFormVisibility = (value) => setShowModalForm(value);

    const dataContacts = data && data.allDataContacts.edges[0].node.dataContacts;
    const footerText = data && data.allFooter.edges[0].node.footer;

    return (
        <TransitionEffect loading={loading}>
            <Header routes={routes} dataContacts={dataContacts} />
            <main>
                <ScrollToTop>
                    <Switch>
                        {routes.map(({ path, Component }) => (
                            <Route key={path} exact path={path}>
                                <Component
                                    dataContacts={dataContacts}
                                    routes={routes}
                                    initialLoading={initialLoading}
                                    onLoaded={onLoaded}
                                    toggleModalFormVisibility={toggleModalFormVisibility}
                                />
                            </Route>
                        ))}
                    </Switch>
                    {!(loading && error) && (
                        <ModalForm
                            showModalForm={showModalForm}
                            toggleModalFormVisibility={toggleModalFormVisibility}
                        />
                    )}
                </ScrollToTop>
            </main>
            <Footer routes={routes} dataContacts={dataContacts} footerText={footerText} />
            {!(loading && error) && <Cookie />}
        </TransitionEffect>
    );
};

export default AppLayout;
