import ClickCounter from './components/RenderProps/ClickCounter';
import Counter from './components/RenderProps/Counter';
import HoverCounter from './components/RenderProps/HoverCounter';

function App() {
  return <div>
            {/* <Counter render={(count, incrimentCount) => <ClickCounter count={count} incrimentCount={incrimentCount}/> }/>
            <Counter render= {(count, incrimentCount) => <HoverCounter count={count} incrimentCount={incrimentCount}/> } /> */}
            <Counter>
                {(counter, incrimentCount)=> <ClickCounter count={counter} incrimentCount={incrimentCount} />}
            </Counter>
            <Counter>
              {(counter, incrimentCount)=> <HoverCounter count={counter} incrimentCount={incrimentCount}/> }
            </Counter>
        </div>

}

export default App;
