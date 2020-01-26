import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

const MissionPage = () => {
    return (
        <Layout>
            <h1>Mission Page</h1>
            <Link to="/">Back to HomePage</Link>
        </Layout>
    )
}

export default MissionPage