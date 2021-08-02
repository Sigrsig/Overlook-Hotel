import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Rooms from './components/Rooms'
import Experiences from './components/Experiences'
import Dining from './components/Dining'
import Team from './components/Team'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <div id="main">
          <Route path="/" component={FrontPage} exact/>
          <Route path="/Rooms" component={Rooms}/>
          <Route path="/Experiences" component={Experiences}/>
          <Route path="/Dining" component={Dining}/>
          <Route path="/Team" component={Team}/>
          
        </div>

        
      </BrowserRouter>
        
    </div>
  );
}

export default App;
