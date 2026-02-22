import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Users from "./pages/Users"
import UserDetails from "./pages/UserDetails"
import { getUsers } from "./services/api"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(data => setUsers(data))
  }, [])

  return (
    <Routes>
      <Route
        path="/"
        element={<Users users={users} setUsers={setUsers} />}
      />
      <Route
        path="/user/:id"
        element={<UserDetails users={users} />}
      />
    </Routes>
  )
}

export default App