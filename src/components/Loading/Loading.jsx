import './Loading.scss';

const blockName = 'loading-container';
const Loading = ({message}) => {
    return (
        <div className={blockName}>
            <span>{message}</span>
            <div className={`${blockName}__spinner`} />
        </div>
    );
};

export default Loading;
