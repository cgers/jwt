const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const users = require('./../../model/user');
const secret = require('./../../jwtSecurity/Secret').jwtSecret;


// Note that test in this case will refer to /api/user/test
// @route GET api/users/test
// @desc Test post route
// @access Public
router.get('/test', (req, res) =>
    res.json({
        msg: 'User works!',
        value: 'All clear!'
    })
);

// Note that test in this case will refer to /api/user/test
// @route GET api/users/test
// @desc Test post route
// @access Public
router.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    console.log(`No of Users: ${users.length}`);
    var found = false;
    users.forEach((user, index) => {
        if (user.email === email) {

            console.log(`user email: ${user.email}`);

            found = true;

            if (user.password === password) {
                // user and password match
                // issue jwt

                var signOptions = {
                    issuer: 'Intertek - TOTAL QUALITY. ASSURED.',
                    subject: email,
                    audience: 'https://www.intertek.com',
                    expiresIn: "20m",
                    algorithm: "HS256"
                };

                var Payload = {
                    name: user.name,
                    roles: 'foo' //to implement business logic here
                };

                jwt.sign(Payload, secret, signOptions, (error, token) => {
                    return res.json({
                        loginSuccess: true,
                        token: 'Bearer ' + token
                    });
                });

            } else {
                return res.status(404).json({
                    message: 'Invalid password.'
                })
            }
        }
    });
    if (!found) {
        return res.status(404).json({
            message: 'Invalid email.'
        })
    }
});


module.exports = router;