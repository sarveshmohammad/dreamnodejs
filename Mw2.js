const arr = [
    {
        name:"nijam",
        email:"nijam@gmail.com"
    },
    {
        name:"sharif",
        email:"sharif@gmail.com"
    },
    {
        name:"sarvesh",
        email:"sarvesh@gmail.com"
    }
];
const arrs = (req, res, Next)=>{
    //let data = arr.filter((value,index)=>{
        if(!req.query.email){
            res.send("Pleace enter the email")
        }
        // else if(value==req.query.email){
        //     res.send("valid email")

        // }
        else{
             let data = arr.filter((value,index)=>{

                return value.email ==req.query.email;

             })
             if(data.length ==0){
                res.send('Invalid Email')
             }
             else{
                res.send(`Email is valid ${JSON.stringify(data)}`)
             }
        }
      //  res.send('dsdsdsd')
        Next();
   // })
 } 
     
 module.exports= arrs