import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' 

function App() {
  const title ='Welcome to the spot like, broh'

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch> 
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
