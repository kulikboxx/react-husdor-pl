import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './cookie.scss';

export default function Cookie() {
    const [show, setShow] = useState(false);

    const cookieStorage = {
        getItem: (key) => {
            const cookies = document.cookie
                .split(';')
                .map((cookie) => cookie.split('='))
                .reduce(
                    (acc, [key, value]) => ({
                        ...acc,
                        [key.trim()]: value,
                    }),
                    {}
                );

            return cookies[key];
        },

        setItem: (key, value) => {
            let date = new Date(new Date().getTime() + 2592000000).toUTCString();

            document.cookie = `${key}=${value};expires=${date}`;
        },
    };

    const storageType = cookieStorage;
    const consentName = 'site_consent';

    const hasConsented = () => (storageType.getItem(consentName) === 'true' ? true : false);
    const toggleStorage = (value) => storageType.setItem(consentName, value);

    if (!hasConsented()) {
        setTimeout(() => setShow(true), 2000);
    }

    return (
        <div className={`consent-popup position-fixed bottom-0 start-0 end-0 p-3 ${show ? 'show' : ''}`}>
            <div className="consent-wrapper mx-auto p-5 text-black text-center fs-4 bg-white">
                <p className="consent-text">
                    Ta strona używa ciasteczek (cookies). Szczegółowe informacje znajdziesz na podstronie
                    <Link className="ms-2 text-black fw-bold text-decoration-none" to="/polityka-prywatnosci">
                        Polityka prywatności.
                    </Link>
                </p>
                <div className="d-flex flex-wrap justify-content-center">
                    <Button
                        className="button mx-3 my-2"
                        onClick={() => {
                            setShow(false);
                            toggleStorage(true);
                        }}
                    >
                        Akceptuj<i className="fas fa-check-square"></i>
                    </Button>
                    <Button
                        className="button mx-3 my-2"
                        onClick={() => {
                            setShow(false);
                            toggleStorage(false);
                        }}
                    >
                        Odrzuć<i className="fas fa-window-close"></i>
                    </Button>
                </div>
            </div>
        </div>
    );
}
