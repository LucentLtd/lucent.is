import React from "react";
import { Link } from "gatsby";
import Image from "./Image";

class Header extends React.Component {
    render() {
        return (
            <footer className="h-32 bg-gray-100 flex flex-col justify-center" >
                <Link className="mx-auto">
                    <Image
                        className="w-32 mx-2"
                        src="lucent-logo-bk.png"
                        to="/"
                    />
                </Link>
            </footer>
        );
    }
}

export default Header;
