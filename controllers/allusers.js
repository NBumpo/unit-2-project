const UserModel = require('../models/user')

module.exports = {
    show
}

async function show(req, res) {

    try {

        const userDocument = await UserModel.findById(req.params.id)



    }catch (err) {
        console.log(err)
        res.send(err)
    }


}