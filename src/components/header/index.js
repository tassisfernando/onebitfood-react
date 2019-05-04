import React from 'react';
 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
 
import { Navbar, Container, Icon } from 'rbx';
import LogoImage from '../../assets/images/logo-v1-horizontal.png';
import SearchBox from '../search_box_component';
import { showModal } from "../../actions/modal";
import { FaCrosshairs } from 'react-icons/fa';
 
 
import "../../styles/header.scss";
 
const Header = (props) => (
  <div className="top-navbar">
    <Container>
      <Navbar>
          <Navbar.Brand>
            <img src={LogoImage} alt="logo" />
          </Navbar.Brand>
 
          <Navbar.Menu>
            <Navbar.Segment as="div" className="navbar-item" align="navbar-center">
              <SearchBox />
            </Navbar.Segment>
            <Navbar.Segment as="div" align="end">
              <Navbar.Item onClick={() => props.showModal('ADDRESS_MODAL')}>
                <Icon color="has-custom-black" >
                  <FaCrosshairs />
                </Icon>
                <p>Endereço</p>
              </Navbar.Item>
            </Navbar.Segment>
          </Navbar.Menu>
      </Navbar>
    </Container>
  </div>
);
 
const mapDispatchToProps = dispatch => bindActionCreators({ showModal }, dispatch);
 
export default connect(null, mapDispatchToProps)(Header);