import GoBackButton from '../../GoBackButton';


export default function RestaurantDetailed({ restaurants }) {
  return (
    <article className="restaurants-entry">
      <div className="restaurants-entry__left-wrapper">
        <h3 className="restaurants-entry__title">{restaurants.name}</h3>
        <img className="restaurants-entry__image" src={restaurants.image} alt="" />
      </div>
      <div className="restaurants-entry__right-wrapper">
        <GoBackButton
          className="restaurants-entry__home-btn"
          caption="back"
          home="no"
        />
        <div className="restaurants-entry__content">
          <div className="restaurants-entry__date">{restaurants.tag}</div>
          <div className="restaurants-entry__line"></div>
          <div className="restaurants-entry__description">{restaurants.city}</div>
          <div className="restaurants-entry__line"></div>
          <div className="restaurants-entry__rating">
            
            
          </div>
        </div>
      </div>
    </article>
  );
}