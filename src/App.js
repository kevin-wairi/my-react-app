import data from './data.jpg';

import './App.css';

function App() {
  const handleClick = ()=>{
    alert('You clicked this button')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={data} className="dataImg" alt="data visualization" />
        <h1>Data Visualization with Python</h1>
        <p>
        Combine the power of data and visuals to tell impactful stories and make data more accessible
        </p>
       <button className='App-link' onClick={handleClick}>Apply for our Data Science Part-time Course</button>
      </header>
    </div>
  );
}

export default App;
