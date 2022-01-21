import { Transition } from 'react-transition-group';
import { duration, defaultStyle, transitionStyles } from './TransitionStyles';

const TransitionEffect = (props) => {
    const { loading } = props;

    return (
        <Transition in={!loading} timeout={duration}>
            {(state) => (
                <div
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                    }}
                >
                    {props.children}
                </div>
            )}
        </Transition>
    );
};

export default TransitionEffect;
