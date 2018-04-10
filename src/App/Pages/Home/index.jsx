import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
// import { green400, green600, blue400, blue600, red400, red600 } from 'material-ui/styles/colors';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import phone from './phone.svg';

import { setActiveTab } from '../../components/Tabs/actions';

import './Home.css';

const Slogan = ({ about }) => (
  <div>
    <h1>DESIGN IS ABOUT</h1>
    <h1>{about}</h1>
    <p style={{ marginTop: "30px" }}>CALL US: +00 01234 5678</p>
  </div>
)

const CustomSlide = ({ about }) => (
  <Slide
    media={<Slogan about={about} />}
    contentStyle={{ background: "none", width: "100%", opacity: 1 }}
    mediaBackgroundStyle={{ background: "none" }}
  // title={<button>GET IN TOUCH!</button>}
  />
)

const abouts = [
  'communication',
  'simplicity',
  'readability'
]

const Container = ({ setActiveTab }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div className="home">
      <AutoRotatingCarousel
        interval={5000}
        open
        style={{ position: "static", background: "none", border: "none" }}
      >
        {abouts.map((item, i) => <CustomSlide key={i} about={item.toUpperCase()} />)}

      </AutoRotatingCarousel>
      <Link
        to="/contactus"
        onClick={() => setActiveTab('contactus')}
      >
        <button className="contactus-btn" >GET IN TOUCH!</button>
      </Link>
      <a href="tel:5555555555">
        <button className="callus-btn">
          <img src={phone} alt="phone" />
        </button>
      </a>
    </div>
  </MuiThemeProvider>
)

const mapDispatchToProps = {
  setActiveTab,
}

export default connect(null, mapDispatchToProps)(Container);
