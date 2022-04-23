import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Abouts from './pages/Abouts';
import Products from './pages/Products';
import Blogs from './pages/Blogs';
import singleBlog from "../src/components/Singleblog";
import ProfileCard from "../src/components/ProfileCard";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/abouts' component={Abouts} />
          <Route path='/products' component={Products} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/blog' component={singleBlog} />
          <Route path='/pc' component={ProfileCard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
