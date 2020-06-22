const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoUtil = require('./mongoUtil');
const { createProfile, updateProfile, deleteProfile, getProfiles } = require('./model/profile/profile');
const {initProfile} = require('./dal/profile');

// init server
const app = express();

// middlewares //
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  res.sendStatus('500');
});

const PORT = process.env.PORT || 5000;
// init db
mongoUtil.connect()
         .then(initProfile)
         .then(() => app.listen(PORT, () => `Server running on port ${PORT}`))



app.get('/api/profiles', async (req, res) => {
  try {
    const profiles = await getProfiles();
    res.json(profiles);
  } catch (e) {
    console.error('getProfiles error') // TODO add middleware for api errors
  }
});

app.post('/api/profile', async (req, res) => {
  try {
    const newProfile = await createProfile(req.body);  
    res.json(newProfile);
  } catch (e) {
    console.error('createProfile error') // TODO add middleware for api errors
  }
});

app.put('/api/profile/:id', async (req, res) => {
  try {
    const updatedProfile = await updateProfile(req.body);
    res.json(updatedProfile);
  } catch (e){
    console.error('updatedProfile error') // TODO add middleware for api errors
  }  
});

app.delete('/api/profile/:id', async (req, res) => {
  const id = req.params.id;
  await deleteProfile(id);

  res.json(id);
});