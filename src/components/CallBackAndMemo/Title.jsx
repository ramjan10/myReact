import React from "react";
// eslint-disable-next-line react-refresh/only-export-components
function Title (){
    console.log('rendering title....');
    return (<h1>Use Callback Hook tutorial</h1>);
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(Title);