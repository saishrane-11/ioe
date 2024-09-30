const express=require('express');
const app = express();
const path = require('path');
const connectDb = require('./db');
const authRoutes = require('./routes/authRoutes');
app.use('/',authRoutes);
app.use(express.static(path.join(__dirname, 'public')));


connectDb().then(
    app.listen(3000,()=>{console.log("listening")})
)
