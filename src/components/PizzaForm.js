import React, { Component } from "react"

class PizzaForm extends Component {

  render() {
    return(
        <div className="form-row">
          <div className="col-5">
              <input
                type="text"
                name="topping"
                className="form-control"
                placeholder="Pizza Topping"
                value={this.props.currentPizza.topping}
                onChange={this.props.formHandler}
              />
          </div>
          <div className="col">
            <select
              value={this.props.currentPizza.size}
              name="size" className="form-control"
              onChange={this.props.formHandler}
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={true}
                name="vegetarian"
                checked={this.props.currentPizza.vegetarian}
                onChange={this.props.isVegetarian}
              />
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={this.props.handleSubmit}>Submit</button>
          </div>
        </div>

    )
  }
}

export default PizzaForm
