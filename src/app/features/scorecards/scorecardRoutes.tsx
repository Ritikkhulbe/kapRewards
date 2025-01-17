import { Route, Routes } from "react-router-dom";
import Scoreboard from "./Scoreboard";

const scorecardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Scoreboard />} />
    </Routes>
  );
};

export default scorecardRoutes;
