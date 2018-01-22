import React from 'react';
import { connect } from 'react-redux';

import './Tabs.css';

const Container = ({ names, activeTab, setActiveTab }) => (
  <ul>
    {names.map((name, i) => (
      <li
        key={i}
        className={activeTab === name ? 'active' : ''}
        onMouseOver={e => console.log(e.target.className)}
        // onClick={e => setActiveTab(e.target.text)}
        onClick={e => console.log(e.target.innerText.toLowerCase().replace(/ /g, '-'))}
      >
        {name}
      </li>
    ))}
  </ul>
)

const mapStateToProps = state => ({
  activeTab: state.Tabs.activeTab
});

const mapDispatchToProps = ({
  // handleClick: 
});

export default connect(mapStateToProps, mapDispatchToProps)(Container)