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

import PrivacyPolicy from "./About/PrivacyPolicy";
import ContactUs from "./About/ContactUs";

import GigsScreen from "./Gigslist/GigsScreen";
import GigPageDetailed from "./Gigslist/GigPageDetailed";
<<<<<<< HEAD
import ResumeUpload from "./EditProfile/ResumeUpload";
import Academics from "./EditProfile/Academics";
import Skills from "./EditProfile/Skills";
import ManageServices from "./EditProfile/ManageServices";
import Credits from "./EditProfile/Credits";
=======
import Professional from './professional/Professional';
import ProfessionalDetails from "./professional/ProfessionalDetails";
>>>>>>> 70e4574ee003988f0118c5db99363cc157e46874

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
<<<<<<< HEAD
          <Route path="/profile" element={<ProfileSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/forgotpasswordotp" element={<ForgotPaddwordOtp />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/managedetail" element={<ManageDetail />} />
          <Route path="/managepassword" element={<ManagePassword />} />
          <Route path="/bankdetails" element={<BankDetails />} />
          <Route path="/manageportfolio" element={<ManagePortfolio />} />
          <Route path="/addexperience" element={<AddExperience />} />
          <Route path="/gigs" element={<GigsScreen />} />
          <Route path="/gigpagedetailed" element={<GigPageDetailed />} />
          <Route path="/profile" element={<ProfileSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/forgotpasswordotp" element={<ForgotPaddwordOtp />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/resumeupload" element={<ResumeUpload />} />
          <Route path="/addacademics" element={<Academics />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/manageservices" element={<ManageServices />} />
          <Route path="/credits" element={<Credits />} />
=======
          <Route path="/professional-details" element={<ProfessionalDetails />} />
          <Route path="/gigs" element={<GigsScreen/>}/>
          <Route path="/gigpagedetailed" element={<GigPageDetailed/>}/>
          <Route path="/profile" element={<ProfileSection/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/newpassword" element={<NewPassword/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/forgotpasswordotp" element={<ForgotPaddwordOtp/>} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/editprofile" element={<EditProfile/>} />


>>>>>>> 70e4574ee003988f0118c5db99363cc157e46874
          <Route path="/error404" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
