const mysql = require('../../lib/db')

export default function handler(req, res) {
    const name = req.body.name
    mysql.db.query(
        'SELECT * FROM cars WHERE user_name = ?',
        [name], 
        async (error, resultCars) => {
            if(resultBusiness.length < 1) {
                res.status(403).send({ message: 'No cars found', status: 403,})
            } else {
                const cars = resultCars
                res.status(200).send({ status: 200, cars})
            }
    })
}