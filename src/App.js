import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'


class App extends Component {
  constructor() {
    super()

    this.state = {
      pizzas: [],
      edit: {}
    }

    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzaData => {
      this.setState({
        pizzas: pizzaData
      })
    })
  }

  selectPizza = (pizza) => {
    this.setState({
      edit: pizza
    })
  }

  changeTopping = (ev, pizza) => {
    this.setState({
      edit: {
        id: pizza.id,
        topping: ev.target.value,
        size: pizza.size,
        vegetarian: pizza.vegetarian
      }
    })
  }
  changeSize = (ev, pizza) => {
    this.setState({
      edit: {
        id: pizza.id,
        topping: pizza.topping,
        size: ev.target.value,
        vegetarian: pizza.vegetarian
      }
    }, ()=> console.log(this.state.edit))
  }
  changeVeg = (ev, pizza) => {
    console.log(ev.target.value)
    this.setState({
      edit: {
        id: pizza.id,
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: Boolean(ev.target.value)
      }
    }, ()=> console.log(this.state.edit))
  }

  submit = () => {
    console.log('here')
    const newPizzas = this.state.pizzas.map(pizza => {
      if (pizza.id === this.state.edit.id) {
        return this.state.edit
      } else {
        return pizza
      }
    })
    this.setState({
      pizzas: newPizzas
    })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          pizza={this.state.edit}
          changeTopping={this.changeTopping}
          changeSize={this.changeSize}
          changeVeg={this.changeVeg}
          submit= {this.submit}
        />
        <PizzaList pizzas={this.state.pizzas} onClick={this.selectPizza} />
      </Fragment>
    );
  }
}

export default App;
