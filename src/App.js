import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import MyProjects from './pages/MyProjects';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/my-projects" element={<MyProjects />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
