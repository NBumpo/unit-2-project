const WalkModel = require('../models/walk')

module.exports = {
    new: newWalk,
    index,
    create,
    show,
    deleteWalk,
    update,
    showEdit
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






  async function update(req, res) {
    try {
      const updatedBook = await Book.findOneAndUpdate(
        {_id: req.params.id, userRecommending: req.user._id},
        // update object with updated properties
        req.body,
        // options object {new: true} returns updated doc
        {new: true}
      );
      return res.redirect(`/books/${updatedBook._id}`);
    } catch (e) {
      console.log(e.message);
      return res.redirect('/books');
    }
  }



  async function showEdit(req, res) {
  try {
    const walkDocuments = await WalkModel.findById(req.params.id)


    res.render("walks/:id/edit", { walk: walkDocuments });
   }

   catch(err) {
    console.log(err)
    res.send(err)
   }
}