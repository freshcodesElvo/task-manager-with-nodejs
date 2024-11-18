const Task = require('../models/data-defination');
const get_all_tasks = async (req, res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})

    }catch (err){
        res.status(500).json({
            massage: err
        })
    }
}

const create_a_task =  async (req, res)=>{
    try{
        const task = await Task.create(req.body);
        res.status(200).json({task})
    }catch (err){
        res.status(500).json({
            massage: err
        })
    }
}
//////////////////////////////////////////////////////////////
const get_specific_task = async (req, res)=>{
    try{
        const {id: specific_task_id} = req.params
        const specific_task = await Task.findOne({_id:specific_task_id});
        if(!specific_task){
            return res.status(404).json({massage: `No task with id ${specific_task_id}`})
        }
        res.status(200).json({specific_task});
    }catch (err){
        res.status(500).json({
            massage: err
        })
    }
}
///////////////////////////////////////////////////////////////////////////////////////
const update_a_task = async (req, res) =>{
    try{
        const {id: specific_task_id} = req.params;
        const specific_task = await Task.findOneAndUpdate({_id: specific_task_id}, req.body,{
            new: true,
            runValidators: true
        })
        if(!specific_task){
            return res.status(404).json({massage: `No task with id ${specific_task_id}`})
        }
        res.status(200).json({specific_task});
    }
    catch (err){
        res.status(500).json({
            massage: err
        })
    }
    
}
///////////////////////////////////////////////////////////////////////////////////////
const delete_a_task = async (req, res) =>{
    try{
        const {id: specific_task_id} = req.params;
        const specific_task = await Task.findOneAndDelete({_id: specific_task_id});
        if(!specific_task){
            return res.status(404).json({massage: `No task with id ${specific_task_id}`})
        }
        res.status(200).json({specific_task});

    }catch (err){
        res.status(500).json({
            massage: err
        })
    }
}


module.exports = {get_all_tasks, create_a_task, get_specific_task, update_a_task, delete_a_task}


