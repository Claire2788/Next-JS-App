//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'
import _JSXStyle from 'styled-jsx/style'

const layoutStyle = {
	color: 'white',
  }

/* Notice in the example below how we render static images with Next.js:
Create a folder called static in your project root directory. From your code you can then reference those files with /static/ URLs (see<img src={`/static/art/${props.data.image}.jpg`} alt=""/>) 
Note: Don't name the static directory anything else. The name is required and is the only directory that Next.js uses for serving static assets.*/
export default () => (
	<Layout>
		<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-50GGP533HB">
				</script>
				<script dangerouslySetInnerHTML={
					{ __html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
				  
					gtag('config', 'G-50GGP533HB');
					`}
				}>
				</script>
		
		<h1 style={layoutStyle}>Welcome to my Portfolio</h1>
	    <h1 style={layoutStyle}>My name is Claire Smithard</h1>
	    <Image 
			src="/static/images/profile.jpg/" 
			thumbnail
			width={400}
			height={400} />
		<p style={layoutStyle}> I am a Digital Marketer with Front End Development skill set. I am responsible for managing our brands websites, social media, SEO and paid advertising. Coupled with this I am a keen problem solver, delving into our business and providing custom developed solutions for our teams. </p>
		
	
		
  </Layout>
)