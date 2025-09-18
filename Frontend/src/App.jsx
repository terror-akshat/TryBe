import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import PostUpload from "./pages/PostUpload";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";
import CartPage from "./pages/CartPage";
import Chatbot from "./components/Chatbot";
import { CartProvider } from "./context/CartContext";
import { PollProvider } from "./context/PollContext"; //change
import ProductDetail from "./pages/ProductDetail";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PollPage from "./pages/PollPage"; //add
import PollVotePage from "./pages/PollVotePage"; //add

export default function App() {
  const [vibeDataFetch, setVibeDataFetch] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [id, setId] = useState(null);
  const location = useLocation();
  const hideNav = ["/", "/signup", "/discover"].includes(location.pathname);
  return (
    <CartProvider>
      <PollProvider>
        {" "}
        <div className="min-h-screen flex flex-col">
          {!hideNav && <TopNav setVibeDataFetch={setVibeDataFetch} id={id} />}

          <main className="flex-grow">
            <Routes>
              <Route
                path="/home/:id"
                element={<Home setId={setId} vibeDataFetch={vibeDataFetch} />}
              />
              <Route path="/discover" element={<Discover />} />
              <Route path="/post/:id" element={<PostUpload />} />
              <Route path="/wallet/:id" element={<Wallet />} />
              <Route
                path="/profile/:id"
                element={<Profile userDetails={userDetails} />}
              />
              <Route path="/cart" element={<CartPage id={id} />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route
                path="/"
                element={<LoginPage setUserDetails={setUserDetails} />}
              />
              <Route path="/signup" element={<SignupPage />} />
              {/* Poll routes */}
              <Route path="/poll" element={<PollPage />} /> {/* create poll */}
              <Route path="/poll/:id" element={<PollVotePage />} />
              {/* voting/result */}
            </Routes>
          </main>
          {!hideNav && (
            <div>
              <Chatbot />
              <BottomNav id={id} />
            </div>
          )}
        </div>
      </PollProvider>
    </CartProvider>
  );
}
