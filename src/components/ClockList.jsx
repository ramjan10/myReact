import Clock from "./Clock";

function ClockList ({quantities= []}){
    return (
        <div>
            {quantities.map((key, index)=>(
                <Clock key={key}/>
            ))}
        </div>
    );
}

export default ClockList;