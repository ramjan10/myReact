import WithCounter from "./HOC/WithCounter";

const ClickCounter = (props) => {
    const {count, incrimentCount} = props;
    return (
        <div>
            <button type="button" onClick={incrimentCount}>Click {count} Times</button>
        </div>
    );
}

export default WithCounter(ClickCounter);