import React from "react";
import { Link } from "gatsby";
import Image from "./Image";

class Header extends React.Component {
    render() {
        return (
            <header className="h-16 header flex flex-col justify-center text-white">
                <div className="container max-w-2xl mx-auto">
                    <div className="flex justify-between">
                        <Link className="">
                            <Image
                                className="w-10 mx-2"
                                src="logo-reverse.png"
                                to="/"
                            />
                        </Link>
                        <nav className="flex justify-end">
                            <Link
                                className="text-white no-underline font-light hover:underline mx-2 inline-block align-middle flex flex-col justify-center"
                                to="#mission"
                            >
                                Mission
                            </Link>
                            <Link
                                className="text-white no-underline font-light hover:underline mx-2 inline-block align-middle flex flex-col justify-center"
                                to="#values"
                            >
                                Values
                            </Link>
                            <Link
                                className="text-white no-underline font-light hover:underline mx-2 inline-block align-middle flex flex-col justify-center"
                                to="#people"
                            >
                                People
                            </Link>
                            <Link
                                className="text-white no-underline font-light hover:underline mx-2 inline-block align-middle flex flex-col justify-center"
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
