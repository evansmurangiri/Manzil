import React from "react";
import must from "./assets/must.jpg";

const WHATSAPP_NUMBER = "254704669973";
const WHATSAPP_MESSAGE = "I want to know about Manzil Residences";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  html, body{
    background: #0a0d0a;
    margin: 0;
    overflow-x: hidden;
    width: 100%;
  }

  .manzil-root{
    --bg-black: #0a0d0a;
    --lime: #d4ff3d;
    --blue: #6fe0f5;
    --card-bg: rgba(13,17,14,0.92);
    --card-border: rgba(255,255,255,0.1);
    --text-white: #ffffff;
    --text-dim: #c9cdc6;

    position: relative;
    isolation: isolate;
    background: transparent;
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: var(--text-white);
    min-height: 100vh;
    overflow-x: hidden;
  }

  .manzil-root *{ margin:0; padding:0; box-sizing:border-box; }

  .bg-fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .bg-fixed::after{
    content:"";
    position:absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 30%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.8) 100%);
  }

  .topbar-accent{
    position: fixed; top:0; left:0; right:0; height:3px;
    background: linear-gradient(90deg, #ff6fae, #ff9ad6, #ffd1ea);
    z-index: 50;
    opacity: 0.85;
  }

  .manzil-nav{
    position: sticky; top:0; z-index: 10;
    display:flex; align-items:center; justify-content:space-between;
    flex-wrap: wrap;
    gap: 12px;
    padding: 28px 64px;
  }
  .manzil-logo{
    display:flex; align-items:center; gap:10px;
    font-weight: 800; font-size: 1.25rem; line-height: 1.75rem; letter-spacing: -0.02em;
  }
  .manzil-nav-link{
    display:flex; align-items:center; gap:8px;
    color: var(--lime);
    font-weight: 600; font-size: 1rem; line-height: 1.5rem;
    text-decoration:none;
    cursor:pointer;
    background:none; border:none;
  }
  a.btn-blue, a.btn-lime{
    text-decoration: none;
  }

  .manzil-hero{
    padding: 90px 64px 120px;
    text-align:center;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .manzil-hero h1{
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 28px;
    text-shadow: 0 2px 24px rgba(0,0,0,0.55);
  }
  .manzil-hero p.sub{
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #eceee9;
    font-weight: 500;
    max-width: 820px;
    margin: 0 auto 56px;
    text-shadow: 0 2px 16px rgba(0,0,0,0.5);
  }
  .manzil-hero p.sub .accent{ color: var(--lime); font-weight: 700; }

  .founder-card{
    max-width: 620px;
    margin: 0 auto;
    background: rgba(13,17,14,0.92);
    border: 1px solid var(--card-border);
    border-radius: 24px;
    padding: 40px 48px 44px;
    backdrop-filter: blur(8px);
  }
  .founder-card h3{
    font-size: 1.5rem; line-height: 2rem; font-weight: 800; margin-bottom: 18px;
  }
  .founder-card p{
    color: var(--text-dim); font-size: 1rem; line-height: 1.5rem; font-weight: 500;
    margin-bottom: 30px;
  }
  .btn-blue{
    display:inline-flex; align-items:center; gap:10px;
    background: var(--blue);
    color: #052c33;
    font-weight: 700; font-size: 1rem; line-height: 1.5rem;
    padding: 16px 32px;
    border-radius: 50px;
    border:none; cursor:pointer;
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .btn-blue:hover{ transform: translateY(-2px); box-shadow: 0 10px 30px rgba(111,224,245,0.25); }

  .manzil-approach{
    padding: 60px 64px 30px;
    text-align:center;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .manzil-approach h2{
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 800;
    margin-bottom: 56px;
    letter-spacing: -0.01em;
    text-shadow: 0 2px 20px rgba(0,0,0,0.55);
  }
  .approach-grid{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin-bottom: 90px;
  }
  .approach-card{
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    padding: 40px 32px;
    text-align:center;
    backdrop-filter: blur(8px);
  }
  .icon-circle{
    width:64px; height:64px;
    border-radius:50%;
    background: rgba(255,255,255,0.06);
    display:flex; align-items:center; justify-content:center;
    margin: 0 auto 26px;
    color: var(--lime);
  }
  .approach-card h3{
    font-size: 1.25rem; line-height: 1.75rem; font-weight: 700; margin-bottom: 14px;
  }
  .approach-card p{
    color: var(--text-dim); font-size: 0.875rem; line-height: 1.25rem; font-weight: 500;
  }

  .section-title{
    text-align:center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 800;
    letter-spacing: -0.01em;
    margin-bottom: 60px;
    text-shadow: 0 2px 20px rgba(0,0,0,0.55);
  }
  .section-title .lime-text{ color: var(--lime); }

  .manzil-projects{
    padding: 20px 64px 100px;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .projects-grid{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  .project-card{
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 22px;
    overflow:hidden;
    display:flex; flex-direction:column;
    backdrop-filter: blur(8px);
  }
  .project-card .img{
    width:100%; height: 220px;
    background-size: cover; background-position:center;
  }
  .project-card .content{
    padding: 28px 26px 30px;
    display:flex; flex-direction:column; flex:1;
  }
  .project-card h3{
    font-size: 1.5rem; line-height: 2rem; font-weight: 800; margin-bottom: 14px;
  }
  .project-card p{
    color: var(--text-dim); font-size: 0.875rem; line-height: 1.25rem; font-weight: 500;
    margin-bottom: 22px;
  }
  .project-card .completion{
    font-size: 0.875rem; line-height: 1.25rem; font-weight: 700; margin-bottom: 22px;
  }
  .project-card .completion span{
    color: var(--text-dim); font-weight: 600;
  }
  .btn-lime{
    margin-top:auto;
    background: var(--lime);
    color: #11220a;
    font-weight: 800; font-size: 1rem; line-height: 1.5rem;
    padding: 16px;
    border-radius: 12px;
    border:none; cursor:pointer; text-align:center;
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .btn-lime:hover{ transform: translateY(-2px); box-shadow: 0 10px 25px rgba(212,255,61,0.25); }

  .manzil-footer{
    text-align:center;
    padding: 30px 0 50px;
    color: var(--text-dim);
    font-size: 0.875rem; line-height: 1.25rem;
    font-weight: 500;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 900px){
    .manzil-nav{ padding: 22px 24px; }
    .manzil-hero{ padding: 60px 24px 80px; }
    .founder-card{ padding: 32px 26px; }
    .manzil-approach{ padding: 40px 24px 0; }
    .approach-grid{ grid-template-columns: 1fr; gap:20px; margin-bottom: 60px; }
    .manzil-projects{ padding: 0 24px 70px; }
    .projects-grid{ grid-template-columns: 1fr; gap:20px; }
    .btn-blue, .btn-lime{ width: 100%; justify-content:center; }
  }

  @media (max-width: 480px){
    .manzil-nav{ padding: 18px 18px; }
    .manzil-logo{ font-size: 1.125rem; }
    .manzil-nav-link{ font-size: 0.9rem; }
    .manzil-hero{ padding: 44px 18px 56px; }
    .manzil-hero h1{ font-size: 1.85rem; line-height: 2.15rem; }
    .manzil-hero p.sub{ margin-bottom: 36px; }
    .founder-card{ padding: 26px 20px 30px; border-radius: 18px; }
    .founder-card h3{ font-size: 1.25rem; line-height: 1.75rem; }
    .manzil-approach{ padding: 32px 18px 0; }
    .manzil-approach h2{ margin-bottom: 36px; }
    .approach-card{ padding: 28px 22px; }
    .section-title{ margin-bottom: 36px; }
    .manzil-projects{ padding: 0 18px 56px; }
    .project-card .img{ height: 180px; }
    .project-card .content{ padding: 22px 20px 24px; }
    .btn-blue, .btn-lime{ padding: 14px 20px; }
  }
`;

const ChatIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const PeopleIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const SparkleLogo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 2 L14 9 L21 11 L14 13 L12 20 L10 13 L3 11 L10 9 Z" fill="#d4ff3d" />
  </svg>
);

const projects = [
  {
    name: "Isolana Residences",
    desc: "Limited collection of just 71 units, designed by LA's iconic architect Tony Ashai. Amenities include a 55-meter infinity pool, Zen garden, open-to-sky indoor courtyard.",
    completion: "Q1 2027",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Mackerel Tower",
    desc: "Located beside Dubai Island's only school, hospital and entrance to the islands. 14 amenities include Zen Garden, BBQ Area, Rooftop Garden, Swimming pool.",
    completion: "Q3 2026",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Ayamore Residences",
    desc: "Direct marina dock access with panoramic marina views. 16 unique amenities including a rooftop infinity pool, cocktail lounge, kids pool, and outdoor cinema.",
    completion: "Q1 2027",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=900&auto=format&fit=crop",
  },
];

const approachItems = [
  {
    icon: <ChatIcon size={26} />,
    title: "Personalized Discovery",
    desc: "We begin by understanding your goals. Every proposal starts with your needs at the center.",
  },
  {
    icon: <PeopleIcon />,
    title: "Insight-Led Opportunities",
    desc: "We help you identify high-potential, value-driven properties — not just what's trending.",
  },
  {
    icon: <PhoneIcon />,
    title: "End-to-End Support",
    desc: "We handle everything so you can focus on making the right decision, not managing the process.",
  },
];

export default function ManzilLanding() {
  return (
    <div className="manzil-root">
      <style>{styles}</style>
      <div className="bg-fixed" style={{ backgroundImage: `url(${must})` }}></div>
      <div className="topbar-accent"></div>

      <nav className="manzil-nav">
        <div className="manzil-logo">
          <SparkleLogo />
          Manzil
        </div>
        <a className="manzil-nav-link" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <ChatIcon />
          Contact Us
        </a>
      </nav>

      <section className="manzil-hero">
        <h1>Navigating Dubai's Finest Communities</h1>
        <p className="sub">
          Find your <span className="accent">perfect investment</span> in Dubai real estate with
          our expertise. We guide you through the entire process, from discovery to transaction
          completion.
        </p>

        <div className="founder-card">
          <h3>Built by 2x tech-founder</h3>
          <p>
            Real estate backed by tech-first thinking. Built by a founder who's scaled products
            for over a decade — we bring data, transparency, and efficiency to your property
            investment journey.
          </p>
          <a className="btn-blue" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <ChatIcon />
            Contact the founder
          </a>
        </div>
      </section>

      <section className="manzil-approach">
        <h2>Our Comprehensive Approach</h2>
        <div className="approach-grid">
          {approachItems.map((item) => (
            <div className="approach-card" key={item.title}>
              <div className="icon-circle">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="section-title">
          <span className="lime-text">Handpicked Projects</span> for You
        </h2>
      </section>

      <section className="manzil-projects">
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.name}>
              <div className="img" style={{ backgroundImage: `url('${p.img}')` }}></div>
              <div className="content">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="completion">
                  <span>Completion by:</span> {p.completion}
                </div>
                <a className="btn-lime" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Get Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="manzil-footer">© 2026 Manzil • Dubai Real Estate</footer>
    </div>
  );
}