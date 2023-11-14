import Bracket from './components/composition/Bracket';
import Emoji from './components/composition/Emoji';
import Text from './components/composition/text';

function App() {
  return (
      <Emoji>
        {(  {addEmoji} ) => 
        <Bracket>
          { ( {addBracket} ) => <Text addEmoji={addEmoji} addBracket={addBracket}/> }
        </Bracket>}
      </Emoji>
  );
}

export default App;
