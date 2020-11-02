import './Loading.scss';

const blockName = 'loading-container';
const Loading = ({message}) => {
    return (
        <div className={blockName}>
            <span>{message}</span>
            <div className={`${blockName}__spin`} />
        </div>
    );
};

export default Loading;
