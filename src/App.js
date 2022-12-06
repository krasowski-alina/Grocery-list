import grocery from './grocery.webp';
import man from './man.webp';
import './App.css';
import { GroceryList } from './GroceryList';



function App() {
  return (
    <div className="container">
      <div className="block">
      <img src={grocery} alt="grocery list" className='picture'/>
      </div>
        <div>
        <h1 className="block">Grocery List</h1>
        </div>
      <GroceryList/>
      <div className="block">
      <img src={man} alt="grocery man" className='picture'/>
      </div>
      
    </div>
  );
}

export default App;
