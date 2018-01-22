import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setActiveTab } from './actions';

import './Tabs.css';

const Container = ({ names, activeTab, setActiveTab }) => (
  <ul>
    {names.map((name, i) => {
      const nameShort = name.split(' ').join('');
      return (
        <Link 
        to={`/${nameShort}`}
        key={i}
        className={activeTab === nameShort ? 'active' : ''}
        // onMouseOver={e => console.log(e.target.className)}
        onClick={() => setActiveTab(nameShort)}
        >
        {name}
      </Link>
      )
    })}
  </ul>
)

const mapStateToProps = state => ({
  activeTab: state.Tabs.activeTab
});

const mapDispatchToProps = ({
  // handleClick: 
  setActiveTab,
});

export default connect(mapStateToProps, mapDispatchToProps)(Container)