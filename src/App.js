import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  constructor() {
    super()
    this.state ={
      pizzas: [],
      currentPizza: {}
    }
    this.getPizzas = this.getPizzas.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.formHandler = this.formHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.isVegetarian = this.isVegetarian.bind(this)
    this.getPizzas()
  }

  formHandler(ev) {
    this.setState({
      currentPizza: {
        ...this.state.currentPizza,
        [ev.target.name]: ev.target.value
      }
    },()=>console.log(this.state.currentPizza))
  }

  handleSubmit(ev) {

    fetch('http://localhost:3000/pizzas/' + this.state.currentPizza.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        this.state.currentPizza
      )
    })
    .then(res => res.json())
    .then(editedPizza => {
      let pizzaCopy = this.state.pizzas.map(piz => {
        return (editedPizza.id === piz.id) ? editedPizza : piz
      })
      this.setState({
        pizzas: pizzaCopy
      })
    })
  }

  getPizzas() {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({pizzas}))
  }

  isVegetarian() {
    if (this.state.currentPizza.vegetarian) {
      this.setState({
        currentPizza: {
          ...this.state.currentPizza,
          vegetarian: false
        }
      })
    } else {
      this.setState({
        currentPizza: {
          ...this.state.currentPizza,
          vegetarian: true
        }
      })
    }
  }

  handleEdit(currentPizza) {
    this.setState({currentPizza})
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          currentPizza={this.state.currentPizza}
          formHandler={this.formHandler}
          handleSubmit={this.handleSubmit}
          isVegetarian={this.isVegetarian}
        />
        <PizzaList pizzas={this.state.pizzas} handleEdit={this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
