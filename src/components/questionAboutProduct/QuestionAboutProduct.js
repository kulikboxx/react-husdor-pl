import { Button } from 'react-bootstrap';

export default function QuestionAboutProduct({ toggleModalFormVisibility, shrink = null }) {
    return (
        <Button
            className={`button question-button ${shrink ? 'mt-3' : 'mt-5'}`}
            onClick={() => toggleModalFormVisibility(true)}
        >
            Pytanie o produkt <i className="fas fa-plus-square fs-4"></i>
        </Button>
    );
}
