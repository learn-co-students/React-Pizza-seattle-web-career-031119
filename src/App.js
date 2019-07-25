import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const URL = "http://localhost:3000/pizzas"

class App extends Component {

constructor(){
  super()
  this.state = {
    pizzas: [],
    currentPizza: {}
  }
}

componentDidMount(){
  fetch(URL)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    this.setState({
      pizzas: data
    })
  })
}

editPizza = (pizza) => {
  this.setState({
    currentPizza: pizza
  })
}

updatePizza = (updatedPizza) => {
    this.setState({
      pizzas: this.state.pizzas.map((pizza) => {
        if(pizza.id === updatedPizza.id){
          return updatedPizza
        }
        return pizza
      })
    })
  }


  render() {

const {pizzas, currentPizza} = this.state

    return (
      <Fragment>
        <Header/>
        <PizzaForm
          currentPizza={currentPizza}
          updatePizza={this.updatePizza}
          />
        <PizzaList
          pizzas={pizzas}
          editPizza={this.editPizza}
          />
      </Fragment>
    );
  }
}

export default App;
