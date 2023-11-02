const WalkModel = require('../models/walk')

    module.exports = {
        create
    }


    async function create(req, res) {

        try {

            const walkDoc = await WalkModel.findById(req.params.id)


            
            

            walkDoc.comments.push(req.body)

            await walkDoc.save()
            res.redirect(`/walks/${walkDoc._id}`);

        } catch(err) {
            console.log(err)
            res.send(err)
        }
    }