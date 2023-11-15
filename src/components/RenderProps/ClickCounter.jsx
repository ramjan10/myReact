function ClickCounter({count, incrimentCount}){
    return (
        <div>
            <button type="button" onClick={incrimentCount}>Click {count} times</button>
        </div>
    );
}

export default ClickCounter;