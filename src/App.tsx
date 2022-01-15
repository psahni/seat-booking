import './App.css';

import SeatsByCategory from './components/SeatsByCategory.component';

import { SeatsCategories } from './models/SeatCategory';

function App() {
  return (
    <div className="App">
      <SeatsByCategory seatsCategories={SeatsCategories}/>
    </div>
  );
}

export default App;

