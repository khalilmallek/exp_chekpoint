const express = require('express');
const app = express();
const port = 4000;

function logger(req,res,next){ // this this the middleware fuction
    
    let date = new Date(); 
    let now = date.getHours() ;
   console.log(now)
   
    if (9 <= now && now <= 16){
        next()
    } else {
       res.send(`this is outside of  work hours`)
    }
}
app.use(logger);

 app.get('/', (req,res)=>{
    
     res.sendFile(__dirname+'/public/index.html')
 })

 app.get('/services', (req,res)=>{
    
     res.sendFile(__dirname+'/public/services.html')
 })
 app.get('/contact', (req,res)=>{
    
    res.sendFile(__dirname+'/public/contact.html')
})
 app.get('/style.css',(req,res)=>{
    
     res.sendFile(__dirname+'/public/style.css')
 })

app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`)
})