import { connect } from "mongoose";

connect('mongodb://localhost/hospital',{
    useNewUrlParser:true
})
.then(db=>console.log('Database Conected'))
.catch(err=>console.log(err))
