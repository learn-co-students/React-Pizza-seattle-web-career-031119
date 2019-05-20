import React from "react"

const Pizza = (props) => {

  const vegetarian = props.pizza.vegetarian ? 'yes' : 'no'

  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{vegetarian}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => props.onClick(props.pizza)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
