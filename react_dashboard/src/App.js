import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

// const Sidebar = styled.aside`
//   width: 200px;
//   background-color: #2c3e50;
//   padding: 1em;
//   color: white;
//   box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
// `;

const Content = styled.div`
  flex-grow: 1;
`;

const Header = styled.header`
  background-color: #3498db;
  color: white;
  padding: 1em;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// const Navigation = styled.nav`
//   background-color: #2c3e50;
//   padding: 0.5em;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const NavigationList = styled.ul`
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
// `;

// const NavigationItem = styled.li`
//   margin-bottom: 0.5em;
// `;

// const NavLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   transition: color 0.3s ease-in-out;

//   &:hover {
//     color: #ecf0f1;
//   }
// `;

const Main = styled.main`
  margin-top: 1em;
`;

const PageContent = styled(animated.div)`
  padding: 2em;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  h2 {
    color: #3498db;
    margin-bottom: 1em;
  }

  p {
    color: #666;
    line-height: 1.6;
  }

  a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: #2980b9;
  }
`;

const StyledSidebar = styled.div`
  height: 100%;
  width: ${(props) => (props.collapsed ? '30px' : '200px')};
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  margin: 5px 0;
  border-radius: 5px;
  transition: background-color 0.3s;
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  &:hover {
    background-color: #555;
  }
`;

const SidebarToggle = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: ${(props) => (props.collapsed ? '10px' : '170px')};
  transition: 0.5s;
  color: #fff;
`;

const SidebarLinks = styled.div`
display: ${(props) => (props.collapsed ? 'none' : 'block')};
flex-direction: column;
align-items: center;
padding: 10px;
margin: 20px;
`;

const SidebarLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  transition: background-color 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: #555;
  }
`;

const ContentWrapper = styled.div`
  margin-left: ${(props) => (props.collapsed ? '60px' : '200px')};
  padding: 15px;
  transition: 0.3s;
`;

const Home = () => {
  const fadeInUpAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: config.wobbly,
  });
  return (
    <PageContent style={fadeInUpAnimation}>
    <h2>Welcome to the Home Page</h2>
    
    <p>
      Explore our website to discover innovative solutions and exciting projects.
      Our team is dedicated to delivering high-quality web applications to meet
      your business needs.
    </p>
    <p>
      Featured Services:
      <ul>
        <li>Web Development</li>
        <li>UI/UX Design</li>
        <li>Mobile App Development</li>
      </ul>
    </p>
  </PageContent>
);
  };

const About = () =>  {
  const fadeInUpAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: config.wobbly,
  });
  return (
    <PageContent style={fadeInUpAnimation}>
    <h2>About Us</h2>
    <p>
      We are a dynamic team of professionals passionate about creating exceptional
      web experiences. With a focus on innovation and collaboration, we strive
      to exceed expectations and deliver outstanding results.
    </p>
    <p>
      Our Core Values:
      <ul>
        <li>Innovation</li>
        <li>Collaboration</li>
        <li>Excellence</li>
      </ul>
    </p>
  </PageContent>
);
  };

const Contact = () => {
  const fadeInUpAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: config.wobbly,
  });
  return (
    <PageContent style={fadeInUpAnimation}>
    <h2>Contact Us</h2>
    <p>
      We would love to hear from you! Contact our team for inquiries, feedback,
      or project collaborations. Your satisfaction is our top priority.
    </p>
    <p>
      Contact Information:
      <ul>
        <li>Email: info@example.com</li>
        <li>Phone: +1 (123) 456-7890</li>
      </ul>
    </p>
    <p>
      Connect with us on social media:
      <ul>
        <li><a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://linkedin.com/company/example" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/example" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </p>
  </PageContent>
);
  };

  const App = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    const handleToggleSidebar = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <Router>
        <StyledSidebar collapsed={collapsed}>
          <SidebarToggle onClick={handleToggleSidebar} collapsed={collapsed}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </SidebarToggle>
          <SidebarLinks collapsed={collapsed}>
          {/* Add your sidebar links here */}
          <SidebarLink to="/">Home</SidebarLink>
          <SidebarLink to="/about">About</SidebarLink>
          <SidebarLink to="/contact">Contact</SidebarLink>
        </SidebarLinks>
      </StyledSidebar>
        <ContentWrapper collapsed={collapsed}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ContentWrapper>
      </Router>
    );
  };
  
  export default App;
