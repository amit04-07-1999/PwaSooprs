import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
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
import Error404 from "./Client/Error404";
import GigPosting from "./Client/GigPosting";
import PersonalChat from "./About/PersonalChat";
import GigsScreen from "./Gigslist/GigsScreen";
import GigPageDetailed from "./Gigslist/GigPageDetailed";

function App() {
  return (
    <div className="" style={{ maxWidth: "430px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<ClientsHome />}></Route>
          <Route path="/project-posting" element={<ProjectPosting />}></Route>
          <Route path="/gig-posting" element={<GigPosting />}></Route>
          <Route path="/bio" element={<Bio />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/prfessional-details" element={<ProfessionalDetails />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/termAndCondition" element={<TermAndCondition />}></Route>
          <Route path="/profile" element={<ProfileSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/forgotpasswordotp" element={<ForgotPaddwordOtp />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/personalchat" element={<PersonalChat />} />
          <Route path="/" element={<ProfileSection />} />
          <Route path="/gigs" element={<GigsScreen/>}/>
          <Route path="/gigpagedetailed" element={<GigPageDetailed/>}/>
          <Route path="/profile" element={<ProfileSection/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/newpassword" element={<NewPassword/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/forgotpasswordotp" element={<ForgotPaddwordOtp/>} />
          <Route path="/editprofile" element={<EditProfile/>} />


          <Route path="/error404" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
