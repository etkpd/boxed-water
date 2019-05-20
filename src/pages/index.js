import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <h1>Proin pharetra ullamcorper</h1>
        <p>Etiam et justo blandit mi ultricies sodales. Integer eget lorem ac velit interdum vestibulum. </p>
        <Link to="/store">Order Online</Link>
      </section>
      
      <section>
        <h1>Vivamus pellentesque</h1>
        <p>Quisque blandit quam et fringilla fermentum. Pellentesque libero felis, faucibus id aliquam pretium, rhoncus vel libero. Praesent blandit felis et diam pretium sollicitudin sed ac turpis. Praesent molestie erat vel mi vehicula auctor suscipit eget est. Maecenas feugiat nunc a nunc congue venenatis. Etiam placerat hendrerit mauris suscipit scelerisque.</p>
      </section>

      <section>
        <article>
          <figure>
            <img></img>
          </figure>
          <h3>Duis vitae euismod</h3>
          <p>Praesent in mi vel mi mollis tincidunt et a libero. Donec sed diam faucibus, iaculis massa et, rhoncus felis. Fusce imperdiet eleifend nunc, at eleifend dui venenatis nec. Duis porta ut felis eu luctus. </p>            
        </article>
        <article>
          <figure>
            <img></img>
          </figure>
          <h3>Praesent a lorem</h3>
          <p>Nunc dapibus consectetur mi quis facilisis. Phasellus facilisis imperdiet sagittis. Quisque tellus lacus, porta et nisl at, porttitor sagittis diam.</p>            
        </article>
        <article>
          <figure>
            <img></img>
          </figure>
          <h3>Pellentesque ultrices</h3>
          <p>Donec lacus ligula, maximus a vulputate id, molestie vitae justo. Aliquam luctus cursus urna sit amet tempor. Phasellus eu efficitur nulla. </p>            
        </article>
      </section>
    </Layout>
    )
}

export default IndexPage