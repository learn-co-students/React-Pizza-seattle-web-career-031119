import React from "react"

class PizzaForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.pizza.id,
      isVeg: props.pizza.vegetarian
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.pizza.id !== prevState.id) {
      return {
        id: nextProps.pizza.id,
        isVeg: nextProps.pizza.vegetarian
      }
    }
    return null
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    let {topping, size} = ev.target.elements

    this.props.updatePizza({
      id: this.props.pizza.id,
      topping: topping.value,
      size: size.value,
      vegetarian: this.state.isVeg
    })
  }

  handleCheck = (ev) => {
    this.setState({
      isVeg: ev.target.value === "vegetarian"
    })
  }

  render() {
    return(
        <form className="form-row" onSubmit={this.handleSubmit} >
          <div className="col-5">
              <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" defaultValue={
                  this.props.pizza.topping
                }/>
          </div>
          <div className="col">
            <select name="size" defaultValue={this.props.pizza.size} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" name="vegetarian" type="radio"
                onChange={this.handleCheck} value="vegetarian" checked={this.state.isVeg}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" name="vegetarian" type="radio"
                onChange={this.handleCheck} value="not-vegetarian" checked={!this.state.isVeg}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </form>
    )
  }

}

export default PizzaForm
