import "./App.css"
import TaskList from "./pages/TaskList"
import { BrowserRouter as Router, Route } from "react-router-dom"
import TaskPage from "./pages/TaskPage"

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={TaskList} />
        <Route path="/task/:id" component={TaskPage} />
      </div>
    </Router>
  )
}

export default App
