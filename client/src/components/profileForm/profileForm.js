import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

function ProfileForm(props) {    
    const {name, bio, fb_id, handleChange} = props;
    return (
        <Fragment>
            <div className="col-4">
                <input type="text" 
                        className="form-control" 
                        placeholder="name"
                        name="name"
                        value={name}
                        onChange={handleChange}/>
            </div>  
            <div className="col-4">
                <input type="text" 
                        className="form-control"
                        placeholder="bio"
                        name="bio" 
                        value={bio}
                        onChange={handleChange}/>  
            </div>
            <div className="col-2">
                <input type="text" 
                        className="form-control" 
                        placeholder="facebook ID"
                        name="fb_id"
                        value={fb_id}
                        onChange={handleChange}/>  
            </div>
        </Fragment>);
}
  

  ProfileForm.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    fb_id: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
}

export default ProfileForm
  