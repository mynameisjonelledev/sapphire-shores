import icon from "../assets/hotel.png"

export function PreFooter() {
  return(
    <section className="prefooter-container">

      <div className="pre-branding">
        <div className="pre-branding-logo-con">
          <img src={icon} alt="logo" className="header-logo" />
          <div className="pre-title">Sapphire Shores</div>
        </div>
      </div>

      <div className="pre-about-lists">
        <div className="pre-title">About Us</div>
        <div className="pre-about-list-text">Company Overview</div>
        <div className="pre-about-list-text">Our Mission & Values</div>
        <div className="pre-about-list-text">Careers</div>
        <div className="pre-about-list-text">Blog</div>
        <div className="pre-about-list-text">Press Releases</div>
      </div>

      <div className="pre-about-lists">
        <div className="pre-title">Explore</div>
        <div className="pre-about-list-text">Destinations</div>
        <div className="pre-about-list-text">Specials Offers</div>
        <div className="pre-about-list-text">Last-Minute Deals</div>
        <div className="pre-about-list-text">Travel Guides</div>
        <div className="pre-about-list-text">Blog & Travel Tips</div>
      </div>

      <div className="pre-about-lists">
        <div className="pre-title">Support</div>
        <div className="pre-about-list-text">Privacy Policy</div>
        <div className="pre-about-list-text">Terms & Conditions</div>
        <div className="pre-about-list-text">Accessibility</div>
        <div className="pre-about-list-text">Feedback & Suggestions</div>
        <div className="pre-about-list-text">Sitemap</div>
      </div>

      <div className="pre-about-lists">
        <div className="pre-title">Membership</div>
        <div className="pre-about-list-text">Loyalty Program</div>
        <div className="pre-about-list-text">Unlock Exclusive Offers</div>
        <div className="pre-about-list-text">Rewards & Benefits</div>
        <div className="pre-about-list-text">&nbsp;</div>
        <div className="pre-about-list-text">&nbsp;</div>
      </div>
      
    </section>
  );
}