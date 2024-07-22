import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Professional from "./professional/Professional";
import ClientsHome from "./Client/clientsHome";
import ProjectPosting from "./Client/ProjectPosting";
import Bio from "./Client/Bio";
import ProfileSection from "./Auth/ProfileSection";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import NewPassword from "./Auth/NewPassword";
import ForgotPassword from "./Auth/ForgotPassword";
import ForgotPaddwordOtp from "./Auth/ForgotPaddwordOtp";
import EditProfile from "./EditProfile/EditProfile";

function App() {
  return (
    <div className="" style={{ maxWidth: "430px", maxHeight: "932" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientsHome />}></Route>
          <Route path="/project-posting" element={<ProjectPosting />}></Route>
          <Route path="/bio" element={<Bio />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/profile" element={<ProfileSection/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/newpassword" element={<NewPassword/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/forgotpasswordotp" element={<ForgotPaddwordOtp/>} />
          <Route path="/editprofile" element={<EditProfile/>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
