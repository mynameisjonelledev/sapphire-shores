import hotels from "../hotel details/hotel-info";


export function Hotels() {
  return(
    <section className="hotels-main-con">

    <h1 className="hotel-category">Top Rated</h1>
    <div className="hotel-underline"></div>

    <div className="hotel-list-container">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="hotel-container">
          <div className="hotel-image-con">
          <img src={hotel.image} alt="hotel image" className="hotel-image" tabIndex={0}/>
        </div>

        <div className="hotel-name">{hotel.name}</div>
        <div className="hotel-price">{hotel.price}</div>
        <div className="hotel-address">{hotel.location}</div>   
      </div>
      ))}
    </div>
    </section>

  );
}