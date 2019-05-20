import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

const StorePage = () => {
    return (
        <Layout>
            <h1>Store Page</h1>
            <Link to="/">Back to HomePage</Link>
        </Layout>
    )
}

export default StorePage