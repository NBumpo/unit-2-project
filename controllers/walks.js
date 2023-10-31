const WalkModel = require('../models/walk')

module.exports = {
    new: newWalk,
    index,
    create,
    
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

    catch {
        console.log(err)
        res.send(err)
    }
}
