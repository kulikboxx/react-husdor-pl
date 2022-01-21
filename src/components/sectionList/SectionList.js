import './sectionList.scss';

export default function SectionList({ list }) {
    return (
        <ul className="section-list list-unstyled">
            {list
                ? list.map((item, i) => (
                      <li key={i}>
                          <i className="fas fa-check-circle"></i> {item}
                      </li>
                  ))
                : null}
        </ul>
    );
}
