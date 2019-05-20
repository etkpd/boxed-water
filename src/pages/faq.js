import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

const FAQPage = () => {
    return (
        <Layout>
            <h1>FAQ Page</h1>
            <Link to="/">Back to HomePage</Link>
        </Layout>
    )
}

export default FAQPage