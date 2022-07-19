import { useEffect, useState } from "react";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import Home from "./Components/Home";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Protected from "./Components/Protected";
=======
import { BrowserRouter as Router, Routes, Route, Link, renderMatches } from "react-router-dom";

>>>>>>> 953e0c02b836a52688a305762cf3da76f77e3c6b

function App() {
    const [apiDetails, setApiDetails] = useState(null);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL)
            .then((r) => r.json())
            .then((response) => setApiDetails(response));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                {apiDetails && (
                    <p>
                        Connected to {apiDetails.description} v
                        {apiDetails.version}
                    </p>
                )}
            </header>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Protected Cmp={Home} />} />
                    <Route path="/signin" element={<SignIn />} />
                    {/* <Route path="/about" element={<AboutUs />} /> */}
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                        path="/forgotpassword"
                        element={<ForgotPassword />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
