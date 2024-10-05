import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          {/* You can add more routes here */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
