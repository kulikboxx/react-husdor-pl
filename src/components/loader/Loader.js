import './loader.scss';

import logoImg from '../../assets/img/loader/logo.png';

export default function Loader({ typeLoading = null }) {
    return (
        <div
            className="loader position-fixed d-flex justify-content-center align-items-center top-0 start-0 w-100 vh-100 bg-white"
            style={{ zIndex: typeLoading === 'initial' ? 50 : 1 }}
        >
            <div className="loader-wrapper position-fixed d-flex flex-column justify-content-center align-items-center top-50 start-50 w-100">
                <img src={logoImg} alt="Husdor Drzwi Łódź" className="rounded-circle" />
                <span className="loader-inner position-absolute rounded-circle"></span>
                {typeLoading === 'initial' ? (
                    <h2 className="loader-text mt-5 p-4 w-100 text-black text-center fw-bold lh-lg">
                        Witaj na stronie Husdor.pl! {':)'}
                    </h2>
                ) : null}
            </div>
        </div>
    );
}
