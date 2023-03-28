import React from 'react'
import PropTypes from "prop-types"

function NavBar(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      
    </div>
  )
}
NavBar.propTypes = { //title string girilmesi zorunlu
    title : PropTypes.string.isRequired
}
NavBar.defaultProps = { //title null olursa yazdılıcak öğe
    title : "Default App"
}

export default NavBar