import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">

        <div className="col-5">
            <input type="text" className="form-control"
              name="topping" 
              placeholder="Pizza Topping" 
              value={props.pizza.topping}
              onChange={props.changePizza}
            />
        </div>

        <div className="col">

          <select value={props.pizza.size}
              name="size" 
              className="form-control"
              onChange={props.changePizza}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>

        </div>
        
        <div className="col">

          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" 
                name="vegetarian"
                type="radio" value={true} 
                checked={!!props.pizza.vegetarian}
                onChange={props.changePizza}/>
              Vegetarian
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" 
              name="vegetarian" 
              type="radio" value={false} 
              checked={!!!props.pizza.vegetarian}
              onChange={props.changePizza}/>
              Not Vegetarian
            </label>
          </div>

        </div>

        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.fetchPizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm

