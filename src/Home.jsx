
import * as React from "react";
import { useEffect, useState } from "react";
import "./Home.css";
import {Link} from 'react-router-dom';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="container">
      <header className="banner">
        <nav className="navigationBar">
          <ul className="navList">
            <li className="navItem">
               Ai-Chatbot 
            </li>
            <li className="navItem">
                Mood Tracking
            </li>
            <li className="navItem">
                Self Service
            </li>
            <li className="navItem">
               <Link to="/signup">Sign Up</Link> 
            </li>
          </ul>
        </nav>
      </header>
      <div className="contentWrapper">
        <section className="heroSection">
          <div className="twoColumnLayout">
            <div className="leftColumn">
              <div className="textContent">
                <h1 className="title">InnerCalm</h1>
                <p className="description">
                  You are not alone. No matter how dark it feels, there is hope,
                  help, and people who care. Reach out—your journey to healing
                  starts today.
                </p>
              </div>
            </div>
            <div className="rightColumn">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/29a929a64d41499d6a04c5a92cebc9291e88cf49?placeholderIfAbsent=true&apiKey=5bf5d949041d43d7ae5c8c92b4ef0703"
                alt="Healing journey illustration"
                className="featureImage"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;