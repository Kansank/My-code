const mongoose = require('mongoose')
//process.env.DB.Name
mongoose.connect('mongodb://localhost:27017/db-node', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})