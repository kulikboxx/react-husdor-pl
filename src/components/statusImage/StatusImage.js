import './statusImage.scss';

export default function StatusImage({ image, status }) {
    return (
        <div className="status-image">
            <img src={image} alt={status} className="d-block mx-auto" />
            <h2 className="mt-4 text-center fs-2 fw-bold text-black">{status}</h2>
        </div>
    );
}
