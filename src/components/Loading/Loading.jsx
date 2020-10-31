import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpinner} from "@fortawesome/free-solid-svg-icons/faSpinner";
import './Loading.scss';

const blockName = 'loading-container';
const Loading = ({message}) => {
    return (
        <div className={blockName}>
            <FontAwesomeIcon icon={faSpinner} spin />
              {message}
        </div>
    );
};

export default Loading;
