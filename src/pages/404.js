import React from "react";
import Layout from "../components/Layout";

import { Link } from "gatsby";

const NotFoundPage = () => (
    <Layout>
        <h1>Page Not Found</h1>
        <Link to="/">home</Link>
    </Layout>
);

export default NotFoundPage;
