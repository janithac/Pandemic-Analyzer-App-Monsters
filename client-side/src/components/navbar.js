import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/images/logo.png";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import { ArrowDropDown } from '@material-ui/icons';
import { IconButton, ListItemText } from "@material-ui/core";
import List from "@material-ui/core/list";
import ListItem from "@material-ui/core/listItem";
import Container from "@material-ui/core/Container";
// import ListItemText from "@material-ui/core/list/ListItemText";
// import Home from "../Pages/Home";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.5em",
    },
  },
  logo: {
    height: "3.5em",
    [theme.breakpoints.down("md")]: {
      height: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    fontWeight: "600",
    fontSize: "1em"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  menu: {
    backgroundColor: "rgba(255,255,255)",
    color: "black",
    borderRadius: "3px",
    boxShadow: "0px 0px 3px rgba(0,0,0,0.02)",
    border: "1px solid rgba(0,0,0,0.2)",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.6,
    // paddingLeft: "20px",
    // paddingRight: "20px",
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "30px",
    width: "30px",
  },
  drawer: {
    backgroundColor: theme.palette.common.Blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "#9c36b5",
    // opacity: 0.7,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.model - 1,
    // backgroundColor: "transparent",
    backgroundColor: "rgba(255,255,255)",
  },
  appBarScrolled: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderBottom: "1px solid #ededed",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
  },
}));
function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };
  // const menuOptions = [
  //   { name: "Services", Link: "/Services", activeIndex: 1, selectedIndex: 0 },
  //   { name: "Custom", Link: "/Custom", activeIndex: 1, selectedIndex: 1 },
  //   { name: "Mobile", Link: "/Mobile", activeIndex: 1, selectedIndex: 2 },
  //   { name: "Web", Link: "/Web", activeIndex: 1, selectedIndex: 3 },
  // ];
  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "About us",
      link: "/Aboutus",
      activeIndex: 1,
    },
    // {
    //   name: "Services",
    //   link: "/Services",
    //   activeIndex: 2,
    //   ariaOwns: anchorEl ? "simple-menu" : undefined,
    //   ariaPopup: anchorEl ? "true" : undefined,
    //   mouseOver: (event) => handleClick(event),
    // },
    // { name: "Blogs", link: "/Blogs", activeIndex: 3 },
    { name: "Contact us", link: "/contactus", activeIndex: 4 },
    { name: "Sign In", link: "/signin", activeIndex: 6 },
    // { name: "Services", link: "/services", activeIndex: 2 },
   
    // { name: "Careers", link: "/careers", activeIndex: 5 },

    // { name: "Our Team", link: "/Team", activeIndex: 7 },
  ];

  // useEffect(() => {
  //   [...menuOptions, ...routes].forEach((route) => {
  //     switch (window.location.pathname) {
  //       case `${route.link}`:
  //         if (value !== route.activeIndex) {
  //           setValue(route.activeIndex);
  //           if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
  //             setSelectedIndex(route.selectedIndex);
  //           }
  //         }
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }, [value, menuOptions, selectedIndex, routes]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}

      </Tabs>
      {/* <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              SAs
            </Button> */}
      {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.Link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu> */}
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItem} diableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        diableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 1,
  });
  return (
    <>
      <React.Fragment>
        <ElevationScroll>
          <AppBar
            position="fixed"
            className={`${classes.appbar} ${trigger === false ? "" : classes.appBarScrolled
              }`}
            color="white"
          >
            <Container>
              <Toolbar disableGutters>
                <Button
                  component={Link}
                  to="/"
                  onClick={() => setValue(0)}
                  className={classes.logoContainer}
                >
                  <img alt="logo" src={logo} className={classes.logo} />
                </Button>
                {matches ? drawer : tabs}
              </Toolbar>
            </Container>
          </AppBar>
        </ElevationScroll>
        {/* <div className={classes.toolbarMargin} /> */}
      </React.Fragment>
    </>
  );
}

export default Navbar;
