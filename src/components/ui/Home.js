import React, { Component } from 'react';
//import Header from "./Header";
import { BrowserRouter as Router} from 'react-router-dom';
class Home extends Component {
  render() {
      return (
        <Router>
      <div class="container">
          <section className="01">
            <h1>Caixa</h1>
          </section>
          
          <section className="02">
            <h1>Pop Credicard</h1>
          </section>
          
          <section className="03">
            <h1>Discovery</h1>
          </section>
          
          <section className="04">
            <h1>MM's</h1>
          </section>
          
        </div>
        </Router>
      )
  }
}


export default Home;