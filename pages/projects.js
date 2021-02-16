//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'

const linkStyle = {
    marginRight: 15,
    color: 'white',
  }

export default () => (
  <Layout>
  
  <h2>My Projects</h2>

        <Link href="https://github.com/Claire2788/Snake/">
          <a style={linkStyle}>Snake Game</a>
        </Link>

        <Link href="https://search-itunes-app.herokuapp.com/">
          <a style={linkStyle}>iTunes Search API</a>
        </Link>

  
</Layout>
)