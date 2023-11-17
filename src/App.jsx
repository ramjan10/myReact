import React from 'react';
import ClickCounter from './components/RenderProps/ClickCounter';
import Counter from './components/RenderProps/Counter';
import Section from './components/Section';
import ThemeContext from './components/contexts/ThemeContext';

export default class  App extends React.Component {
  state ={
    theme: 'dark',
  }

  swithTheme = () =>{
    this.setState(({theme}) =>{
      if(theme === 'dark'){
        return {
          theme:'light'
        }
      }else{
        return {
          theme: 'dark'
        }
      }
      
    })
  }

  render(){
    const {theme} = this.state;

     return (
      <div>
            {/* <Counter render={(count, incrimentCount) => <ClickCounter count={count} incrimentCount={incrimentCount}/> }/>
            <Counter render= {(count, incrimentCount) => <HoverCounter count={count} incrimentCount={incrimentCount}/> } /> */}
            <Counter>
                {(counter, incrimentCount)=> <ClickCounter count={counter} incrimentCount={incrimentCount} />}
            </Counter>

          <ThemeContext.Provider value={{theme: theme, swithTheme: this.swithTheme}}> <Section /> </ThemeContext.Provider>   
        </div>
     );
  }

}