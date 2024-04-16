import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
// import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Footer from '../Footer/Footer';

const Home = () => (
    
        <div>
            <Header />
            <main>
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            {/* <ScrollToTop /> */}
            <Footer />
        </div>
  
);

export default Home;
