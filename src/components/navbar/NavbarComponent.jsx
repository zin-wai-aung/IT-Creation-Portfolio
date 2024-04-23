import React from 'react'
import Logo from "../reusable/Logo"
import { Navbar, Dropdown } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";


const NavbarComponent = () => {

  const nav = useNavigate();


  return (
    <Navbar className=" bg-primary z-50 shadow-lg fixed w-full mx-auto ">
      <div className=" container mx-auto w-[90%] md:w-full my-2 h-20 flex justify-center items-center">
        <div className=" container flex justify-between items-center w-full mx-auto">
          <Navbar.Brand className=' '>
            <div className=" w-48 h-24 flex items-center">
              <Logo/>
            </div>
          </Navbar.Brand>

          <Navbar.Collapse className=" text-white  flex items-center">
            <div
              onClick={nav}
              href="#"
              className=" text-secondary text-[18px] hover:text-secondary "
            >
              <Link to={"/"}>Home</Link>
            </div>
            <div
              href="#"
              className=" text-paragraphText text-[18px] hover:text-secondary "
            >
              <Link to={"/about"}>About</Link>
            </div>
            <div className="flex">
              <Dropdown
                inline
                label={
                  <div
                    href="#"
                    className=" text-paragraphText text-[18px] hover:text-secondary"
                  >
                    Services
                  </div>
                }
              >
                <Dropdown.Item>Logo</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Social Media Design</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Packaging Design</Dropdown.Item>
              </Dropdown>
            </div>
            <div className="flex">
              <Dropdown
                inline
                label={
                  <div
                    href="#"
                    className=" text-paragraphText text-[18px] hover:text-secondary"
                  >
                    Projects
                  </div>
                }
              >
                <Dropdown.Item>Logo</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Social Media Design</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Packaging Design</Dropdown.Item>
              </Dropdown>
            </div>
            <div
              href="#"
              className=" text-paragraphText text-[18px] hover:text-secondary"
            >
              Reviews
            </div>
            <div
              href="#"
              className=" text-paragraphText text-[18px] hover:text-secondary"
            >
              Contact
            </div>
          </Navbar.Collapse>
          <Navbar.Toggle />
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarComponent