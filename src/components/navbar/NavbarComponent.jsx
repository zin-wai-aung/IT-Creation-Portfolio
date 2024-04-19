import React from 'react'
import Logo from "../reusable/Logo"
import { Navbar, Dropdown } from "flowbite-react";

const NavbarComponent = () => {
  return (
    <Navbar className=" bg-primary shadow-lg ">
      <div className=" container mx-auto w-[90%] md:w-full my-2 h-20 flex justify-center items-center">
        <div className=" container flex justify-between items-center w-full mx-auto">
          <Navbar.Brand>
            <div className=" w-40 h-16 flex items-center">
              <Logo />
            </div>
          </Navbar.Brand>

          <Navbar.Collapse className=" text-white  flex items-center">
            <Navbar.Link href="#" className=" text-secondary text-[18px] hover:text-secondary ">
              Home
            </Navbar.Link>
            <Navbar.Link href="#" className=" text-paragraphText text-[18px] hover:text-secondary ">
              About
            </Navbar.Link>
            <div className="flex">
              <Dropdown
                inline
                label={
                  <Navbar.Link
                    href="#"
                    className=" text-paragraphText text-[18px] hover:text-secondary"
                  >
                    Services
                  </Navbar.Link>
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
                  <Navbar.Link
                    href="#"
                    className=" text-paragraphText text-[18px] hover:text-secondary"
                  >
                    Projects
                  </Navbar.Link>
                }
              >
                <Dropdown.Item>Logo</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Social Media Design</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Packaging Design</Dropdown.Item>
              </Dropdown>
            </div>
            <Navbar.Link href="#" className=" text-paragraphText text-[18px] hover:text-secondary">
              Reviews
            </Navbar.Link>
            <Navbar.Link href="#" className=" text-paragraphText text-[18px] hover:text-secondary">
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
          <Navbar.Toggle />
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarComponent