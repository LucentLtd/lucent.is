import React from "react";
import { Link } from "gatsby";

import logo from '../assets/images/logo-reverse.png'

class Header extends React.Component {
    render() {
        return (
            <header className="header flex flex-col justify-center text-white py-2">
                <div className="container max-w-2xl mx-auto">
                    <div className="flex justify-between px-3">
                        <Link className="">
                            <img
                                className="w-8"
                                src={logo}
                                to="/"
                            />
                        </Link>
                        <nav className="flex justify-end">
                            <Link
                                className="header-link no-underline font-light hover:underline ml-2 inline-block align-middle flex flex-col justify-center"
                                to="#about"
                            >
                                About
                            </Link>
                            <Link
                                className="header-link no-underline font-light hover:underline ml-2 inline-block align-middle flex flex-col justify-center"
                                to="#work"
                            >
                                Work
                            </Link>
                            <Link
                                className="header-link no-underline font-light hover:underline ml-2 inline-block align-middle flex flex-col justify-center"
                                to="#people"
                            >
                                People
                            </Link>
                            <Link
                                className="header-link no-underline font-light hover:underline ml-2 inline-block align-middle flex flex-col justify-center"
                                to="#contact"
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
