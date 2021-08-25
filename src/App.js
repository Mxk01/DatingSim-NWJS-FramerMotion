import logo from './logo.svg';
import './App.css';
import SideMenu from './components/SideMenu.js'
import Homepage from './components/Homepage.js'
import Girl1 from './components/Girl1.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Roadmap from './components/Roadmap.js'
function App() {
  return (
    <Router>
       {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Switch>
        <Route exact path="/" component={Homepage}/>

          <Route path="/roadmap">
           <Roadmap/>
           </Route>

           <Route path="/girl1">
           <Girl1/>
           </Route>


          
     
        </Switch>
     </Router>
  );

}

export default App;
