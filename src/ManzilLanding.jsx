import React, { useEffect, useRef, useState } from "react";
import must from "./assets/must.jpg";

const WHATSAPP_NUMBER = "254704669973";
const WHATSAPP_MESSAGE = "I want to know about Asya Consulting Residences";
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
    top: 0; left: 0; right: 0; bottom: 0;
    width: 100vw; height: 100vh;
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

  /* NAV */
  .manzil-nav{
    position: fixed;
    top: 0; left: 0; right: 0;
    width: 100%;
    z-index: 10;
    display: flex; align-items: center; justify-content: space-between;
    padding: 28px 64px;
    background: rgba(10, 13, 10, 0.82);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 8px 30px rgba(0,0,0,0.35);
  }
  .manzil-logo{
    display:flex; align-items:center; gap:10px;
    font-weight: 800; font-size: 1.25rem; line-height: 1.75rem; letter-spacing: -0.02em;
    z-index: 11;
  }
  .manzil-nav-menu{
    display:flex; align-items:center; gap: 36px;
  }
  .manzil-nav-item{
    color: var(--text-white);
    font-weight: 600; font-size: 1rem; line-height: 1.5rem;
    text-decoration:none;
    opacity: 0.85;
    transition: opacity .2s ease, color .2s ease;
  }
  .manzil-nav-item:hover{ opacity:1; color: var(--lime); }
  .manzil-nav-link{
    display:flex; align-items:center; gap:8px;
    color: var(--lime);
    font-weight: 600; font-size: 1rem; line-height: 1.5rem;
    text-decoration:none;
    cursor:pointer;
    background:none; border:none;
  }
  a.btn-lime{ text-decoration: none; }

  /* HAMBURGER BUTTON */
  .hamburger-btn{
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 44px; height: 44px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 10px;
    cursor: pointer;
    z-index: 11;
    transition: background .2s ease;
    padding: 0;
  }
  .hamburger-btn:hover{ background: rgba(255,255,255,0.1); }
  .hamburger-bar{
    width: 20px; height: 2px;
    background: var(--text-white);
    border-radius: 2px;
    transition: transform .3s ease, opacity .3s ease;
    transform-origin: center;
  }
  .hamburger-btn.open .hamburger-bar:nth-child(1){ transform: translateY(7px) rotate(45deg); }
  .hamburger-btn.open .hamburger-bar:nth-child(2){ opacity: 0; transform: scaleX(0); }
  .hamburger-btn.open .hamburger-bar:nth-child(3){ transform: translateY(-7px) rotate(-45deg); }

  /* MOBILE DRAWER */
  .mobile-drawer{
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 9;
    background: rgba(10,13,10,0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding: 0 18px 32px;
    transform: translateY(-100%);
    transition: transform .35s cubic-bezier(.4,0,.2,1);
  }
  .mobile-drawer.open{
    transform: translateY(0);
  }
  .mobile-drawer-inner{
    display: flex; flex-direction: column; gap: 4px;
    padding-top: 16px;
  }
  .mobile-nav-item{
    color: var(--text-white);
    font-weight: 600; font-size: 1.1rem;
    text-decoration: none;
    padding: 14px 4px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    display: flex; align-items: center; justify-content: space-between;
    opacity: 0.9;
    transition: color .2s ease, opacity .2s ease;
  }
  .mobile-nav-item:last-child{ border-bottom: none; }
  .mobile-nav-item:hover{ color: var(--lime); opacity: 1; }
  .mobile-nav-cta{
    margin-top: 18px;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    background: var(--lime);
    color: #11220a;
    font-weight: 800; font-size: 1rem;
    padding: 16px;
    border-radius: 12px;
    text-decoration: none;
    transition: transform .2s ease;
  }
  .mobile-nav-cta:hover{ transform: translateY(-2px); }

  /* HERO */
  .manzil-hero{
    padding: 90px 64px 120px;
    text-align:center;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .manzil-hero h1{
    font-size: 2.25rem; line-height: 2.5rem; font-weight: 800;
    letter-spacing: -0.02em; margin-bottom: 28px;
    text-shadow: 0 2px 24px rgba(0,0,0,0.55);
  }
  .manzil-hero p.sub{
    font-size: 1.125rem; line-height: 1.75rem;
    color: #eceee9; font-weight: 500;
    max-width: 820px; margin: 0 auto 56px;
    text-shadow: 0 2px 16px rgba(0,0,0,0.5);
  }
  .manzil-hero p.sub .accent{ color: var(--lime); font-weight: 700; }

  /* APPROACH */
  .manzil-approach{
    padding: 60px 64px 30px;
    text-align:center; max-width: 1300px; margin: 0 auto;
    position: relative; z-index: 1;
  }
  .manzil-approach h2{
    font-size: 1.5rem; line-height: 2rem; font-weight: 800;
    margin-bottom: 56px; letter-spacing: -0.01em;
    text-shadow: 0 2px 20px rgba(0,0,0,0.55);
  }
  .approach-grid{
    display:grid; grid-template-columns: repeat(3, 1fr);
    gap: 28px; margin-bottom: 90px;
  }
  .approach-card{
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px; padding: 40px 32px;
    text-align:center; backdrop-filter: blur(8px);
  }
  .icon-circle{
    width:64px; height:64px; border-radius:50%;
    background: rgba(255,255,255,0.06);
    display:flex; align-items:center; justify-content:center;
    margin: 0 auto 26px; color: var(--lime);
  }
  .approach-card h3{ font-size: 1.25rem; line-height: 1.75rem; font-weight: 700; margin-bottom: 14px; }
  .approach-card p{ color: var(--text-dim); font-size: 0.875rem; line-height: 1.25rem; font-weight: 500; }

  .section-title{
    text-align:center; font-size: 1.5rem; line-height: 2rem;
    font-weight: 800; letter-spacing: -0.01em; margin-bottom: 60px;
    text-shadow: 0 2px 20px rgba(0,0,0,0.55);
  }
  .section-title .lime-text{ color: var(--lime); }

  /* PROJECTS */
  .manzil-projects{
    padding: 20px 64px 100px;
    max-width: 1300px; margin: 0 auto;
    position: relative; z-index: 1;
  }
  .projects-grid{
    display:grid; grid-template-columns: repeat(3, 1fr); gap: 28px;
  }
  .project-card{
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 22px; overflow:hidden;
    display:flex; flex-direction:column;
    backdrop-filter: blur(8px);
  }
  .project-card .img{ width:100%; height: 220px; background-size: cover; background-position:center; }
  .project-card .content{ padding: 28px 26px 30px; display:flex; flex-direction:column; flex:1; }
  .project-card h3{ font-size: 1.5rem; line-height: 2rem; font-weight: 800; margin-bottom: 14px; }
  .project-card p{ color: var(--text-dim); font-size: 0.875rem; line-height: 1.25rem; font-weight: 500; margin-bottom: 22px; }
  .project-card .completion{ font-size: 0.875rem; line-height: 1.25rem; font-weight: 700; margin-bottom: 22px; }
  .project-card .completion span{ color: var(--text-dim); font-weight: 600; }
  .btn-lime{
    margin-top:auto;
    background: var(--lime); color: #11220a;
    font-weight: 800; font-size: 1rem; line-height: 1.5rem;
    padding: 16px; border-radius: 12px;
    border:none; cursor:pointer; text-align:center;
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .btn-lime:hover{ transform: translateY(-2px); box-shadow: 0 10px 25px rgba(212,255,61,0.25); }

  /* ===== TESTIMONIALS ===== */
  .manzil-testimonials{
    padding: 20px 64px 100px;
    max-width: 1300px; margin: 0 auto;
    position: relative; z-index: 1;
  }

  /* Trustpilot strip */
  .trustpilot-strip{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
    flex-wrap: wrap;
    background: rgba(13,17,14,0.85);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 28px 40px;
    margin-bottom: 56px;
    backdrop-filter: blur(8px);
  }
  .tp-logo{
    display: flex; align-items: center; gap: 10px;
  }
  .tp-logo-mark{
    background: #00b67a;
    border-radius: 6px;
    width: 36px; height: 36px;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .tp-logo-text{
    font-size: 1.125rem; font-weight: 800; letter-spacing: -0.01em;
  }
  .tp-divider{
    width: 1px; height: 40px;
    background: rgba(255,255,255,0.12);
  }
  .tp-score-block{
    display: flex; flex-direction: column; align-items: center; gap: 4px;
  }
  .tp-score-number{
    font-size: 2rem; font-weight: 800; line-height: 1; color: #00b67a;
  }
  .tp-score-label{
    font-size: 0.75rem; font-weight: 600; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.08em;
  }
  .tp-stars-row{
    display: flex; gap: 4px;
  }
  .tp-star{
    width: 28px; height: 28px; border-radius: 4px;
    background: #00b67a;
    display: flex; align-items: center; justify-content: center;
  }
  .tp-star svg{ display: block; }
  .tp-reviews-text{
    font-size: 0.875rem; font-weight: 600; color: var(--text-dim); text-align: center;
  }
  .tp-reviews-text strong{ color: var(--text-white); }
  .tp-badge{
    display: flex; align-items: center; gap: 6px;
    background: rgba(0,182,122,0.12);
    border: 1px solid rgba(0,182,122,0.3);
    border-radius: 100px;
    padding: 6px 14px;
    font-size: 0.8rem; font-weight: 700; color: #00b67a;
  }

  /* Testimonial cards */
  .testimonials-grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .testimonial-card{
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    padding: 30px 28px;
    backdrop-filter: blur(8px);
    display: flex; flex-direction: column; gap: 18px;
    position: relative;
    overflow: hidden;
    transition: border-color .25s ease, transform .25s ease;
  }
  .testimonial-card:hover{
    border-color: rgba(212,255,61,0.25);
    transform: translateY(-4px);
  }
.testimonial-card::before{
    content: "“";
    position: absolute;
    top: -12px;
    right: 22px;
    font-size: 8rem;
    line-height: 1;
    font-weight: 800;
    color: rgba(212,255,61,0.07);
    pointer-events: none;
    font-family: Georgia, serif;
}
  .tc-stars{
    display: flex; gap: 3px;
  }
  .tc-star{
    color: #00b67a; font-size: 1rem;
  }
  .tc-text{
    font-size: 0.9375rem; line-height: 1.65rem;
    color: #dce0d8; font-weight: 500;
    flex: 1;
  }
  .tc-person{
    display: flex; align-items: center; gap: 12px;
    padding-top: 16px;
    border-top: 1px solid rgba(255,255,255,0.07);
  }
  .tc-avatar{
    width: 42px; height: 42px; border-radius: 50%;
    background: linear-gradient(135deg, rgba(212,255,61,0.2), rgba(212,255,61,0.05));
    border: 1px solid rgba(212,255,61,0.25);
    display: flex; align-items: center; justify-content: center;
    font-weight: 800; font-size: 0.875rem; color: var(--lime);
    flex-shrink: 0;
  }
  .tc-name{ font-weight: 700; font-size: 0.9375rem; margin-bottom: 2px; }
  .tc-meta{ font-size: 0.8125rem; color: var(--text-dim); font-weight: 500; }
  .tc-flag{ font-size: 1rem; }
  .tc-verified{
    margin-left: auto;
    display: flex; align-items: center; gap: 4px;
    background: rgba(0,182,122,0.1);
    border: 1px solid rgba(0,182,122,0.2);
    border-radius: 100px;
    padding: 3px 10px;
    font-size: 0.7rem; font-weight: 700; color: #00b67a;
    flex-shrink: 0;
  }

  /* FOOTER */
  .manzil-footer{
    text-align:center;
    padding: 30px 0 50px;
    color: var(--text-dim);
    font-size: 0.875rem; line-height: 1.25rem;
    font-weight: 500;
    position: relative; z-index: 1;
  }

  /* RESPONSIVE */
  @media (max-width: 900px){
    .manzil-nav{ padding: 22px 24px; }
    .manzil-nav-menu{ display: none; }
    .hamburger-btn{ display: flex; }
    .mobile-drawer{ display: block; padding-top: 0; }
    .manzil-hero{ padding: 60px 24px 80px; }
    .manzil-approach{ padding: 40px 24px 0; }
    .approach-grid{ grid-template-columns: 1fr; gap:20px; margin-bottom: 60px; }
    .manzil-projects{ padding: 0 24px 70px; }
    .projects-grid{ grid-template-columns: 1fr; gap:20px; }
    .btn-lime{ width: 100%; justify-content:center; }
    .manzil-testimonials{ padding: 0 24px 70px; }
    .testimonials-grid{ grid-template-columns: 1fr; gap: 20px; }
    .trustpilot-strip{ gap: 20px; padding: 22px 24px; }
    .tp-divider{ display: none; }
  }

  @media (max-width: 480px){
    .manzil-nav{ padding: 18px 18px; }
    .manzil-logo{ font-size: 1.125rem; }
    .manzil-hero{ padding: 44px 18px 56px; }
    .manzil-hero h1{ font-size: 1.85rem; line-height: 2.15rem; }
    .manzil-hero p.sub{ margin-bottom: 36px; }
    .manzil-approach{ padding: 32px 18px 0; }
    .manzil-approach h2{ margin-bottom: 36px; }
    .approach-card{ padding: 28px 22px; }
    .section-title{ margin-bottom: 36px; }
    .manzil-projects{ padding: 0 18px 56px; }
    .project-card .img{ height: 180px; }
    .project-card .content{ padding: 22px 20px 24px; }
    .btn-lime{ padding: 14px 20px; }
    .manzil-testimonials{ padding: 0 18px 56px; }
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

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const TpStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00b67a" strokeWidth="3">
    <path d="M20 6L9 17l-5-5" />
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

const testimonials = [
  {
    initials: "AO",
    name: "Amina Osei",
    meta: "Investor · Nairobi",
    flag: "🇰🇪",
    stars: 5,
    text: "Asya Consulting made my first Dubai investment seamless from start to finish. They matched me with Isolana Residences before it was even on the market. Truly remarkable service.",
  },
  {
    initials: "MS",
    name: "Mohammed Al-Sharif",
    meta: "Property Buyer · Dubai",
    flag: "🇦🇪",
    stars: 5,
    text: "The team's local knowledge is unmatched. I was guided through every legal and financial step with total transparency. My Ayamore unit exceeded every expectation — worth every shilling.",
  },
  {
    initials: "CW",
    name: "Charlotte Webb",
    meta: "Portfolio Investor · London",
    flag: "🇬🇧",
    stars: 5,
    text: "I've worked with real estate consultants across three continents. Asya stands out for their integrity and speed. Two portfolio additions in one trip — phenomenal results.",
  },
  {
    initials: "JN",
    name: "James Njoroge",
    meta: "First-time Buyer · Mombasa",
    flag: "🇰🇪",
    stars: 5,
    text: "I was nervous about investing internationally. The Asya team walked me through every detail, answered my calls at all hours, and I closed on Mackerel Tower feeling 100% confident.",
  },
  {
    initials: "FD",
    name: "Fatou Diallo",
    meta: "Diaspora Investor · Paris",
    flag: "🇫🇷",
    stars: 5,
    text: "As an African diaspora investor, finding trustworthy guidance for Dubai real estate felt impossible — until Asya. Professional, warm, and incredibly knowledgeable.",
  },
  {
    initials: "RP",
    name: "Ravi Patel",
    meta: "Developer · Mumbai",
    flag: "🇮🇳",
    stars: 5,
    text: "Referred two business partners already. The attention to detail in property selection and the post-purchase support is unlike anything I've encountered in this market.",
  },
];

const StarRow = ({ count = 5 }) => (
  <div className="tc-stars">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="tc-star">★</span>
    ))}
  </div>
);

const ProjectsGrid = () => (
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
);

const Testimonials = () => (
  <section className="manzil-testimonials">
    <h2 className="section-title">
      Trusted by <span className="lime-text">Investors Worldwide</span>
    </h2>

    {/* Trustpilot strip */}
    <div className="trustpilot-strip">
      <div className="tp-logo">
        <div className="tp-logo-mark">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <span className="tp-logo-text">Trustpilot</span>
      </div>

      <div className="tp-divider"></div>

      <div className="tp-score-block">
        <div className="tp-score-number">4.9</div>
        <div className="tp-score-label">Overall Score</div>
      </div>

      <div className="tp-stars-row">
        {[1,2,3,4,5].map(i => (
          <div className="tp-star" key={i}><TpStar /></div>
        ))}
      </div>

      <div className="tp-divider"></div>

      <div className="tp-reviews-text">
        Based on <strong>142 verified reviews</strong><br />
        on Trustpilot
      </div>

      <div className="tp-badge">
        <CheckIcon />
        Excellent
      </div>
    </div>

    {/* Testimonial cards */}
    <div className="testimonials-grid">
      {testimonials.map((t) => (
        <div className="testimonial-card" key={t.name}>
          <StarRow count={t.stars} />
          <p className="tc-text">{t.text}</p>
          <div className="tc-person">
            <div className="tc-avatar">{t.initials}</div>
            <div>
              <div className="tc-name">{t.name} <span className="tc-flag">{t.flag}</span></div>
              <div className="tc-meta">{t.meta}</div>
            </div>
            <div className="tc-verified"><CheckIcon /> Verified</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default function ManzilLanding() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navEl = navRef.current;
    if (!navEl) return;
    const updateHeight = () => setNavHeight(navEl.offsetHeight);
    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(navEl);
    window.addEventListener("resize", updateHeight);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  // Close drawer on nav link click
  const handleDrawerLink = () => setMenuOpen(false);

  return (
    <div className="manzil-root">
      <style>{styles}</style>
      <div className="bg-fixed" style={{ backgroundImage: `url(${must})` }}></div>
      <div className="topbar-accent"></div>

      {/* Desktop + Mobile Nav */}
      <nav className="manzil-nav" ref={navRef}>
        <div className="manzil-logo">
          <SparkleLogo />
          Asya Consulting
        </div>

        {/* Desktop menu */}
        <div className="manzil-nav-menu">
          <a className="manzil-nav-item" href="#home">Home</a>
          <a className="manzil-nav-item" href="#properties">Properties</a>
          <a className="manzil-nav-item" href="#about">About</a>
          <a className="manzil-nav-link" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <ChatIcon />
            Contact Us
          </a>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className={`hamburger-btn${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </nav>

      {/* Mobile drawer — slides down from nav */}
      <div
        className={`mobile-drawer${menuOpen ? " open" : ""}`}
        style={{ paddingTop: navHeight }}
      >
        <div className="mobile-drawer-inner">
          <a className="mobile-nav-item" href="#home" onClick={handleDrawerLink}>Home <ChevronRight /></a>
          <a className="mobile-nav-item" href="#properties" onClick={handleDrawerLink}>Properties <ChevronRight /></a>
          <a className="mobile-nav-item" href="#about" onClick={handleDrawerLink}>About <ChevronRight /></a>
          <a
            className="mobile-nav-cta"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDrawerLink}
          >
            <ChatIcon size={18} />
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>

      <div style={{ height: navHeight }} aria-hidden="true"></div>

      <section className="manzil-hero" id="home">
        <h1>Navigating Mombasa's Finest Communities</h1>
        <p className="sub">
          Find your <span className="accent">perfect investment</span> in Mombasa real estate with
          our expertise. We guide you through the entire process, from discovery to transaction
          completion.
        </p>
      </section>

      <section className="manzil-projects" id="properties">
        <h2 className="section-title">
          <span className="lime-text">Handpicked Projects</span> for You
        </h2>
        <ProjectsGrid />
      </section>

      <section className="manzil-approach" id="about">
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
        <ProjectsGrid />
      </section>

      {/* Testimonials + Trustpilot */}
      <Testimonials />

      <footer className="manzil-footer">© 2026 Asya Consulting • Mombasa Real Estate</footer>
    </div>
  );
}