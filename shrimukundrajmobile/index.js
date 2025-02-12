require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRoutes = require('./routes/userRoutes')
const mongo_uri = process.env.MONGOURI

const app = express();
const productroutes = require('./routes/productsmm');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

const middleware = (req, res, next) => {
    next();
};

app.use(middleware);

app.use('/sm/admin', middleware, adminRoutes)
app.use('/product/smm', productroutes);

try {

    mongoose.connect(mongo_uri)
        .then(() => {
            console.log('MongoDB connected');
            app.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`);
            });
        })

} catch (error) {
    console.log(error)

}





console.log('Mongo URI:', mongo_uri);
