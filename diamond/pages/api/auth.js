const mysql = require('./../../lib/db')
const jwt = require('jsonwebtoken')
const { createHash } = require('crypto');

import  {setCookies} from 'cookies-next'

import env from './../../dbenv'



export default function handler(req, res) {
    const login = req.body.login
    const password = req.body.password
    const hash = createHash('sha256').update(password).digest('hex')
        mysql.db.query(
            'SELECT * FROM accounts WHERE login = ?',
            [login],
            async (error, results) => {
                if (results.length < 1 || !(hash === results[0].password))
                    res.status(401).send({ message: 'Login or Password is incorrect', status: 401 })
                else {
                    const user = {
                        id: results[0].id,
                        social: results[0].social,
                        login: results[0].login,
                        email: results[0].email,
                        donate_money: results[0].donate_money
                    }
                    const token = jwt.sign(user, env.JWT_SECRET, {
                        expiresIn: env.JWT_EXPIRES_IN
                    })
                    mysql.db.query(
                        'UPDATE accounts SET token=? WHERE id=?',
                        [token, user.id]
                    )
                    setCookies('token', token, { req, res, maxAge: 50400 });
                    setCookies('user', login, { req, res, maxAge: 50400 });
                    res.status(200).send({ message: 'Login is complete', status: 200, user })
                }
            }
        )
}