import React from "react";
import Image from "next/image";

import Logo from "../../public/logo.svg";
import Calendar from "../../public/icon-calendar.svg";
import Todo from "../../public/icon-todo.svg";
import Reminder from "../../public/icon-reminders.svg";
import Planning from "../../public/icon-planning.svg";

import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="text-gray-white font-semibold flex p-7 py-4 items-center">
        <Image src={Logo} width={90} alt="logo" className="h-7 pointer-events-none"/>
        <div className="flex-1 px-8 mb-2">
          <Dropdown>
            <DropdownTrigger>
              <Button className="bg-transparent h-4 p-2 py-4 rounded-sm text-sm font-semibold text-gray-white hover:text-black">
                Features
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="todo">
                <div className="flex items-center gap-2">
                  <Image
                    src={Todo}
                    width={14}
                    className="h-[14px]"
                    alt="Todo"
                  />
                  Todo List
                </div>
              </DropdownItem>
              <DropdownItem key="calendar">
                <div className="flex items-center gap-2">
                  <Image
                    src={Calendar}
                    width={14}
                    className="h-[14px]"
                    alt="Todo"
                  />
                  Calendar
                </div>
              </DropdownItem>
              <DropdownItem key="reminder">
                <div className="flex items-center gap-2">
                  <Image
                    src={Reminder}
                    width={14}
                    className="h-[14px]"
                    alt="Todo"
                  />
                  Reminders
                </div>
              </DropdownItem>
              <DropdownItem key="planning">
                <div className="flex items-center gap-2">
                  <Image
                    src={Planning}
                    width={14}
                    className="h-[14px]"
                    alt="Todo"
                  />
                  Planning
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Dropdown>
            <DropdownTrigger>
              <Button className="bg-transparent h-4 p-2 py-4 rounded-sm ml-2 text-sm font-semibold text-gray-white hover:text-black">
                Company
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="history">History</DropdownItem>
              <DropdownItem key="our-team">Our Team</DropdownItem>
              <DropdownItem key="blog">Blog</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Link href="#" className="text-sm p-2 py-4 hover:text-black ml-2">
            Careers
          </Link>
          <Link href="#" className="text-sm p-2 py-4 hover:text-black ml-2">
            About
          </Link>
        </div>
        <div>
          <Link href="#" className="text-sm p-2 py-4 mr-3 hover:text-black">
            Login
          </Link>
          <Button
            variant="bordered"
            className="text-gray-white font-semibold hover:text-black"
          >
            Register
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
