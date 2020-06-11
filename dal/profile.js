const mongoUtil = require('../mongoUtil');

const db = mongoUtil.getDb();
const collection = db.collection('profile');

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
    const maxProfile = await collection.find({}).sort({id:-1}).limit(1).toArray()
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
    getAll,
    get,
    remove,
    update,
    create
}
