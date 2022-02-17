const mysql = require('../../lib/db')

export default function handler(req, res) {
    const businessId = req.body.businessId
    mysql.db.query(
        'SELECT * FROM business WHERE id = ?',
        [businessId], 
        async (error, resultBusiness) => {
            if(resultBusiness.length < 1) {
                res.status(403).send({ message: 'No such business has been found', status: 403,})
            } else {
                const business = resultBusiness[0]
                res.status(200).send({ status: 200, business})
            }
    })
}