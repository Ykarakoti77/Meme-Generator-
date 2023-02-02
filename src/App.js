import './App.css';
import './styles.css';
import Header from './Component/Header';
import Meme from './Component/Meme';
import arr from './memesData';

function App() {
  const data = arr.data.memes.map(prop => prop);
  // console.log(data);

  return (
    <div>
      <Header />      
      <Meme 
        data={data}
      />
    </div>
  );
}

export default App;
