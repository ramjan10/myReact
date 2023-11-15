import React from "react";

const WithCounter = (OriginalComponent) => {

    class NewComponent extends React.Component{
        state = {
            count : 0
        }
    
        incrimentCount = () =>{
            this.setState({
                count : this.state.count + 1,
            });
        }

        render(){
            const {count} = this.state;
            return <OriginalComponent count={count} incrimentCount={this.incrimentCount}/>
        }
    
    }

    return NewComponent;
}

export default WithCounter;