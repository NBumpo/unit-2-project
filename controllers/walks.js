const WalkModel = require('../models/walk')

module.exports = {
    new: newWalk,
    
    index,
    create,
    show,
    deleteWalk
    
}

// async function show(req, res) {

//    try { 
//     const walkDocuments = await WalkModel.find({})
//     res.render()
// } catch {


// }
// }






async function index(req, res) {

    try {

        const walkDocuments = await WalkModel.find({})
        res.render('walks/index', {walkDoc: walkDocuments})



    }catch (err) {
        console.log(err)
        res.send(err)
    }


}

function newWalk(req, res) {
    res.render("walks/new");
  }


async function create(req, res, next) {
    try {
        const walkDoc = await WalkModel.create(req.body)
        res.redirect('/walks')
    }

    catch(err) {
        console.log(err)
        res.send(err)
    }
}

async function show(req, res) {
   try {
    const walkDocuments = await WalkModel.findById(req.params.id)


    res.render("walks/show", { walk: walkDocuments });
   }

   catch(err) {
    console.log(err)
    res.send(err)
   }
}

async function deleteWalk(req, res) {
    try {

        await WalkModel.findByIdAndDelete(req.params.id)

       
        

       
        
        res.redirect('/walks')

    } catch(err) {
        console.log(err)
        res.send(err)
    }
}
