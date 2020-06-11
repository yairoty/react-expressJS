const MongoClient = require( 'mongodb' ).MongoClient;
const connectionStr = "mongodb://localhost:27017";

let _db;

// required module only get loaded once => one client instance
module.exports = {
  connect: function( callback ) {
    MongoClient.connect( connectionStr,  
                        { useNewUrlParser: true }, 
                        function( err, client ) {
                            _db  = client.db('profileDB');
                            return callback( err );
                        } );
  },
  getDb: function() {
    return _db;
  }
};