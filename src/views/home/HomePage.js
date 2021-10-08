import * as GS from "../../Global.styles";
import * as SC from "./HomePage.styles";
import profilefull from "../../assets/profilefull.png";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../Global.styles";
import { connect } from "react-redux";
import {
  SVG_GITHUB,
  SVG_LINKEDIN,
  SVG_SLACK,
  SVG_TWITTER,
  SVG_WAVE,
} from "../../assets/svg";
import logo_fs from "../../assets/logo_fullstack.png";
import logo_virtualcrafters from "../../assets/logo_virtualcrafters.png";
import logo_msm from "../../assets/logo_msm.png";
import logo_acn from "../../assets/logo_accenture.png";
import project_1 from "../../assets/img_project1.png";

import {
  BsCodeSlash,
  BsDiagram2,
  BsWordpress,
  BsPaintBucket,
  BsBookHalf,
} from "react-icons/bs";
import { FaReact } from "react-icons/fa";

function HomePage({ theme }) {
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <SC.TopSection>
        <GS.SectionCont>
          <SC.Profile>
            <div
              className="profile-image"
              style={{ backgroundImage: `url(${profilefull})` }}
            ></div>
            <div className="intro">
              <h1>Hi, I'm Renz</h1>
              <p>Web Developer</p>
              <SVG_WAVE />
            </div>
            <div className="contacts">
              <a href="">
                <SVG_LINKEDIN />
              </a>
              <a href="">
                <SVG_TWITTER />
              </a>

              <a href="">
                <SVG_SLACK />
              </a>
              <a href="">
                <SVG_GITHUB />
              </a>
            </div>
          </SC.Profile>
          <SC.Bio>
            <h3 id="bio-text">BIOGRAPHY_</h3>
            <p>
              Born and raised in the <span>Philippines</span>, I Graduated As an
              Associate Degree in Computer Programming. Struggled to find my job
              with my college degree so i brushed up my resume, learn courses
              and built up my skillset.
            </p>

            <p>
              Hardwork payed off and here I am now. Currently have a full time
              job at <span>MSM</span> as a Web developer.
            </p>

            <p>I focus on stability and performance for my clients websites.</p>
          </SC.Bio>
        </GS.SectionCont>
      </SC.TopSection>
      <SC.Portfolio>
        <GS.RootCont>
          <GS.SubHeader>PORTFOLIO</GS.SubHeader>
          <SC.PortfolioItem>
            <div className="image">
              <img src={logo_fs} alt="" />
            </div>
            <div className="details">
              <h3>Front end Developer</h3>
              <p>
                <a href="fullstackhq.com">Fullstack HQ</a>
                <span> | Angeles City, PH (2018-2019)</span>
              </p>
              <ul>
                <li>
                  Developed Pixel perfect from scratch HTML/CSS
                  websites/webpages from designs.
                </li>
                <li>Converting HTML webpages to full Wordpress sites.</li>
                <li>Developing Shopify themes from scratch.</li>
                <li>Fixing site revisions and website optimizations.</li>
              </ul>
            </div>
          </SC.PortfolioItem>
          <SC.PortfolioItem>
            <div className="image">
              <img src={logo_virtualcrafters} alt="" />
            </div>
            <div className="details">
              <h3>Web Developer</h3>
              <p>
                <a href="fullstackhq.com">VirtualCrafters</a>
                <span> | Mabalacat City, PH (2019-2020)</span>
              </p>
              <ul>
                <li>Implemented Modified Wordpress features/plugins.</li>
                <li>Optimized Client Wordpress sites page speed/seo scores.</li>
                <li>Fix and added new features to shopify websites.</li>
                <li>Fix/add Weekly revisions from client</li>
              </ul>
            </div>
          </SC.PortfolioItem>
          <SC.PortfolioItem>
            <div className="image">
              <img src={logo_msm} alt="" />
            </div>
            <div className="details">
              <h3>Web Developer</h3>
              <p>
                <a href="fullstackhq.com">MsquareMedia</a>
                <span> | Kelowna, British Columbia (2020-2021)</span>
              </p>
              <ul>
                <li>Handled site revisions using page builders(Elementor)</li>
                <li>Optimizing Wordpress speed and Page scores</li>
                <li>Created and converted Designs to working Webpages</li>
                <li>Implemented features using Ajax/REST apis</li>
              </ul>
            </div>
          </SC.PortfolioItem>
          <SC.PortfolioItem>
            <div className="image">
              <img src={logo_acn} alt="" />
            </div>
            <div className="details">
              <h3>Software Engineer</h3>
              <p>
                <a href="fullstackhq.com">Accenture</a>
                <span> | Manila, Philippines (2021-Present)</span>
              </p>
              <ul>
                <li>Developing & Optimization of Web Applications</li>
                <li>Developing and Pushing Updates to Production</li>
                <li>
                  Implementing Backend, Services and API's to Existing Web Apps
                </li>
              </ul>
            </div>
          </SC.PortfolioItem>
        </GS.RootCont>
      </SC.Portfolio>
      <SC.Projects>
        <GS.RootCont>
          <GS.SubHeader>PROJECTS</GS.SubHeader>
          <SC.ProjectContainer>
            <SC.ProjectItem>
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project_1})` }}
              ></div>
              <h3>Pokedex App made w/ Vue</h3>
            </SC.ProjectItem>
          </SC.ProjectContainer>
        </GS.RootCont>
      </SC.Projects>
      <SC.Skills>
        <GS.RootCont>
          <GS.SubHeader>SKILLS</GS.SubHeader>
          <SC.SkillsCont>
            <SC.SkillItem>
              <h3>
                Front-end dev
                <BsCodeSlash />
              </h3>
              <p>
                HTML5, CSS3, SCSS, Javascript, Reactjs, Vuejs, jQuery and
                Bootstrap4/5.
              </p>
            </SC.SkillItem>
            <SC.SkillItem>
              <h3>
                React Libraries <FaReact />
              </h3>
              <p>
                React Router, Redux, Material UI, Styled Components and React
                DND.
              </p>
            </SC.SkillItem>
            <SC.SkillItem>
              <h3>
                APIs <BsDiagram2 />
              </h3>
              <p>Youtube, Google Maps, OMDb, OpenWeatherMap and PokeApi.</p>
            </SC.SkillItem>
            <SC.SkillItem>
              <h3>
                Wordpress <BsWordpress />
              </h3>
              <p>
                Custom Themes, Custom Post Type, ACF, Elementor, Beaver Builder,
                Divi, Gravity Forms and Contact Form 7.
              </p>
            </SC.SkillItem>
            <SC.SkillItem>
              <h3>
                Graphics <BsPaintBucket />
              </h3>
              <p>Adobe Photoshop, Adobe XD, Photopea and Figma.</p>
            </SC.SkillItem>
            <SC.SkillItem>
              <h3>
                Methodologies <BsBookHalf />
              </h3>
              <p>DevOps, Waterfall and BEM.</p>
            </SC.SkillItem>
          </SC.SkillsCont>
        </GS.RootCont>
      </SC.Skills>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  theme: state.themeToggle,
});

export default connect(mapStateToProps)(HomePage);
