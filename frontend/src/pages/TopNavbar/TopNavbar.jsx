/* eslint-disable react/prop-types */
import classes from "./TopNavbar.module.css";
import LOGO from "../../assets/4.png";

export default function TopNavbar({ showNavbar, userName, location }) {
    if (!showNavbar) {
        return null;
    }

    return (
        <div className={classes.topNavbar}>
            <div className={classes.imgContainer}>
                <img src={LOGO} alt="logo" className={classes.logo} />
                <ul className={classes.navLinks}>
                    <li className={classes.navItem}>Home</li>
                </ul>
                <ul className={classes.navLinksRight}>
                    <li className={classes.navItem}>Contact Us</li>
                    <li className={classes.navItem}>About Us</li>
                </ul>
            </div>
        </div>
    );
}
