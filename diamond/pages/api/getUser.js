const mysql = require('./../../lib/db')

import  {removeCookies} from 'cookies-next'

export default function handler(req, res) {
    const login = req.body.user
        mysql.db.query(
            'SELECT * FROM accounts WHERE login = ?',
            [login],
            async (error, resultsAccount) => {
                if (resultsAccount.length < 1) {
                    removeCookies('user')
                    removeCookies('token')
                    res.status(403).send({ message: 'There is no login in the melon database', status: 403})
                } else {
                    const user = {
                        id: resultsAccount[0].id,
                        social: resultsAccount[0].social,
                        login: resultsAccount[0].login,
                        email: resultsAccount[0].email,
                        donate_money: resultsAccount[0].donate_money,
                    }
                    mysql.db.query(
                        'SELECT * FROM users WHERE social = ?',
                        [user.social], 
                        async (error, resultsUsers) => {
                            if (resultsUsers.length < 1) {
                                res.status(200).send({ message: 'Login is complete', status: 200, user})
                            } else {
                                const character = resultsUsers
                                res.status(200).send({ message: 'Login is complete', status: 200, user, character })     
                            }
                        }
                    )
                }
            }   
        )
}