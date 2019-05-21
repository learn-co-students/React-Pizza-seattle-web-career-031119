import React from "react"

class PizzaForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      id: this.props.currentPizza.id
    }
  }

  static getDerivedStateFromProps(props, state){

  if(props.currentPizza.id === state.id) {
    return null
  }

  return { //if  new pizza
    id: props.currentPizza.id,
    topping: props.currentPizza.topping,
    size: props.currentPizza.size,
    vegetarian: props.currentPizza.vegetarian
  }
}

toggleVegetarian = () => {
  this.setState({
    vegetarian: !this.state.vegetarian
  })
}

alterState = (ev) => {
  this.setState({
    [ev.target.name]: ev.target.value
  })
}

handleSubmit = (ev) => {
  ev.preventDefault()
  this.props.updatePizza(this.state)
}

  render() {
  return(
    <form>
      <div className="form-row">
        <div className="col-5">
           <input type="text" name="topping" onChange={this.alterState} className="form-control" placeholder="Pizza Topping" value={this.state.topping}/>
        </div>
        <div className="col">
          <select name="size" onChange={this.alterState} value={this.state.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" onChange={this.toggleVegetarian} checked={this.state.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" onChange={this.toggleVegetarian} checked={!this.state.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
      </form>
  )
}
}

export default PizzaForm
