function HoverCounter({count, incrimentCount}){
    return (
        <div>
            <h1 onMouseOver={incrimentCount}>Hover {count} times</h1>
        </div>
    );
}

export default HoverCounter;