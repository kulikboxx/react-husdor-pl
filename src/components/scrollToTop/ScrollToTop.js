import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }) {
    useEffect(() => {
        const unlisten = history.listen(() => window.scrollTo(0, 0));

        return () => unlisten();
        // eslint-disable-next-line
    }, []);

    return <>{children}</>;
}

export default withRouter(ScrollToTop);
