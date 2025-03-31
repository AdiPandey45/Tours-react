
import './App.css';
import data from './data'
import Tours from './components/Tours'
import { useState } from 'react';

function App() {

  

  const[tours,setTours]=useState(data);

 const removeTours= (id)=>{
   const newTours=tours.filter(tour=>tour.id!=id);
   setTours(newTours);
 }

  
if(tours.length==0){
  return (
    <div className='refresh'>
<h2>
  No Tours Left
</h2>

<button className='btn-white' onClick={()=>setTours(data)}>
Refresh
</button>

    </div>
  )
}

  return (
  <div className='App'>

    <Tours tours={tours} removeTour={removeTours}></Tours>
  </div>
  );
}

export default App;
