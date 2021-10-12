import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <Link to="/" className="link">
        <h1 className="title">Task Tracker</h1>
      </Link>
      <Link to="/task/new">
        <button className="add-task-button button">Add task</button>
      </Link>
      <hr />
    </div>
  )
}

export default Header
