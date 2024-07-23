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
<<<<<<< HEAD
import PrivacyPolicy from "./About/PrivacyPolicy";
import ContactUs from "./About/ContactUs";
=======
import GigsScreen from "./Gigslist/GigsScreen";
import GigPageDetailed from "./Gigslist/GigPageDetailed";
import Professional from './professional/Professional';
import ProfessionalDetails from "./professional/ProfessionalDetails";

function App() {
  return (
    <div className="" style={{ maxWidth: "430px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfileSection />}></Route>
          <Route path="/home" element={<ClientsHome />}></Route>
          <Route path="/project-posting" element={<ProjectPosting />}></Route>
          <Route path="/gig-posting" element={<GigPosting />}></Route>
          <Route path="/bio" element={<Bio />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/professional-details" element={<ProfessionalDetails />} />
          <Route path="/gigs" element={<GigsScreen/>}/>
          <Route path="/gigpagedetailed" element={<GigPageDetailed/>}/>
          <Route path="/profile" element={<ProfileSection/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/newpassword" element={<NewPassword/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/forgotpasswordotp" element={<ForgotPaddwordOtp/>} />
<<<<<<< HEAD
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
=======
          <Route path="/editprofile" element={<EditProfile/>} />
>>>>>>> fb94032a58534ba460e11122118615cdd93f6f04


          <Route path="/error404" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
