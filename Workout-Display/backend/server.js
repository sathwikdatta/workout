const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')
const cors = require('cors');

const workoutRoutes = require('./routes/workouts')

const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URL = process.env.MONGODB_URL 

//middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes 

app.use('/api/workouts', workoutRoutes);



// Database Connection 
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('App Connected to Database')

    app.listen(PORT, () =>
      console.log(`Server is running at : http://localhost:${PORT}`)
    )}

  )
  .catch((error) => console.error(error));



