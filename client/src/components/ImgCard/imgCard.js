import React from 'react';
import PropTypes from 'prop-types';
// import './ImgCard.css';
import './imgCard.css';

function imgCard(props) {
    const {id, name, handleEdit} = props;
    return (
        <div key={id} className="img-card-contianer">
           <div className="details-section">
               <span className="name" title={name}>{name}</span>                
            </div> 
            <div className="actions-btn">
                <button className="btn btn-primary" 
                        type="button"
                        onClick={handleEdit}>Edit</button>
            </div>
        </div>
    )
};

imgCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

export default imgCard;

