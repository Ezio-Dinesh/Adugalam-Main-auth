
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";


import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
import HomePage from "./HomePage/HomePage.jsx";
import Login from "./Login/Login.jsx";
import SignUp from "./Login/SignUp.jsx";
import ProtectedRoute from "./Login/ProtectedRoute.jsx";
import Book from "./Book/Book.jsx";
import Play from "./Play/Play.jsx";
import Train from "./Train/Train.jsx";
import Profile from "./Profile/Profile.jsx";
import MyProfile from "./Profile/MyProfile.jsx";
import ProfileHistory from "./Profile/History.jsx";
import Events from "./Events/Events.jsx"; 
import ShopSports from "./ShopSports/ShopSports.jsx";
import { Tournments } from "./Tournments/Tournments.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import PatnerSection from "./PatnerSection/PatnerSection.jsx";
import EditProfile from "./Profile/EditProfile.jsx";
import Settings from "./Settings/Settings.jsx";
import ChangePassword from "./Settings/ChangePassword.jsx";
import Terms from "./Settings/Terms.jsx";
import Privacy from "./Settings/Privacy.jsx";
import PartnerForm from "./PatnerSection/PartnerForm.jsx";

// import Delete from "./Settings/Delete.jsx";


import Dashboard from "./Admin/Dashboard.jsx";
import AdminSettings from "./Admin/AdminSettings.jsx";
import Bookingmanagement from "./Admin/BookingManagement1.jsx";
import Chart from "./Admin/Chart.jsx";
import PaymentsReport from "./Admin/PaymentsReport.jsx";
import Sidebar from "./Admin/Sidebar.jsx";
import TurfManagement from "./Admin/TurfManagement.jsx";
import UserManagement from "./Admin/UserManagement.jsx";
import Vendor from "./Admin/Vender.jsx";



import Addturf from "./Vendor/AddTurf.jsx";
import Discount from "./Vendor/DiscountPage.jsx";
import BookingManagement from "./Vendor/BookingManagement.jsx";
import VendorDashboard from "./Vendor/Dashboard.jsx";
import Vendorlogout from "./Vendor/Logout.jsx";
import Scheduletime from "./Vendor/ScheduleTime.jsx";
import Vendorsidebar from "./Vendor/Sidebar.jsx";



import Galarypage from "./Book/Galarypage.jsx";
import BookingGround from "./Book/BookingGround.jsx";
import Card from "./Book/Cartpage.jsx";
import Payment from "./Book/PaymentPage";
import Bookhome from "./Book/Bookhome.jsx";
import Summary from "./Book/Summary.jsx";
import Mybooking from "./Book/MyBooking.jsx";
import Newonadugalam from "./Components/Newonadugalam/Newonadugalam.jsx";
import Tennis from "./Book/Tennis.jsx";
import AllCategories from "./AllCategories/AllCategories.jsx";
import Myfavourite from "./Profile/Myfavourite.jsx";
import Myreviews from "./Profile/Myreviews.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import { HiH1 } from "react-icons/hi2";




const FooterWrapper = () => {
  const location = useLocation();

  const hideFooterRoutes = ["/cart", "/payment"];

  if (hideFooterRoutes.includes(location.pathname)) {
    return null;
  }

  return <Footer />;
};






const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* PROTECTED */}
        <Route path="/book" element={<ProtectedRoute><Book /></ProtectedRoute>} />
        <Route path="/play" element={<ProtectedRoute><Play /></ProtectedRoute>} />
        <Route path="/train" element={<ProtectedRoute><Train /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="/EditProfile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
                        <Route path="/MyProfile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
        <Route path="/profilehistory" element={<ProfileHistory/>}></Route>

  
        <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
        <Route path="/shop" element={<ProtectedRoute><ShopSports /></ProtectedRoute>} />
        <Route path="/tournaments" element={<ProtectedRoute><Tournments /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/partner" element={<ProtectedRoute><PatnerSection /></ProtectedRoute>} />
        <Route path="/EditProfile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
        <Route path="/Settings" element={<ProtectedRoute><Settings/></ProtectedRoute>} />
        <Route path="/ChangePassword" element={<ProtectedRoute><ChangePassword/></ProtectedRoute>} />
        <Route path="/Terms" element={<Terms/>} />
        <Route path="/Privacy" element={<ProtectedRoute><Privacy/></ProtectedRoute>} />
        {/* <Route path="/Delete" element={<ProtectedRoute><Delete/></ProtectedRoute>} /> */}


<Route path="/Dashboard" element={<Dashboard  />}></Route>
<Route path="/AdminSettings" element={<AdminSettings  />}></Route>
<Route path="/BookingManagement" element={<Bookingmanagement  />}></Route>
<Route path="/Chart" element={<Chart  />}></Route>
<Route path="/PaymentsReport" element={<PaymentsReport  />}></Route>
<Route path="/Sidebar" element={<Sidebar  />}></Route>
<Route path="/TurfManagement" element={<TurfManagement  />}></Route>
<Route path="/UserManagement" element={<UserManagement  />}></Route>
<Route path="/Vendor" element={<Vendor  />}></Route>






<Route path="/addturf" element={<Addturf/>}></Route>
<Route path="/discount" element={<Discount/>}></Route>
<Route path="/VendorBookingManagement" element={<BookingManagement/>}></Route>
<Route path="/VendorDashboard" element={<VendorDashboard/>}/>
<Route path="/Vendorlogout" element={<Vendorlogout/>}></Route>
<Route path="/Scheduletime" element={<Scheduletime/>}></Route>
<Route path="/Vendorsidebar" element={<Vendorsidebar/>}></Route>



<Route path="/galary" element={<Galarypage/>}></Route>
<Route path="/bookingground" element={<BookingGround/>}></Route>
<Route path="/cart" element={<Card/>}></Route>
<Route path="/payment" element={<Payment/>}></Route>
<Route path="/Bookhome" element={<Bookhome/>}></Route>
<Route path="/summary" element={<Summary/>}></Route>
<Route path="/mybooking" element={<Mybooking/>}></Route>
<Route path="/partnerform" element={<PartnerForm/>}></Route>
<Route path="/newonadugalam" element={<Newonadugalam/>}></Route>
<Route path="/tennis" element={<Tennis/>}></Route>
<Route path="/allcategories" element={<AllCategories/>}></Route>
<Route path="/myfavourite" element={<Myfavourite/>}></Route>
<Route path="/myreviews" element={<Myreviews/>}/>
<Route path="/download" element={ <h1>Coming Soon</h1> }></Route>

      </Routes>

<FooterWrapper/>    
</Router>
  );
};

export default App;
