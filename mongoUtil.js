const MongoClient = require( 'mongodb' ).MongoClient;
const connectionStr = "mongodb://localhost:27017";

let _db;

// required module only get loaded once => one client instance
module.exports = {
  connect: async () => {
    const client = await MongoClient.connect( connectionStr,  
                                        { useNewUrlParser: true });
    _db = client.db('simpo');
  },
  getDb: function() {
    return _db;
  }
};