
const path = require('path');

const home = async (req,res)=>{
    try{
        
        // res.status(200).send("This is Home Page");
        const filePath = path.join(__dirname, '../public', 'index.html');
        res.sendFile(filePath, (err) => {
            if (err) {
                res.status(err.status).end();
            } else {
                console.log('index.html sent successfully');
            }
        });
    }catch(error){
        res.status(404).send("Page not found");
    }
}
const register= async (req,res)=>{
    try{
        res.status(200).send("This is registration Page");
    }catch(error){
        res.status(404).send("Page not found");
    }
}
const login= async (req,res)=>{
    try{
        res.status(200).send("This is login Page");
    }catch(error){
        res.status(404).send("Page not found");
    }
}

module.exports = {home,register,login};
