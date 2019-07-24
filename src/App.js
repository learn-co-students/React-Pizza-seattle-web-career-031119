import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pizzas: [],
      currentPizza: {}
    }

    this.getPizzas()
  }

  getPizzas = () => {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => {
      console.log(pizzas)
      this.setState({
        pizzas
      })
    })
  }

  handleClick = (pizza) => {
    console.log("EV", pizza)
    this.setState({
      currentPizza: pizza
    })
  }

  updatePizza = (pizza) => {
    let pizzas = this.state.pizzas.map(p => {
      if (pizza.id === p.id){
        return pizza
      } else {
        return p
      }
    })
    this.setState({
      pizzas
    })
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        pizza
      )
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.currentPizza} updatePizza={this.updatePizza} />
        <PizzaList pizzas={this.state.pizzas} handleClick={this.handleClick} />
      </Fragment>
    );
  }
}

export default App;
