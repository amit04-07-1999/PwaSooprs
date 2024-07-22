import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Professional from "./professional/Professional";
import ClientsHome from "./Client/clientsHome";
import ProjectPosting from "./Client/ProjectPosting";
import Bio from "./Client/Bio";
import GigsScreen from "./Gigslist/GigsScreen";

function App() {
  return (
    <div className="" style={{ maxWidth: "430px", maxHeight: "932" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientsHome />}></Route>
          <Route path="/project-posting" element={<ProjectPosting />}></Route>
          <Route path="/bio" element={<Bio />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/gigs" element={<GigsScreen/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
