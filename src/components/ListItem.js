import React from "react"
import { Link } from "react-router-dom"

let isCompleted = (task) => {
  let completed = task.completed
  return completed
}

let getTaskTitle = (task) => {
  let title = task.title
  return title
}

const ListItem = ({ task }) => {
  return (
    <tr>
      <td>
        <Link className="link" to={`/task/${task.id}/`}>
          <h4>{getTaskTitle(task)}</h4>
        </Link>
      </td>
      <td>
        {isCompleted(task) === true ? (
          <h4>Completed</h4>
        ) : (
          <h4>Not Completed</h4>
        )}
      </td>
    </tr>
  )
}

export default ListItem
