import './App.scss';
import 'antd/dist/antd.css'
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';

function App() {
  return (
    <div className="app__wrapper">
      <Header />
      <ItemList />
    </div>
  );
}

export default App;
