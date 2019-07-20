import React from "react";
import { Link } from "gatsby";
import Image from "./Image";

class Header extends React.Component {
    render() {
        return (
            <header className="h-16 header flex flex-col justify-center text-white">
                <div className="container mx-auto">
                    <div className="flex justify-between">
                        <Link className="w-1/2">
                            <Image
                                className="w-10 mx-2"
                                src="logo-reverse.png"
                                to="/"
                            />
                        </Link>
                        <nav className="w-1/2 flex justify-end">
                            <Link
                                className="hover:underline mx-2 inline-block align-middle flex flex-col justify-center"
                                to="#mission"
                            >
                                Mission
                            </Link>
                            <Link
                                className="hover:underline mx-2 inline-block align-middle flex flex-col justify-center"
                                to="#values"
                            >
                                Values
                            </Link>
                            <Link
                                className="hover:underline mx-2 inline-block align-middle flex flex-col justify-center"
                                to="#people"
                            >
                                People
                            </Link>
                            <Link
                                className="hover:underline mx-2 inline-block align-middle flex flex-col justify-center"
                                to="#projects"
                            >
                                Projects
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
