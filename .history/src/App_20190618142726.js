import React, { Component } from 'react';

class App extends Component {
  state = {  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d366c02b66b04ee2bb3309e8e90df583`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
  }

  render() { 
    return ( <h1>Noticias API React</h1> );
  }
}
 

export default App;
