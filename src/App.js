import './App.css';

function App() {
  const title ='Welcome to the spot like, broh'
  const likes = 350
  // const person = { name: 'yoshi', age: 30 }
  const link = "https://www.google.com"

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        {/* <p>{ person }</p> */}

        <p>{ 10 }</p>
        <p>{ "suh" }</p>
        <p>{ [1,2,3, ' and to the ', 4] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ link }>GoogCity</a>
      </div>
    </div>
  );
}

export default App;
