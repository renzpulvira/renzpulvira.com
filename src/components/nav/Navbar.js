import * as SC from "./Navbar.styles";
import { Link } from "react-router-dom";
import { BsFillMoonFill, BsSun, BsSunFill } from "react-icons/bs";

import { connect } from "react-redux";
import { toggleTheme } from "../../store/actions/themeActions";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../Global.styles";

function Navbar({ dispatch, theme }) {
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <SC.Nav>
        <SC.NavCont>
          <Link to="/" className="logo">
            Renz Pulvira
          </Link>
          <SC.MobileBurger>
            <span></span>
            <span></span>
            <span></span>
          </SC.MobileBurger>
          <SC.NavLinks id="navlinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              {!theme ? (
                <BsFillMoonFill onClick={() => dispatch(toggleTheme())} />
              ) : (
                <BsSunFill onClick={() => dispatch(toggleTheme())} />
              )}
            </li>
          </SC.NavLinks>
        </SC.NavCont>
      </SC.Nav>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  theme: state.themeToggle,
});

export default connect(mapStateToProps)(Navbar);
