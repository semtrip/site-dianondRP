const mysql = require('../../lib/db')

export default function handler(req, res) {
    const name = req.body.name
    mysql.db.query(
        'SELECT * FROM business WHERE user_name = ?',
        [name], 
        async (error, resultBusiness) => {
            if(resultBusiness.length < 1) {
                res.status(403).send({ message: 'No such business has been found', status: 403,})
            } else {
                const business = resultBusiness[0]
                res.status(200).send({ status: 200, business})
            }
    })
}