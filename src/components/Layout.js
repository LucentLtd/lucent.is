import React from "react";
import Helmet from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";

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
                <div>{children}</div>
            </>
        );
    }
}

export default Layout;
