const express=require("express");
const path=require("path");
const app=express();
const port=8000;

app.use('/static', express.static('static'))//for serving static files
app.use(express.urlencoded())//jaise form ka data lana ushke liye use hota


// PUG SPECIFIC STUFF
app.set('view engine','pug')//set the template engine as pug
app.set('views',path.join(__dirname,'views'))//set the views directory   //views wale folder ke lie

//ENDPOINTS
app.get('/',(req,res)=>{ 
 
    const params={}
    res.status(200).render('home.pug',params);

})
app.get('/contact',(req,res)=>{ 
 
    const params={}
    res.status(200).render('contact.pug',params);

})

// START THE SERVER
app.listen(port,()=>{
    console.log('the application started sucessfully on port ${port}')
})