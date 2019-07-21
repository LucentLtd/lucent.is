import React from "react";
import Layout from "../components/Layout";

import { Link } from "gatsby";

const MessageThanks = () => (
    <Layout>
        <h1>Thanks for the message!</h1>
        <p>We'll be in touch soon.</p>
        <Link to="/">home</Link>
    </Layout>
);

export default MessageThanks;
