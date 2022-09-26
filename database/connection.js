const mongoose = require('mongoose');
const connectDatabase = () => {

    mongoose.connect('mongodb://localhost:27017/ecom_morning', (err) => { //database to name rakhnu porxa
        if (err) {
            console.log(err);
        } else

            console.log("Database connected successfully")
    });


};
module.exports = connectDatabase;