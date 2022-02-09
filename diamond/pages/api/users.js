const db = require('./../../lib/db')
var bcrypt = require('bcrypt');

exports.getAllUsers = (req, res) => {

    db.query('SELECT `id`,`login` FROM `accounts`', (error, rows, fields) => {
        if(error) {
            response.status(400, error, res)
        } else {
            response.status(200, rows, res)
        }
    })

}
exports.signin = (req, res) => {
    db.query("SELECT `id`, `login`, `password` FROM `accounts` WHERE `login` = '" + req.body.login + "'", (error, rows, fields) => {
        if(error) {
            response.status(400, error, res)
        } else if(rows.length <= 0) {
            response.status(401, {message: `Пользователь с login - ${req.body.login} не найден. Пройдите регистрацию.`}, res)
        } else {
            const row = JSON.parse(JSON.stringify(rows))
            row.map(rw => {
                const password = bcrypt.compareSync(req.body.password, rw.password)
                if(password) {
                    //Если true мы пускаем юзера и генерируем токен
                    const token = jwt.sign({
                        userId: rw.id,
                        email: rw.email
                    }, config.jwt, { expiresIn: 120 * 120 })
                    response.status(200, {token: `Bearer ${token}`}, res)
                } else {
                    //Выкидываем ошибку что пароль не верный
                    response.status(401, {message: `Пароль не верный.`}, res)
                }
                return true
            })
        }
    })

}