import React from 'react';
import PropTypes from 'prop-types';
import locationIcon from '../assets/location.png'

export default function Card(props) {
    const { Data } = props;
    console.log(Data);  // Log the data to check its structure
    const cardData = Data.map((item, index) => (
        
        <div key={index} className="card-container">
            
            <div className="card-left" >
                <img className="card-image" src={item.imageUrl} alt={item.title} />
            </div>
            
            <div className="card-right">

                <div className="card-right-top">
                <img src={locationIcon} className="icon" alt="Location" />
                <p>{item.location}</p>
                <a href={item.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                
                <h2 className="card-right-location">{item.title}</h2>
                <h4 className="card-right-date">{item.startDate} - {item.endDate}</h4>
                <p className='card-right-description'>{item.description}</p>
            
            </div>
        </div>
    ))

    return (
        <>{cardData}</>
    );
}

Card.propTypes = {
    Data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        googleMapsUrl: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
