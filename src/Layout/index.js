import React from 'react';
import layoutStyle from './Config/layoutStyle'
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Root from './Config/Root';
import Header from './Config/Header';
import Content from './Config/Content';
import Footer from './Config/Footer';
import Nav from './Config/Nav';
import MenuHeader from './Components/Sidebar/MenuHeader';
import MenuList from './Components/Sidebar/MenuList';
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const history = useLocation();
	const isLoginPage = history.pathname === "/login";
  if(isLoginPage) return (<Outlet/>);
  return (
    <Root config={layoutStyle} style={{ minHeight: "100vh" }}>
      <CssBaseline />
      <Header menuIcon={{ inactive: <MenuIcon />, active: <ChevronLeftIcon /> }}>
        Header
      </Header>
      <Nav
        collapsedIcon={{ inactive: <ChevronLeftIcon />, active: <ChevronRightIcon /> }}
        header={ctx => <MenuHeader />}
      >
        <MenuList />
      </Nav>
      <Content>
        <Outlet />
      </Content>
      <Footer>
        {`Footer - App Version ${process.env.REACT_APP_VERSION}`}
      </Footer>
    </Root>
  );
};

export default Layout;