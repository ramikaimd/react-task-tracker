import React, { useEffect, useState } from "react"
import Header from "../components/Header"

const TaskPage = ({ match, history }) => {
  let taskId = match.params.id

  let [task, setTask] = useState({})

  useEffect(() => {
    getTask()
  }, [taskId])

  let getTask = async () => {
    let response = await fetch(`/tasks/${taskId}/`)
    let data = await response.json()
    setTask(data)
  }

  let updateTask = async () => {
    await fetch(`/tasks/${taskId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...task })
    })
  }

  let addTask = async () => {
    await fetch("/tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...task })
    })
  }

  let deleteTask = async () => {
    await fetch(`/tasks/${taskId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    })
    history.push("/")
  }

  let saveChanges = () => {
    if (taskId === "new" && !task.title) {
      deleteTask()
    } else if (taskId === "new" && task.title !== "") {
      addTask()
    } else if (taskId !== "new" && task.title !== "") {
      updateTask()
    } else if (taskId !== "new" && task.title === "") {
      deleteTask()
    }
    history.push("/")
  }

  let discardChanges = () => {
    history.push("/")
  }

  return (
    <form>
      <Header />

      <label>
        <h3>Title:</h3>
      </label>
      <textarea
        className="task-title"
        value={task.title}
        onChange={(e) => {
          setTask({ ...task, title: e.target.value })
        }}
      ></textarea>
      <label>
        <h3>Completed:</h3>
      </label>
      <input
        type="checkbox"
        defaultChecked={task.completed}
        onClick={(e) => {
          setTask({ ...task, completed: e.target.checked })
        }}
      />
      <br />
      <button className="button danger" onClick={deleteTask}>
        Delete Task
      </button>
      <br />

      <button type="submit" onClick={saveChanges} className="success button">
        Save changes
      </button>
      <button type="reset" onClick={discardChanges} className="danger button">
        Discard changes
      </button>
    </form>
  )
}

export default TaskPage
