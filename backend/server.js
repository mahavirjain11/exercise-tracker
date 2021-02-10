const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const dotenv = require('dotenv');
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//const uri = process.env.DB_CONNECTON;
//console.log(uri);
mongoose.connect(`mongodb+srv://mahavirjain_17:learningtocode@cluster0.iadw2.mongodb.net/<dbname>?retryWrites=true&w=majority` ,
                 { useNewUrlParser: true,
                   useCreateIndex: true,
                   useUnifiedTopology: true
                });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});