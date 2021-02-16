//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'

const layoutStyle = {
  color: 'white',
}

export default () => (
  
  <Layout>
   <h1 style={layoutStyle}>My name is Claire Smithard</h1>
    <Image 
        src="/static/images/profile.jpg/" 
        thumbnail
        height={200}
        width={200} />
  <p style={layoutStyle}>I am a Digital Marketer with Front End Development skill set. I am responsible for managing our brands websites, social media, SEO and paid advertising. Coupled with this I am a keen problem solver, delving into our business and providing custom developed solutions for our teams. </p>
  
  <h2>Experience</h2>
    <h3 style={layoutStyle}>Digital Marketing Specialist: Smith Power Equipment - Edenvale</h3>
    <h4 style={layoutStyle}>Dec 2018 - Present</h4>
    <p style={layoutStyle}>SPE is an importer and distributer of agricultural and turf equipment. I manage our brands websites (WordPress), social media and paid advertising strategy and platforms. Coupled with this I create custom developed solutions to solve business problems using custom web development (PHP & MySOL) and integrating systems. </p>
    

    <h3>Head of Operations(Bulk Email Specialist): Sideways10up - Kempton Park </h3>
    <h4 style={layoutStyle}>Nov 2015 - Nov 2018</h4>
    <p style={layoutStyle}>S10U is a Digital Marketing Agency. I was responsible for the management and execution of the dient's email marketing campaigns (Everlytic: HTML) which included integrating social media, web development (WordPress) and customised solutions (HTML & CSS).</p>
    
    <h3>Product Support Specialist: Rocketseed - Fourways</h3>
    <h4 style={layoutStyle}>Oct 2011 - Oct 2015</h4>
    <p style={layoutStyle}>Rocketseed is an Email Marketing Agency Team leader within the Support team and was responsible for the management and execution of the dient's email marketing campaigns (Everlytic: HTML), everyday email branding (Rocketseed Signatures) and client training on platforms. </p>
    
    <h3>System Administrator: Tennis South Africa - Illovo </h3>
    <h4 style={layoutStyle}>Jan 2009 - Oct 2011</h4>		
    <p style={layoutStyle}>Management of all TSA's local tournaments administration which included managing the online entry system, payments and bank reconciliation reports. Management of the content on the TSA website. </p>		
  
  <h2>Education</h2>
    <h3>HyperionDev: Full Stack Web Developer Bootcamp</h3>
    <h4 style={layoutStyle}>Aug 2020 - Present</h4>
    <p style={layoutStyle}>HTML, CSS, Javascript, JQuery, Version Control, React, Express, Node.js, MongoDB, API. </p>
    
    <h3>Red and Yellow School: Agency Project Management </h3>
    <h4 style={layoutStyle}>Jun 2014</h4>
    <p style={layoutStyle}>Project Management, Strategy & Planning, Change Management, Quality Management, Budget Control.  </p>

    <h3>Damelin: BTech Multimedia Design & Technology</h3>
    <h4 style={layoutStyle}>Jan 2007 - Dec 2008 </h4>
    <p style={layoutStyle}>Graphic Design, Art History, Design Principles, Corporate Identity, Multimedia Design, Web Design, Animation</p>

    <h3>Willowmoore High School: Matric Certificate</h3>
    <h4 style={layoutStyle}>2006</h4>
    <p style={layoutStyle}>English, Afrikaans, Biology, History, Technical Drawing, Home Economics, Art, Dance Performance. </p>

  <h2>Skills</h2>
    <h3>Programming Languages</h3>
    <ul style={layoutStyle}>
      <li>HTML 5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
      <li>PHP</li>
      <li>WordPress</li>
    </ul>

    <h3>Skill Set</h3>
    <ul style={layoutStyle}>
      <li>Graphic Design</li>
      <li>Email Marketing</li>
      <li>SEO</li>
      <li>Google AdWords</li>
      <li>Google Analytics</li>
      <li>Google AdWords</li>
      <li>Strategy</li>
      <li>Problem Solving</li>
      <li>Solution Building </li>
    </ul>		

  <h2>Interests</h2>
    <p style={layoutStyle}>Apart from being a Digital Marketer/Web Developer I am a Dancer, Scout, Tennis Player and general busy body. I have been involved in the Guiding and Scouting Movement since I was 5 years old. I am currently a Rover with the Phoenix Rover Crew in Benoni as well as an Assistant Troop Scouter at 6th Benoni Scout Troop. I am currently on my path to complete the highest award in Scouting, the BP Award. This Movement has molded and shaped me into the citizen I am today. Along with this I have danced and played tennis from a young age. I enjoy keeping active and allowing my creative energy to play out on the dance floor.</p>
    <p style={layoutStyle}>If I am not outdoors being active I enjoy studying philosophy as well as advancing my skill set in programming. I am currently studying with HyperionDev and completing the Full Stack Web Developer Bootcamp.</p>
    <p style={layoutStyle}>	My motto in life is to "Be better". To me this means that I need to strive to do better than the day before. To work hard on my skill set and most importantly on my mind and intellect. If I strive to constantly be better everyday I can only move upwards in my life. </p>
    <h3>Hobbies & Interests</h3>
    <ul style={layoutStyle}>
      <li>Modern Dance </li>
      <li>Tennis</li>
      <li>Assistant Troop Scouter: 6th Benoni Scout Troop </li>
      <li>Rover: Phoenix Rover Crew Benoni </li>
      <li>Paintingcs</li>
      <li>Hindu Philosophy </li>
      <li>Hiking</li>
      <li>Rock Climbing </li>
      <li>Pilates</li>
      <li>Running</li>
    </ul>	
  
</Layout>
)