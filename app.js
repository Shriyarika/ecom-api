const express = require("express");
const cors = require('cors');
const productRouter = require('./routes/productRoutes')
const connectDatabase = require('./database/connection')
const PORT = 3000;


const app = express(); // actual server// authority check/// since the router sabai thau ma 

connectDatabase()

app.use(cors()); // kunai pani error lai accept garni// origin share garni// backend ra fronend lai communicate garaune Cors use garxa

// required to access jsondata in post function
app.use(express.json());

//use routes
app.use("/api/products", productRouter); //comman file path rakhne 


app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});