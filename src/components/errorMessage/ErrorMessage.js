import './errorMessage.scss';
import img from './error.svg';

const ErrorMessage = () => {
    return (
        <div className="bg-white">
            <img className="error-image d-block mx-auto h-auto" src={img} alt="img error 404" />
            <h2 className="mt-4 fs-2 text-center text-black">
                Coś poszło nie tak... Odśwież stronę i spróbuj jeszcze raz
            </h2>
        </div>
    );
};

export default ErrorMessage;
