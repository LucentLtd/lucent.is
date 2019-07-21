import React from "react";
import Helmet from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";

// Styles
import "../styles/app.css";

class Layout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="subpixel-antialiased">
                <Helmet>
                    <script src="/js/fathom.js" />
                </Helmet>
                <Header />
                <main className="container max-w-2xl mx-auto  py-8">
                    <div className="mx-2">{children}</div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Layout;
