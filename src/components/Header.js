import React from "react";
import { Link } from "gatsby";
import Image from "./Image";

class Header extends React.Component {
    render() {
        return (
            <header className="h-16 header flex flex-col justify-center text-white">
                <div className="container max-w-2xl mx-auto">
                    <div className="flex justify-between px-3">
                        <Link className="">
                            <Image
                                className="w-10"
                                src="logo-reverse.png"
                                to="/"
                            />
                        </Link>
                        <nav className="flex justify-end">
                            <Link
                                className="header-link no-underline font-light hover:underline ml-2 inline-block align-middle flex flex-col justify-center"
                                to="#mission"
                            >
                                Mission
                            </Link>
                            <Link
                                className="header-link no-underline font-light hover:underline ml-2 inline-block align-middle flex flex-col justify-center"
                                to="#values"
                            >
                                Values
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
