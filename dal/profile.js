const mongoUtil = require('../mongoUtil');
let collection;

async function initProfile(){
    try {
        const db = await mongoUtil.getDb();
        collection = db.collection('profile');
    }
    catch(e) {
        console.error(e);
    }
}

async function getAll() {
    return collection.find({}).toArray();
}

async function get(id) {
    return collection.findOne({id: id});
}

async function remove(id) {
    return collection.remove({id: id});
}

async function update(profile) {
    const updateProfile = {
        name: profile.name,
        bio: profile.bio,
        fb_id: profile.fb_id
    };    

    return collection.update(
        { id: profile.id },
        { $set: updateProfile }
    );
}

async function generateProfileId(){
    const maxProfile = await collection.find({}).sort({id:-1}).limit(1).toArray();
    if(maxProfile.length)
        return maxProfile[0].id + 1;

    return 1;
}

async function create(profile) {
    const newId = await generateProfileId();
    const newProfile = {
        name: profile.name,
        bio: profile.bio,
        fb_id: profile.fb_id,
        id: newId
    };

    await collection.insert(newProfile);

    return newProfile;
}

module.exports = {
    initProfile,
    getAll,
    get,
    remove,
    update,
    create
}
