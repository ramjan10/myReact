import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    }

    incrimentCount = () =>{
        this.setState({
            count: this.state.count +  1,
        })
    }

    render(){
        const {children} =  this.props;
        const {count} =  this.state;
        return children(count, this.incrimentCount);
    }
}

export default Counter;