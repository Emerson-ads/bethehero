const connection = require ( '../database/connection')

module.exports = {
    create : async (req, res) => {
        const { id } = req.body

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first()
        if (!ong) {

            return res.status(400).json({error: 'no Ong Fond with this ID'})
        } 

        return res.json(ong)
    }
}