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
   <h1>Contact Me</h1>
   
        <Link href="https://www.linkedin.com/in/claire-smithard-845a712a">
          <a style={linkStyle}>LinkedIn</a>
        </Link>

        <Link href="https://github.com/Claire2788">
          <a style={linkStyle}>Github</a>
        </Link>
  
</Layout>
)