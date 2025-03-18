import fb from "../assets/fb.ico"
import twitter from "../assets/twitter.ico"
import whatsapp from "../assets/whatsapp.ico"
import insta from "../assets/insta.ico"

export function Footer() {
  return(
    <section className="footer-section">
     <div className="footer-hr-line"></div>

     <div className="footer-copyright-links">
      <div className="copyright">&#169; 2025 Sapphire Shores. All rights reserved</div>

      <div className="links">
        <div className="social-media-link">
          <img src={fb} alt="twitter" className="social-media-icon" tabIndex={0}/>
        </div>

        <div className="social-media-link">
          <img src={twitter} alt="" className="social-media-icon" tabIndex={0}/>
        </div>

        <div className="social-media-link">
          <img src={whatsapp} alt="" className="social-media-icon" tabIndex={0}/>
        </div>

        <div className="social-media-link">
          <img src={insta} alt="" className="social-media-icon" tabIndex={0}/>
        </div>
      </div>
     </div>
    </section>
  );
}