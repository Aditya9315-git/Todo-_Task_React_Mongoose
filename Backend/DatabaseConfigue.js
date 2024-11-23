const mongoose=require('mongoose')

let connection=()=>{
    mongoose.connect('mongodb://localhost:27017/Todo')
    .then(()=> console.log("Database connected"))
    .catch((err)=> console.log(err))
}

module.exports=connection