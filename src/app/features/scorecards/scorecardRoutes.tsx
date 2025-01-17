import { Route, Routes } from "react-router-dom"
import Scoreboard from "./Scoreboard"
import ConfigurationSettings from "./ConfigurationSettings"

const scorecardRoutes = () => {

  return (
    <Routes>
        <Route path="/" element={<Scoreboard />} />
        <Route path="/configuration/:id" element={<ConfigurationSettings />} />
        <Route path="/new" element={<ConfigurationSettings />} />
      </Routes>
  )
}

export default scorecardRoutes