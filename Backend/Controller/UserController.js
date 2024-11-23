const usermodel=require('../Models/UserModel')

let Tasksave= async (req,res)=>{
    let{Task, Description,Status}=req.body

    try {
        let data =await usermodel.create({Task,Description,Status })
        res.json({ msg: 'Task Added Successfully!', success: true })

    } catch (error) {
        res.json({ msg: 'Error !', success: false, error: error.message })
    }

}

let Taskget= async (req,res)=>{
    let {Task,Description,Status}= req.body

    try {
        let user= await usermodel.find()
        res.json({ msg: 'Task Fetch Successfully!', success: true ,user})

        
    } catch (error) {
        res.json({ msg: 'Error !', success: false, error: error.message })
        
    }
}

let Taskdelete= async(req,res)=>{
    let id=req.params.id
    try {
        let user= await usermodel.findByIdAndDelete(id)
        res.json({ msg: 'Task Deleted Successfully!', success: true })

        
    } catch (error) {
        res.json({ msg: 'Error !', success: false, error: error.message })
        
    }
}

module.exports={
    Tasksave,
    Taskget,
    Taskdelete
}


