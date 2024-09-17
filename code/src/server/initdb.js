const db = require("./db.js")

const User = db.getModel().userModel

async function init() {

    try {
        
        let user3 = new User({
            firstname: "Rebecca",
            lastname: "Albright"
        })
        let user4 = new User({
            firstname: "James",
            lastname: "Madison"
        })
    
        await Promise.all([
            user3.save(),
            user4.save()
        ])
    
        let users = await User.find({})
    
        console.log(users)

    } catch(error) {

        console.log(error)

    } finally {

        db.closeConnection()

    }
}

init()