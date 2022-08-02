import { useEffect, useState } from "react";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import Home from "./Components/Home";
import SuccessPage from "./Components/SuccessPage";
import FPSuccessPage from "./Components/FPSuccessPage";
import Sample from "./Components/Sample";
import SProfile from "./Components/SProfile";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    renderMatches,
} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    {/* <Route path="/about" element={<AboutUs />} /> */}
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                        path="/forgotpassword"
                        element={<ForgotPassword />}
                    />
                    <Route path="/successpage" element={<SuccessPage />} />
                    <Route path="/fpsuccesspage" element={<FPSuccessPage />} />
                    <Route path="/sample" element={<Sample />} />
                    <Route path="/profile" element={<SProfile />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
