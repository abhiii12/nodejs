const express=require('express');
const router=express.Router();

const Person= require('./../Models/Person')

// POST route to add a person
router.post('/', async(req, res) =>{
    try{
        const data = req.body // Assuming the request body contains the person data
        // Create a new Person document using the Mongoose model
        const newPerson = new Person(data);
        // Save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json (response);
        }
        catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
        }
    })

    // GET method to get the person
router.get('/', async (req, res) =>{
    try{
    const data = await Person.find();
    console.log('data fetched');
    res.status(200).json(data);
    }catch(err){
    console.log(err); I
    res.status(500).json({error: 'Internal Server Error'});
    }

});

router.get('/:role',async (req,res)=>{
    try{
        const role = req.params.role;
        if (role=='chef' || role=='waiter'|| role=='manager')
        {
            const data = await Person.find({work:role});
            console.log('data fetched');
            res.status(200).json(data);
        }
        else{
            res.status(404).json({error: 'Role not found'});
        }
    }
    catch{
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

router.put('/:id', async(req,res)=>{
    try{
        const personId=req.params.id;
        const updatedpersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId,updatedpersonData,{
            new:true,
            runValidators:true
        })
        if (!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    }catch{
        console.log(err);
        res.status(500).json({error:'Internal server error'})
    }
})
module.exports=router;