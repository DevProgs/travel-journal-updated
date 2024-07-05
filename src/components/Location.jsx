import Indicator from '../images/indicator.svg';
/* eslint-disable react/prop-types */ 

const Location = ({ description,
    googleMapsURL,
    image,
    location,
    startDate,
    endDate,
    title  }) => {
  return (
    <div>
      <div className="location">
        <img className="location--image" src={image} alt={title}></img>
        <div className="location--info-container">
          <div className="location--country">
            <img
              className="location--indicator"
              src={Indicator}
              alt="indicator"
            ></img>
            <h3>{location}</h3>
            <a href={googleMapsURL} target="_blank" rel="noopener noreferrer text/css">
              View on Google Maps
            </a>
          </div>
          <div className="location--attraction">
            <h1>{title}</h1>
          </div>
          <div className="location--date">
            <p>
              {startDate} - {endDate}
            </p>
          </div>
          <div className="location--description">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="location--divider">
        <div></div>
      </div>
    </div>
  );
};
export default Location;
