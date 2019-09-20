module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_houses().then(result => {
            res.status(200).send(result)
        })
    },
    updateHouse: async (req, res) => {
        const db = req.app.get('db')
        const {property_name, address, city, state, zip} = req.body
        const {id} = req.params
        const update = await db.edit_house([property_name, address, city, state, zip, id])
        res.status(200).send(update)
    },
    deleteHouse: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const remove = await db.delete_house([id])
        res.status(200).send(remove)
    },
    addHouse: async (req, res) => {
        const db = req.app.get('db')
        const {property_name, address, city, state, zip} = req.body
        const add = await db.create_house({property_name, address, city, state, zip})
        res.status(200).send(add)
    }
}