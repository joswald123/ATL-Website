import sidebarBgImage from '../../assets/img/sidebar/sidebar-14.jpg';
// import SourceLink from 'components/SourceLink';
import React from 'react';
// import { FaFacebook } from 'react-icons/fa';
import {
  MdAccountCircle,
  MdDashboard,
  MdKeyboardArrowDown,
  MdPages,
  MdEvent,
  // MdTextFields,
  MdPermContactCalendar,
  MdHistory,
  MdPeople,
  MdPayment
} from 'react-icons/md';
import { 
  FaFacebookSquare,  
  FaInstagram, 
  FaDonate, 
  FaNetworkWired,
  FaHandsHelping
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  // Navbar,
  NavItem,
  NavLink as BSNavLink, Button
} from 'reactstrap';
import bn from '../../utils/bemnames';
import fire from '../../config/Fire';



const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navContents = [
  { to: '/facebook', name: 'FaceBook', exact: true, Icon: FaFacebookSquare },
  { to: '/instagram', name: 'Instagram', exact: true, Icon: FaInstagram },

];

const pageContents = [
  { to: '/login', name: 'login', exact: false, Icon: MdAccountCircle },
  // { to: '/signUp', name: 'signup', exact: false, Icon: MdAccountCircle },
  { to: '/events', name: 'events', exact: false, Icon: MdEvent },
  { to: '/match', name: 'schedule', exact: false, Icon: MdEvent },
  { to: '/teamAdmin', name: 'team-admin', exact: false, Icon: MdPeople },

];

const navItems = [
  { to: '/', name: 'home', exact: true, Icon: MdDashboard },
  { to: '/history', name: 'about us', exact: true, Icon: MdHistory },
  { to: '/team', name: 'team', exact: true, Icon: MdPeople },
  { to: '/calendar', name: 'calendar', exact: true, Icon: MdPermContactCalendar },  
  { to: '/donate', name: 'Donate', exact: true, Icon: FaDonate },
  { to: '/dues', name: 'Team Dues', exact: true, Icon: MdPayment },
  { to: '/sponsor-page', name: 'Become a sponsor', exact: true, Icon: FaHandsHelping },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenContents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <FaNetworkWired className={bem.e('nav-item-icon')} />
                  <span className="">SOCIAL MEDIA</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenContents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenContents}>
              {navContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Pages')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">ADMIN ACCESS</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenPages}>
              {pageContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
              <Button className="logoutbtn" onClick={() => fire.auth().signOut()}>Sign Out</Button>
            </Collapse>

          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
