module.exports = {
    getHouses: (req, res) => {
        // console.log('hit')
        const db = req.app.get('db')
        db.get_houses().then(result => {
            res.status(200).send(result)
        })
    },
    deleteHouse: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const remove = await db.delete_house([id])
        res.status(200).send(remove)
    },
    addHouse: async (req, res) => {
        const db = req.app.get('db')
        let {name, address, city, state, zip, img, mortgage, rent} = req.body
        zip = +zip
        mortgage = +mortgage
        rent = +rent
        const add = await db.create_house([name, address, city, state, zip, img, mortgage, rent])
        res.status(200).send(add)
    }
}
