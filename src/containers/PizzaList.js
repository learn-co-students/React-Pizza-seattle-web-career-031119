import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {


  displayPizzas = () => {
    return this.props.pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} onClick={this.props.onClick} />)
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.displayPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
