import React from "react"

class PizzaForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      id: this.props.pizza.id
    }

    this.alterState = this.alterState.bind(this)
    this.toggleVegetarian = this.toggleVegetarian.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static getDerivedStateFromProps(props, state){

    if(props.pizza.id === state.id) {
      return null
    }

    return {
      id: props.pizza.id,
      topping: props.pizza.topping,
      size: props.pizza.size,
      vegetarian: props.pizza.vegetarian
    }
  }

  toggleVegetarian(){
    this.setState({vegetarian: !this.state.vegetarian})
  }

  alterState(ev) {
    this.setState({[ev.target.name]: ev.target.value})
  }

  handleSubmit(ev){
    ev.preventDefault()
    this.props.updatePizza(this.state)
  }

  render(){
    return(
        <form className="form-row">
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
              {React.createElement('input',{
                  type: 'radio',
                  className: "form-check-input",
                  checked: this.state.vegetarian,
                  name: "vegetarian",
                  value: "Vegetarian",
                  onChange: this.toggleVegetarian
                })
              }
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              {React.createElement('input',{
                  type: 'radio',
                  className: "form-check-input",
                  checked: !this.state.vegetarian,
                  name: "vegetarian",
                  value: "Not Vegetarian",
                  onChange: this.toggleVegetarian
                })
              }
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <input type="submit" className="btn btn-success" onClick={this.handleSubmit}/>
          </div>
        </form>

    )
  }

}

export default PizzaForm
