import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
const PIZZAS = 'http://localhost:3000/pizzas'

class App extends Component {
  constructor() {
    super()
    this.state={
      origPizzas: [],
      pizzas: [],
      selectedPizza: {},
    }
    this.getPizzas()
  }

  getPizzas = () => {
    fetch(PIZZAS)
    .then(res => res.json() )
    .then(pizzas => this.setState({
      origPizzas: pizzas,
      pizzas
    }))
  }

  editPizza = (pizza) => {
    this.setState({selectedPizza: pizza})
  }

  changePizza = (ev) => {
    let attr = ev.target.name
    let pizza = this.state.selectedPizza
    switch (attr){
      case 'topping': pizza.topping = ev.target.value
        break
      case 'size': pizza.size = ev.target.value
        break
      case 'vegetarian': pizza.vegetarian = ev.target.value
        break
      default: null
        break
    }
    this.setState({selectedPizza: pizza})    
  }

  fetchPizza = () => {
    let pizza = this.state.selectedPizza
    fetch(PIZZAS + '/' + pizza.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian
      })
    }).then( res => res.json() )
      .then( console.log )
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.selectedPizza}
          changePizza={this.changePizza}
          fetchPizza={this.fetchPizza}
        />
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;

