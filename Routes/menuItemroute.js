const express= require('express')
const router=express.Router();

const menuItem= require('./../Models/menuItem');


// POST route to add a menu
router.post('/', async(req, res) =>{
    try{
        const data = req.body // Assuming the request body contains the person data
        // Create a new Person document using the Mongoose model
        const newmenuItem = new menuItem(data);
        // Save the new person to the database
        const response = await newmenuItem.save();
        console.log('data saved');
        res.status(200).json (response);
        }
        catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
        }
    })

// GET method to get the menu
router.get('/', async (req, res) =>{
    try{
    const data = await menuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
    }catch(err){
    console.log(err); I
    res.status(500).json({error: 'Internal Server Error'});
    }
});

router.get('/:taste',async (req,res)=>{
    try{
        const taste = req.params.taste;
        if (taste=='sweet' || taste=='spicy'|| taste=='sour' || taste=='mint')
        {
            const data = await menuItem.find({taste:taste});
            console.log('data fetched');
            res.status(200).json(data);
        }
        else{
            res.status(404).json({error: 'taste kahan hai'});
        }
    }
    catch{
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
});

module.exports=router;