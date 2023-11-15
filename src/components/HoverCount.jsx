import WithCounter from "./HOC/WithCounter";

const HoverCount = (props) =>{
    const {count, incrimentCount} = props;
    return (
        <div>
            <button type="button" onMouseOver={incrimentCount}>Hover {count} Times</button>
        </div>
    );
}

export default WithCounter(HoverCount);