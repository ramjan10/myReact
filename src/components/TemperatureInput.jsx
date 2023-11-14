const scaleNames = {
    c:'Celsius',
    f:'Fahrenheit'
}

export default function  TemperatureInput({temperature ,scale, onTemperatureChange}) {
        return (
            <div>
                <fieldset>
                    <legend>Enter temparature in {scaleNames[scale]}</legend>
                    <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e, scale)}/>
                </fieldset>
            </div>
        );
}