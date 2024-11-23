const mongoose=require('mongoose')

const userSchema= mongoose.Schema({
    Task:{
        type:String,    
    },
    Description:{
        type:String,
      
    },
    Status:{
        type:String,
    },
})

module.exports =mongoose.model('usersnew',userSchema)