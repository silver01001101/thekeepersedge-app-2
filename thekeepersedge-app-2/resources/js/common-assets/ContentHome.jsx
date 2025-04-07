import React, { useEffect } from 'react';
import '../common-assets/contentHome.css';
// import footballer from "../assets/footballer.json"; // Your Lottie animation JSON
import insta from "./assets/insta.png"; // Instagram image
import youtube from "./assets/youtube.png"; // YouTube image
import snap from "./assets/snap.png";
import facebook from "./assets/facebook.png";
import { Link } from "react-router-dom";
import Aurora from './aurora-effect.jsx';
import SpotlightCard from '../common-assets/cardeffect'
import SplitText from "../common-assets/split.jsx";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};




const HomePage = () => {
  // Load TikTok embed script when the component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (


    <div className="home-page">
      <div className='aurora-wrapper'>
        <Aurora colorStops={["#000000", "#BC9C22", "#FFF3C7"]} speed={0.5} />
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
        <SplitText
      text="The Keepers Edge"
      className="text-2xl font-semibold text-center"
      delay={150}
      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
      easing="easeOutCubic"
      threshold={0.2}
      rootMargin="-50px"
      onLetterAnimationComplete={handleAnimationComplete}
  />
          <p>Creating champions with every save.</p>
          <Link className='book-button' to="/bookings">Book Now</Link>
        </div>
        <div className="review-container">
          <div className="review-card">
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <p>"The Keepers Edge goalkeeping programme not only improves your skill but is engaging at the same time. The coach is great at what he does and patient with all skill sets. Amazing sessions, definitely recommend."</p>
              <span>- Dawid, Goalkeeper</span>
              <br />
              <div className="rating">⭐⭐⭐⭐⭐</div>
            </SpotlightCard>

          </div>
          <div className="review-card">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">

            <p>"Fantastic coaching, really focused on technique and mental toughness. A game-changer for any goalkeeper looking to improve their skills, no matter age or skill set."</p>
            <span>- Anonymous, Goalkeeper</span>
            <br />
            <div className="rating">⭐⭐⭐⭐⭐</div>
          </SpotlightCard>
          </div>
          <div className="review-card">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p>"Marco is an energetic, dedicated and patient coach who adapts his approach to suit each players level, ability and maturity. His tailored coaching style has made a real difference."</p>
            <span>- Dolyanna, Goalkeeper Parent</span>
            <br />
            <div className="rating">⭐⭐⭐⭐⭐</div>
          </SpotlightCard>

          </div>
          <div className="review-card">
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <p>"Since my 8 year old son began goalkeeper training with The Keepers Edge, his confidence and skills have improved significantly - even with the first few sessions."</p>
            <span>- Anonymous, Goalkeeper</span>
            <br />
            <div className="rating">⭐⭐⭐⭐⭐</div>
          </SpotlightCard>

          </div>
        </div>
      </section>


      {/* Social Media Section */}
      <section className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/thekeepersedgecoaching/"
            className="footer-links"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="instalogo" src={insta} alt="Instagram" />
          </a>
          <a
            href="https://www.youtube.com/@TheKeepersEdgeCoaching"
            className="footer-links"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="instalogo" src={youtube} alt="YouTube" />
          </a>
          <a
            href="https://www.snapchat.com/add/thekeepersedge"
            className="footer-links"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="instalogo" src={snap} alt="Snapchat" />
          </a>
          <a
            href="https://www.facebook.com/people/Marco-Cavedaschi/pfbid0eo91CREDn2Q7t2XVqrW2XUqV7u45VWWJ3s9Q7jnzkVPw7jpvK4L7eJJo84VmSm5Jl/?mibextid=wwXIfr&rdid=mOPE4mgEEDBjvGHj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Dwsd27mbc%2F%3Fmibextid%3DwwXIfr"
            className="footer-links"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="instalogo" src={facebook} alt="Facebook" />
          </a>
        </div>
      </section>

      {/* TikTok Embed Section */}
      <section className="tiktok-videos">
  <h2>Check Out Our Latest TikToks</h2>
  <div className="tiktok-container">
    {/* TikTok Embed 1 */}
    <div className="tiktok-embed-wrapper">
  <blockquote
    className="tiktok-embed"
    cite="https://www.tiktok.com/@thekeepersedgecoaching/video/7443806602911698208"
    data-video-id="7443806602911698208"
  >
    <section>
      <a
        target="_blank"
        title="@thekeepersedgecoaching"
        href="https://www.tiktok.com/@thekeepersedgecoaching?refer=embed"
      >
        @thekeepersedgecoaching
      </a>
    </section>
  </blockquote>
</div>


    {/* TikTok Embed 2 */}
    <div className="tiktok-embed-wrapper">
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@thekeepersedgecoaching/video/7440541041402465568"
        data-video-id="7440541041402465568"
      >
        <section>
          <a
            target="_blank"
            title="@thekeepersedgecoaching"
            href="https://www.tiktok.com/@thekeepersedgecoaching?refer=embed"
          >
            @thekeepersedgecoaching
          </a>
        </section>
      </blockquote>
    </div>
  </div>
</section>

      {/* YouTube Shorts Section */}
      <section className="youtube-shorts">
        <h2></h2>
        <div className="shorts-container"></div>
      </section>
    </div>
  );
};

export default HomePage;
