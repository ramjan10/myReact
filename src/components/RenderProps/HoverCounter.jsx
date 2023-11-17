function HoverCounter({count, incrimentCount, theme, swithTheme}){
    const style = theme === 'dark' ?  {backgroundColor: 'black', color: 'white'} : null;
    return (
        <div>
            <h1  onMouseOver={incrimentCount} style={style}>Hover {count} times</h1>
            <button type="button" onClick={swithTheme}>theme Change</button>
        </div>
    );
}

export default HoverCounter;