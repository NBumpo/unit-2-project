const UserModel = require('../models/user')

module.exports = {
    index
}

async function index(req, res) {

    try {

        const userDoc = await UserModel.find({})
        res.render('allusers/index', { user: userDoc })



    }catch (err) {
        console.log(err)
        res.send(err)
    }


}