import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Professional from "./professional/Professional";
import ClientsHome from "./Client/clientsHome";
import ProjectPosting from "./Client/ProjectPosting";
import Bio from "./Client/Bio";
import Chat from "./About/Chat";
import Notification from "./About/Notification";
import TermAndCondition from "./About/TermAndCondition";
import ProfileSection from "./Auth/ProfileSection";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import NewPassword from "./Auth/NewPassword";
import ForgotPassword from "./Auth/ForgotPassword";
import ForgotPaddwordOtp from "./Auth/ForgotPaddwordOtp";
import EditProfile from "./EditProfile/EditProfile";
import Error404 from "./Client/Error404";
import GigPosting from "./Client/GigPosting";
import PrivacyPolicy from "./About/PrivacyPolicy";

function App() {
  return (
    <div className="" style={{ maxWidth: "430px"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientsHome />}></Route>
          <Route path="/project-posting" element={<ProjectPosting />}></Route>
          <Route path="/gig-posting" element={<GigPosting />}></Route>
          <Route path="/bio" element={<Bio />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/Notification" element={<Notification />}></Route>
          <Route path="/TermAndCondition" element={<TermAndCondition />}></Route>
          <Route path="/profile" element={<ProfileSection/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/newpassword" element={<NewPassword/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/forgotpasswordotp" element={<ForgotPaddwordOtp/>} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />


          <Route path="/error404" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
