const profileDb = require('../../dal/profile');


// // TODO move to db
// const profiles = [{
//     "id":1,
//     "name":"Bill Gates",
//     "bio":"Former CEO of Microsoft",
//     "fb_id":"billgates"
//   },
//   {
//     "id":2,
//     "name":"Michelle Obama",
//     "bio":"First Lady of US",
//     "fb_id":"michelleobama",
//   },
//   {
//     "id":3,
//     "name":"Mark Zuckerberg",
//     "bio":"CEO of Facebook",
//     "fb_id":"112845672063384"
//   },
//   {
//     "id":4,
//     "name":"Ginni Rometty",
//     "bio":"CEO of Xerox",
//     "fb_id":"141068482667400"
//   }];
  
  function getProfiles() {
    return profileDb.getAll();
  }
  
  async function createProfile(profile) {    
    const newProfile = await profileDb.create(profile);
    
    return newProfile;
  }
  
  async function updateProfile(updatedProfile) {
    await profileDb.update(updatedProfile);
    
    return updatedProfile;
  }
  
  async function deleteProfile(id) {
    await profileDb.remove(id);
    
    return id;
  }

module.exports = {
        createProfile,
        updateProfile,
        deleteProfile,
        getProfiles
};
