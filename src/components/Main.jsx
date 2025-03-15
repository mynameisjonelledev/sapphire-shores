import photo from "../assets/meow.webp"
import location from "../assets/location.png"
import locationSvg from "../assets/location-svg.svg"
import calendar from "../assets/calendar.png"
import person from "../assets/person.png"

export function Main() {
  return(
    <section className="main-container">
      <div className="main-image-div">
        <img src={photo} alt="landing page image" className="main-image" tabIndex={0}/>
        <div className="overlay-text">Where Luxury Meets the Horizon</div>
        <div className="overlay-text-small">Discover the finest hotels from all over the world.</div>

        <div className="form-absolute">
          <div className="forms">

          <div className="location-div">
            <div className="location-ico-div">
              <img src={locationSvg} alt="location" className="location-pin" />
              <div className="form-text">Where are you headed?</div>
            </div>

            <label htmlFor="location-dropdown"></label>
            <select name="location-dropdown" id="location-dropdown">
              <option value="option1">Philippines</option>
              <option value="option2">South Korea</option>
              <option value="option3">Japan</option>
              <option value="option4">Thailand</option>
              <option value="option5">United States</option>
              <option value="option6">United Kingdom</option>
              <option value="option7">Vietnam</option>
              <option value="option8">Nepal</option>
              <option value="option9">Canada</option>
              <option value="option10">Ireland</option>
            </select>
          </div>

          <div className="location-div">
          <div className="location-ico-div">
              <img src={calendar} alt="location" className="location-pin" />
              <div className="form-text">Check in</div>
            </div>

            <label htmlFor="checkin-calendar"></label>
            <input type="date" id="checkin-calendar" name="checkin-calendar"></input>
          </div>

          <div className="location-div">
          <div className="location-ico-div">
              <img src={calendar} alt="location" className="location-pin" />
              <div className="form-text">Check out</div>
            </div>

            <label htmlFor="checkin-calendar"></label>
            <input type="date" id="checkin-calendar" name="checkin-calendar"></input>
          </div>

          <div className="location-div">
          <div className="location-ico-div">
              <img src={person} alt="location" className="location-pin" />
              <div className="form-text">Rooms | Adults, Children</div>
            </div>
            
            <label htmlFor="location-dropdown"></label>
            <select name="rooms-dropdown" id="rooms-dropdown">
              <option value="option1">01 | 02</option>
              <option value="option2">03 | 04</option>
              <option value="option3">05 | 06</option>
              <option value="option4">07 | 08</option>
            </select>
            </div>

          <button className="booknow">Book now</button>
          </div>
        </div>
      </div>
    </section>
  );
}