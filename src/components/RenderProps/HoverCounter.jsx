function HoverCounter({count, incrimentCount, theme}){
    const style = theme === 'dark' ?  {backgroundColor: 'black', color: 'white'} : null;
    return (
        <div>
            <h1  onMouseOver={incrimentCount} style={style}>Hover {count} times</h1>
        </div>
    );
}

export default HoverCounter;