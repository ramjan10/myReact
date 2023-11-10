import React from 'react';
import ReactDom from 'react-dom/client';


/**
 * example for jsx and render
 * JSX= javascript xml , It is not a xml it is vertual dom
 * render = all data display by this function 
 */
// const index = 0;

// const root = ReactDom.createRoot(document.getElementById('root'));

// setInterval(() => {
//   const element = (
//   <h1 className="heading" tabIndex={index}>
//     <span className='text'>Hellow {new Date().toLocaleTimeString()}</span>
//   </h1>
// );
// root.render(element);
  
// }, 1000);

/**
 * componet 2 types
 * one for function and other is class component
 * function component is import and class compnent not use now
 * class component pass data throw props and use this by using 'this.props....'
 */

/** 
 * function component 
*/
 
// function Clock({local})
// {
//    return (
//     <h1 className="heading">
//       Hellow {new Date().toLocaleTimeString(local)}
//     </h1>
//   );
// }
// ReactDom.createRoot(document.getElementById('root')).render(<Clock local="bn-BD" />);

/**
 * class component 
 */

class ClassClock extends React.Component{
    render()
    {
      return <h1 className="heading"> 
          Hellow {new Date().toLocaleTimeString(this.props.local)}  {this.props.str} {parseInt(this.props.a) + parseInt(this.props.b)}
      </h1>
    }
}
ReactDom.createRoot(document.getElementById('root')).render(<ClassClock local="bn-BD" str=" for bangladesh only" a="10" b="50"/>);