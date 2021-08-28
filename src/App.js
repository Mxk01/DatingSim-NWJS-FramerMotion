 import './App.css';
// import SideMenu from './components/SideMenu.js'
// import Homepage from './components/Homepage.js'
// import Girl1 from './components/Girl1.js'
import {Suspense,lazy} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Roadmap from './components/Roadmap.js'

const Homepage = lazy(()=>import('./components/Homepage.js'))
const Roadmap = lazy(()=>import('./components/Roadmap.js'))
const SideMenu = lazy(()=>import('./components/SideMenu.js'))
const Girl1 = lazy(()=>import('./components/Girl1.js'))


function App() {
  return (
    <Suspense fallback={<div className="loadingScreen">Loading ... </div>}>
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
     </Suspense> 
  );

}

export default App;
