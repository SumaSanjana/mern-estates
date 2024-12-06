import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about">
      {/* Image Container */}
      <div className="imgContainer">
        <img src="/bg.png" alt="About Us Background" />
      </div>

      {/* Scrollable Text Content Container */}
      <div className="contentContainer">
        <div className="scrollableContent">
          <h1>About Us</h1>
          <p>
            Welcome to our real estate platform! We are dedicated to connecting buyers, sellers, 
            and renters with their dream properties. Whether you're searching for a cozy home, 
            a luxurious estate, or a commercial space, we are here to guide you every step of the way.
          </p>

          <section>
            <h2>Our Mission</h2>
            <p>
              Our mission is to make property transactions simple, transparent, and accessible. 
              We strive to empower our clients with the tools and resources needed to make informed 
              real estate decisions.
            </p>
          </section>

          <section>
            <h2>Our Vision</h2>
            <p>
              We envision a world where everyone can find a property that feels like home. 
              By leveraging innovative technology and a client-centric approach, 
              we aim to redefine the real estate experience.
            </p>
          </section>

          <section>
            <h2>Our Values</h2>
            <ul>
              <li><strong>Integrity:</strong> Building trust through transparency and honesty.</li>
              <li><strong>Excellence:</strong> Delivering exceptional service and support.</li>
              <li><strong>Innovation:</strong> Embracing technology to simplify real estate transactions.</li>
              <li><strong>Community:</strong> Creating positive impacts in the neighborhoods we serve.</li>
            </ul>
          </section>

          <section>
            <h2>Our Services</h2>
            <p>
              We offer a wide range of services to meet your real estate needs, including:
            </p>
            <ul>
              <li>Buying and selling residential properties</li>
              <li>Rental property listings and management</li>
              <li>Commercial real estate services</li>
              <li>Market analysis and property valuation</li>
              <li>Guidance for first-time homebuyers</li>
            </ul>
          </section>

          <section>
            <h2>Why Choose Us?</h2>
            <p>
              With years of experience in the industry, a dedicated team of professionals, 
              and an extensive network of listings, we are uniquely positioned to help you achieve your real estate goals. 
              Your satisfaction is our priority, and we are committed to delivering results that exceed expectations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
