import logo from "../assets/logo.png"
import icon from "../assets/hotel.png"

export function Header() {
  return(
    <section className="header-section">

    <div className="header-main-div">

      <div className="header-branding">
        <img src={icon} alt="Sapphire Shores Logo" className="header-logo"/>
        <div className="header-title">Sapphire Shores</div>

        <div className="header-mid-space"></div>

        <div className="header-link-name">HOME</div>
        <div className="header-link-name">SERVICES</div>
        <div className="header-link-name">BOOKINGS</div>
        <div className="header-link-name explore">EXPLORE</div>
        <div className="header-link-name membership">MEMBERSHIP</div>

        <div className="button-links">
          <button className="header-register">Register</button>
          <button className="header-login">Login</button>
        </div>
      </div>

      
    </div>
    </section>
  );
}