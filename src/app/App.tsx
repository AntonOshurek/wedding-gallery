//components
import Header from '../components/header/header';
import Gallery from '../components/gallery/gallery';
//styles
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="app__wrap container">
        <Header />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
