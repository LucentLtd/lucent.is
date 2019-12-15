import React from "react";
import { Link } from "gatsby";

import logo from '../assets/images/lucent-logo-bk.png'

class Header extends React.Component {
    render() {
        return (
            <footer className="h-24 flex flex-col justify-center px-3 mb-10" >
                <Link className="mx-auto">
                    <img
                        className="w-32"
                        src={logo}
                        to="/"
                    />
                </Link>
            </footer>
        );
    }
}

export default Header;
