import React, { Fragment, useState } from "react";

import { Link } from "react-router-dom";

import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { Avatar, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const content = (
    <div className="popover-content m-0 p-0">
      <p className="font-bold hover:text-gray-500 mb-2 hover:cursor-pointer">
        My Account
      </p>
      <p className="font-bold hover:text-gray-500 mb-2 hover:cursor-pointer">
        Wallet Transaction
      </p>
      <p className="font-bold hover:text-gray-500 mb-2 hover:cursor-pointer">
        Order History
      </p>
      <p className="font-bold hover:text-gray-500 mb-2 hover:cursor-pointer">
        Logout
      </p>
    </div>
  );
  const text = <span>Title</span>;

  return (
    <Fragment>
      <div className="bg-white sticky top-0 z-50  ">
        {/* for Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
                onClick={() => setOpen(false)}
              >
                <Dialog.Panel className="relative flex w-full max-w-64 flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-20">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <RxCross2 />
                    </button>
                  </div>

                  <section className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <div className="flow-root">
                      <Link
                        to={"/"}
                        className="-m-2 block p-2 font-medium text-gray-900 "
                      >
                        Talk to Astrologer
                      </Link>
                    </div>

                    <div className="flow-root">
                      <Link
                        to={"/"}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Book A Pooja
                      </Link>
                    </div>

                    <div className="flow-root">
                      <Link
                        to={"/"}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Astromall
                      </Link>
                    </div>

                    <div className="flow-root">
                      <Link
                        to={"/"}
                        className="-m-2 block p-2 font-medium text-gray-900 "
                      >
                        Login
                      </Link>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* for desktop  */}
        <header className="relative bg-white">
          {/* <p className="flex h-10 items-center justify-center bg-orange-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            Free kundali
          </p> */}

          <nav
            aria-label="Top"
            className="bg-orange-600 px-4 sm:px-6 lg:px-8 shadow-xl text-white"
          >
            <section className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-orange-600 p-2  lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1 className=" text-2xl font-bold text-gray-100  px-2 py-1 rounded">
                      LOGO
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link to={"/"} className="text-sm font-medium text-gray-50 ">
                    Talk to Astrologer
                  </Link>

                  <Link to={"/"} className="text-sm font-medium text-gray-50 ">
                    Book A Pooja
                  </Link>

                  <Link to={"/"} className="text-sm font-medium text-gray-50 ">
                    Astromall
                  </Link>

                  <Link to={"/"} className="text-sm font-medium text-gray-50 ">
                    Login
                  </Link>
                </div>

                {/* Admin */}
                <div className="ml-4 flow-root lg:ml-6 hover:cursor-pointer">
                  <Popover placement="topRight" content={content}>
                    <Avatar
                      style={{ backgroundColor: "#87d068" }}
                      icon={<UserOutlined />}
                    />
                  </Popover>
                </div>
              </div>
            </section>
          </nav>
        </header>
      </div>
    </Fragment>
  );
};

export default Navbar;
