import Counter from './RenderProps/Counter';
import HoverCounter from './RenderProps/HoverCounter';
import ThemeContext from './contexts/ThemeContext';

export default function content() {
    return (
        <div>
            <h1>this is a content</h1>
            <Counter>
                {(counter, incrimentCount)=>{
                    return  <ThemeContext.Consumer>{({theme}) => <HoverCounter count={counter} incrimentCount={incrimentCount} theme={theme}/>}</ThemeContext.Consumer>
                }}
            </Counter>

        </div>
    );
}