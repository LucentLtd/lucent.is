import React from "react";
import Helmet from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";

import Header from "./Header";
// import { Footer } from "./Footer";

// Styles
import "../styles/app.css";

class Layout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <>
                <Helmet>
                    <script src="/js/fathom.js" />
                </Helmet>
                <Header />
                <main>{children}</main>
                {/* <Footer /> */}
            </>
        );
    }
}

export default Layout;
