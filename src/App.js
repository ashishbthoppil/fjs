import Main from './components/MainComponent';
import Contact from './components/ContactComponent';
import { HashRouter,Switch, Route, Redirect } from "react-router-dom";
import TopHeader from './components/TopHeaderComponent';
import Footer from './components/FooterComponent';
import About from './components/AboutComponent';
import Service from './components/ServiceComponent';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <TopHeader/>
        <Switch>
          <Route path='/home' component={Main} />
          <Route exact path='/contactus' component={Contact} />
          <Route exact path='/aboutus' component={About} />
          <Route exact path='/service' component={Service} />
          <Redirect to='/home' />
        </Switch>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
