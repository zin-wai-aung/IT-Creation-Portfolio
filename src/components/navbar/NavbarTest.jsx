import React, { useState } from 'react'
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Logo from '../reusable/Logo';
import { useNavigate } from 'react-router';
import NavMenuHover from '../reusable/NavMenuHover';
 
const serviceMenuItems = [
  {
    title: "Logo Branding",
  },
  {
    title: "Social Ads Design",
  },
  {
    title: "Packaging Design",
  }
];

const projectMenuItems = [
  {
    title: "Logo Branding",
  },
  {
    title: "Social Ads Design",
  },
  {
    title: "Packaging Design",
  },
];
 
function ServiceListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = serviceMenuItems.map(({ title }, key) => (
    <div key={key}>
      <MenuItem className="flex flex-col items-center gap-3 rounded-lg  text-white hover:bg-transparent hover:text-primary">
        <Typography
          variant="h6"
          className="flex items-center text-sm font-bold "
        >
          {title}
        </Typography>
      </MenuItem>
    </div>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className=" hover:bg-transparent"
          >
            <ListItem
              className={`flex items-center gap-2 py-2 pr-4 font-alacrity font-bold text-white hover:bg-transparent hover:text-secondary ${
                isMenuOpen ? " bg-transparent text-secondary" : ""
              } `}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={6}
                className={`hidden h-3 w-3 transition-transform text-secondary lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={6}
                className={`block h-3 w-3 transition-transform text-secondary lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl border-none rounded-lg lg:block bg-secondary bg-opacity-70">
          <ul className="gap-y-2 outline-none outline-0">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function ProjectListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = projectMenuItems.map(({ title }, key) => (
    <div key={key}>
      <MenuItem className="flex flex-col items-center gap-3 rounded-lg  text-white hover:bg-transparent hover:text-primary">
        <Typography
          variant="h6"
          className="flex items-center text-sm font-bold "
        >
          {title}
        </Typography>
      </MenuItem>
    </div>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            as="div"
            variant="small"
            className=" hover:bg-transparent"
          >
            <ListItem
              className={`flex items-center gap-2 py-2 pr-4 font-alacrity font-bold text-white hover:bg-transparent hover:text-secondary ${
                isMenuOpen ? " bg-transparent text-secondary" : ""
              } `}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <div className="flex flex-col group">
                Projects
              </div>
              <ChevronDownIcon
                strokeWidth={6}
                className={`hidden h-3 w-3 transition-transform text-secondary lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={6}
                className={`block h-3 w-3 transition-transform text-secondary lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl border-none rounded-lg lg:block bg-secondary bg-opacity-70">
          <ul className="gap-y-2 outline-none outline-0">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden bg-secondary">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography variant="small" className=" font-bold font-alacrity">
        <ListItem className="flex flex-col items-center gap-2 py-2 pr-4 text-white group hover:bg-transparent hover:text-secondary">
          Home
          <NavMenuHover />
        </ListItem>
      </Typography>
      <Typography variant="small" className=" font-bold font-alacrity">
        <ListItem className="flex flex-col items-center gap-2 py-2 pr-4 text-white group hover:bg-transparent hover:text-secondary">
          About
          <NavMenuHover/>
        </ListItem>
      </Typography>
      <ServiceListMenu />
      <ProjectListMenu />
      <Typography variant="small" className="font-medium">
        <ListItem className="flex flex-col items-center gap-2 py-2 pr-4 font-alacrity font-bold text-white group hover:bg-transparent hover:text-secondary">
          Reviews
          <NavMenuHover/>
        </ListItem>
      </Typography>
      <Typography variant="small" className="font-medium">
        <ListItem className="flex flex-col items-center gap-2 py-2 pr-4 font-alacrity font-bold text-white group  hover:bg-transparent hover:text-secondary">
          Contact
          <NavMenuHover/>
        </ListItem>
      </Typography>
    </List>
  );
}

const NavbarTest = () => {

  const [openNav, setOpenNav] = React.useState(false);
  const nav = useNavigate();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);


  return (
    <Navbar
      fullWidth={true}
      className=" mx-auto w-full py-4 border-none rounded-none bg-primary z-50 fixed"
    >
      <div className=" container mx-auto">
        <div className="flex items-center justify-between text-blue-gray-900 hover:border-none hover:bg-none">
          <Typography as="a" variant="h6" className="cursor-pointer py-1.5">
            <div className=" w-40 h-12 flex justify-center items-center">
              <Logo />
            </div>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>

          <IconButton
            variant="text"
            className="lg:hidden text-white outline-none focus:outline-none "
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon
                className={`h-6 w-6 transition-transform rotate-90`}
                strokeWidth={2}
              />
            ) : (
              <Bars3Icon
                className="h-6 w-6 transition-transform"
                strokeWidth={2}
              />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden"></div>
        </Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarTest