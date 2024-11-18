// const mongoose = require('mongoose')
// const connect_database = (url)=>{
//     return mongoose
//     .connect(url,{
//         useNewUrlParser: true,
//         // useCreateIndex: true,
//         // useFindAndModify: false,
//         useUnifiedTopology: true,
//     })
// }

// module.exports = connect_database;

const mongoose = require('mongoose');

const connect_database = (url) => {
  return mongoose.connect(url, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
};

module.exports = connect_database;