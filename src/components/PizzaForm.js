import React from "react"

class PizzaForm extends React.Component {

  render() {
    return(
        <div className="form-row">
          <div className="col-5">
              <input
                type="text"
                className="form-control"
                placeholder="Pizza Topping"
                value={this.props.pizza.topping}
                onChange={(ev) => this.props.changeTopping(ev, this.props.pizza)}
              />
          </div>
          <div className="col">
            <select
              value={this.props.pizza.size}
              className="form-control"
              onChange={(ev) => this.props.changeSize(ev, this.props.pizza)}
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
                type="radio"
                name='vegRadio'
                value={true}
                checked={this.props.pizza.vegetarian}
                onChange={(ev) => this.props.changeVeg(ev, this.props.pizza)}
              />
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio" name='vegRadio'
                value=""
                checked={!this.props.pizza.vegetarian}
                onChange={(ev) => this.props.changeVeg(ev, this.props.pizza)}
              />
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={this.props.submit}>Submit</button>
          </div>
        </div>

    )
  }
}

export default PizzaForm
