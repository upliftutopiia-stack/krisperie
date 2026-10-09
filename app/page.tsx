"use client";

import { useState } from "react";

const EMAIL = "krisperietreats@gmail.com";
const INSTAGRAM = "https://www.instagram.com/krisperie_/";
const PHONE = "8143355354";

const enquiryLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "KrispErie — Custom Treat Enquiry"
)}&body=${encodeURIComponent(
  "Hi KrispErie!\n\nI'd love to ask about custom treats.\n\nName:\nOccasion:\nEvent date:\nApproximate quantity:\nTreat ideas:\n\nThank you!"
)}`;

const collections = [
  {
    number: "01",
    title: "Gourmet Treats",
    description:
      "A playful twist on the classic crispy treat, made for sweet moments.",
    theme: "pink",
    symbol: "✳",
  },
  {
    number: "02",
    title: "Custom Creations",
    description:
      "A little something special for your next celebration.",
    theme: "orange",
    symbol: "♡",
  },
  {
    number: "03",
    title: "Event Favors",
    description:
      "Memorable little treats for parties, gatherings and celebrations.",
    theme: "chocolate",
    symbol: "✦",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="home">
      <div className="announcement">
        <span>✳</span> THE SWEET SIDE OF ERIE, PENNSYLVANIA <span>✳</span>
      </div>

      <header className="header">
        <a href="#home" className="logo" onClick={closeMenu}>
          krisp<span>Erie</span>
          <small>GOURMET TREATS</small>
        </a>

        <nav
          id="main-menu"
          className={`nav ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>Our Story</a>
          <a href="#treats" onClick={closeMenu}>The Treats</a>
          <a href="#orders" onClick={closeMenu}>Custom Orders</a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Instagram ↗
          </a>
          <a className="navCta" href={enquiryLink} onClick={closeMenu}>
            ORDER ENQUIRY ↗
          </a>
        </nav>

        <button
          type="button"
          className="menuToggle"
          aria-controls="main-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">✳ GOURMET TREATS, BIG PERSONALITY</p>

          <h1>
            A little
            <br />
            <em>krispy.</em>
            <br />
            A lot of
            <br />
            <span>happy.</span>
          </h1>

          <p className="heroDescription">
            Gourmet Rice Krispy treats and custom sweet creations
            that make celebrations even more fun.
          </p>

          <div className="heroActions">
            <a href="#treats" className="button dark">
              DISCOVER THE TREATS <span>↗</span>
            </a>
            <a href={enquiryLink} className="textLink">
              HAVE AN EVENT IN MIND? ↗
            </a>
          </div>

          <div className="heroBottom">
            <span>FAIRVIEW / ERIE, PA</span>
            <span>SCROLL FOR SOMETHING SWEET ↓</span>
          </div>
        </div>

        <div className="heroVisual" aria-label="Decorative crispy treat illustration">
          <div className="visualTop">
            <span>CRISPY. CHEWY. HAPPY.</span>
            <span>✳</span>
          </div>

          <div className="visualCircle">
            <div className="treatShadow" />
            <div className="treatIllustration">
              <div className="treatDrizzle" />
              <div className="treatSprinkles">✳ ✦ ✳</div>
            </div>
            <span className="sparkle sparkleOne">✦</span>
            <span className="sparkle sparkleTwo">✳</span>
          </div>

          <div className="visualBottom">
            <span>MADE FOR SWEET MOMENTS</span>
            <span>01 / 03</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>
          GOURMET TREATS <span>✳</span> CUSTOM CREATIONS <span>✳</span>
          EVENT FAVORS <span>✳</span> SOMETHING SWEET <span>✳</span>
          GOURMET TREATS <span>✳</span> CUSTOM CREATIONS <span>✳</span>
          EVENT FAVORS <span>✳</span> SOMETHING SWEET <span>✳</span>
        </div>
      </div>

      <section className="intro section" id="about">
        <div className="sectionLabel">
          <span>01 / MEET KRISPERIE</span>
          <span>✳</span>
        </div>

        <div className="introGrid">
          <div>
            <p className="eyebrow accent">A LITTLE MORE ABOUT US</p>
            <h2>
              Not your
              <br />
              average <em>treat.</em>
            </h2>
          </div>

          <div className="introRight">
            <p>
              Some celebrations deserve something a little different.
              KrispErie brings a playful, gourmet twist to classic
              Rice Krispy treats, with custom creations and event
              favors designed for memorable occasions.
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="roundLink"
            >
              SEE OUR LATEST CREATIONS ↗
            </a>
          </div>
        </div>
      </section>

      <section className="treats section" id="treats">
        <div className="sectionLabel">
          <span>02 / THE SWEET LINEUP</span>
          <span>GOOD THINGS AHEAD</span>
        </div>

        <div className="treatsHeading">
          <div>
            <p className="eyebrow accent">PICK YOUR HAPPY</p>
            <h2>
              Treat yourself.
              <br />
              <em>And everyone else.</em>
            </h2>
          </div>
          <p>
            For gifting, gathering and celebrating, there&apos;s
            always room for something sweet.
          </p>
        </div>

        <div className="treatGrid">
          {collections.map((item) => (
            <article className={`treatCard ${item.theme}`} key={item.number}>
              <div className="treatArt" aria-hidden="true">
                <span className="artCircle" />
                <span className="artSymbol">{item.symbol}</span>
                <span className="artCaption">SWEET LITTLE MOMENTS</span>
              </div>
              <div className="treatDetails">
                <span>{item.number} / THE COLLECTION</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  href={enquiryLink}
                  aria-label={`Enquire about ${item.title}`}
                >
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="treatFootnote">
          Want to see real treat creations? Explore KrispErie on{" "}
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
            Instagram ↗
          </a>
        </p>
      </section>

      <section className="statement">
        <span className="statementStar">✳</span>
        <p>THE SECRET INGREDIENT IS ALWAYS</p>
        <h2>
          a little <em>fun.</em>
        </h2>
        <span className="statementSmall">
          AND MAYBE A LITTLE EXTRA MARSHMALLOW.
        </span>
      </section>

      <section className="orders section" id="orders">
        <div className="sectionLabel">
          <span>03 / LET&apos;S MAKE IT SWEET</span>
          <span>✳</span>
        </div>

        <div className="ordersGrid">
          <div className="ordersCopy">
            <p className="eyebrow accent">CUSTOM ORDERS & EVENTS</p>
            <h2>
              Your occasion.
              <br />
              <em>Our sweet touch.</em>
            </h2>
            <p className="ordersDescription">
              Birthdays, celebrations, gatherings or thoughtful gifts.
              Tell KrispErie what you have in mind, and enquire
              about options and availability.
            </p>
            <a href={enquiryLink} className="button orangeButton">
              START YOUR ORDER ENQUIRY <span>↗</span>
            </a>
          </div>

          <div className="steps">
            <div className="step">
              <span>01</span>
              <div>
                <h3>Tell us the occasion</h3>
                <p>Share your event date and celebration details.</p>
              </div>
              <span>↗</span>
            </div>
            <div className="step">
              <span>02</span>
              <div>
                <h3>Share your treat ideas</h3>
                <p>Let us know the quantity and style you&apos;re considering.</p>
              </div>
              <span>↗</span>
            </div>
            <div className="step">
              <span>03</span>
              <div>
                <h3>Confirm the details</h3>
                <p>Connect directly about options and availability.</p>
              </div>
              <span>↗</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="contactInner">
          <p className="eyebrow">SOMETHING SWEET STARTS HERE</p>
          <h2>
            Let&apos;s make
            <br />
            <em>it krispy.</em>
          </h2>
          <p>Have a celebration in mind? We&apos;d love to hear about it.</p>
          <a href={enquiryLink} className="contactButton">
            LET&apos;S TALK TREATS <span>↗</span>
          </a>
        </div>
        <span className="contactDecoration" aria-hidden="true">
          krispy!
        </span>
      </section>

      <footer className="footer">
        <div className="footerTop">
          <a href="#home" className="footerLogo">
            krisp<span>Erie</span>
          </a>
          <p>Making celebrations a little sweeter.</p>
        </div>

        <div className="footerLinks">
          <div>
            <span>BASED IN</span>
            <p>Fairview / Erie, Pennsylvania</p>
          </div>
          <div>
            <span>GET IN TOUCH</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={`tel:+1${PHONE}`}>(814) 335-5354</a>
          </div>
          <div>
            <span>FOLLOW ALONG</span>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              Instagram ↗
            </a>
          </div>
        </div>

        <div className="footerBottom">
          <span>© 2026 KRISPERIE</span>
          <span>MADE FOR THE SWEET LIFE ✳</span>
        </div>
      </footer>
    </main>
  );
}