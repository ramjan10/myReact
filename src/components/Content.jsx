import { useContext } from 'react';
import Counter from './RenderProps/Counter';
import HoverCounter from './RenderProps/HoverCounter';
import ThemeContext from './contexts/ThemeContext';

export default function content() {
    const context = useContext(ThemeContext);
    const {theme, swithTheme} = context;
    return (
        <div>
            <h1>this is a content</h1>
            <Counter>
                {(counter, incrimentCount)=>{
                    return (     
                        // <div>
                        //      <ThemeContext.Consumer>
                        //         {
                        //             ({theme, swithTheme}) => 
                        //             <HoverCounter count={counter} incrimentCount={incrimentCount} theme={theme} swithTheme={swithTheme}/>
                                    
                        //         }
                        //     </ThemeContext.Consumer>
                        // </div>
                        <HoverCounter count={counter} incrimentCount={incrimentCount} theme={theme} swithTheme={swithTheme}/>
                    );
                }}
            </Counter>

        </div>
    );
}