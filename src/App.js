import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      pizzas: [],
      currentPizza: {}
    }

    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({pizzas}))

    this.editPizza = this.editPizza.bind(this)
    this.updatePizza = this.updatePizza.bind(this)
  }

  editPizza(pizza){
    this.setState({currentPizza: pizza})
  }

  updatePizza(updatedPizza){
    this.setState({
      pizzas: this.state.pizzas.map(pizza => {
        if(pizza.id === updatedPizza.id){
          return updatedPizza
        }
        return pizza
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.currentPizza} updatePizza={this.updatePizza}/>
        <PizzaList editPizza={this.editPizza} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
