import Navbar from './Navbar'
import Home from './Home'

function App() {
  const title ='Welcome to the spot like, broh'

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
