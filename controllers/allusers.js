const UserModel = require('../models/user')

module.exports = {
    index
}

async function index(req, res) {

    try {

        const userDocuments = await UserModel.find({})
        res.render('allusers/index')



    }catch (err) {
        console.log(err)
        res.send(err)
    }


}