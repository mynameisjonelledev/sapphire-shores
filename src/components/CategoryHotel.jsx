import categoryHotels from "../hotel details/category-hotels";

export function CategoryHotel() {
  return(
    <section className="category-hotel-container">

  <h1 className="hotel-category">Category</h1>
    <div className="hotel-underline"></div>

    <div className="hotel-list-container">
      {categoryHotels.map((hotel) => (
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