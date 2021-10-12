import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import ListItem from "../components/ListItem"

const TaskList = () => {
  let [tasks, setTasks] = useState([])

  useEffect(() => {
    getTasks()
  }, [])

  let getTasks = async () => {
    let response = await fetch("/tasks")
    let data = await response.json()
    setTasks(data)
  }

  return (
    <div>
      <Header />
      <table>
        <tr>
          <th>Title</th>
          <th>Completed</th>
        </tr>
        {tasks.map((task, index) => (
          <ListItem key={index} task={task} />
        ))}
      </table>
    </div>
  )
}

export default TaskList
