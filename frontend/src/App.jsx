import { useNavigate } from "react-router-dom";
import { useState } from "react";

import classes from "./App.module.css";

import TopNavbar from "./pages/TopNavbar/TopNavbar";
// get user record from /user/{id} api on port 8000

function App() {
    // const [currentImg, setCurrentImg] = useState(() =>
    //     Math.floor(Math.random() * 2)
    // );

    const navigate = useNavigate();
    let currentImg  = 0;

    return (
        <div className={classes.landingPage}>
            
            {/* Top Navbar Included */}
            <TopNavbar showNavbar={true} />

            <div
                className={`${classes.left} ${
                    currentImg === 0 ? classes.left1 : classes.left2
                }`}
            ></div>

            <div className={classes.right}>
                
                <h1><center>NOURISHNET</center></h1>

                <p> Transforming someone's waste to a someone's life<br/>Make a change now !</p>
                <div className={classes.btnContainer}>
                    <button
                        className={classes.link}
                        onClick={() => {
                            navigate("/signup", {
                                state: { userType: "foodBank" },
                            });
                        }}
                    >
                        FOOD BANK PAGE
                    </button>
                    <button
                        className={classes.link}
                        onClick={() => {
                            navigate("/signup", {
                                state: { userType: "restaurant" },
                            });
                        }}
                    >
                        RESTAURANT PAGE
                    </button>
                    <button
                        className={classes.link}
                        onClick={() => {
                            navigate("/prediction");
                        }}
                    >
                        WASTAGE PREDICTION USING AI
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
