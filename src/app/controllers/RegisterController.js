// const User = require('../models/User');
// const { registerValidation } = require('../helper/validation');
// class RegisterRouter {
//     register(req, res, next) {
//         const { error } = registerValidation(req.body);
//         if (error) return res.status(400).send(error.details[0].message);
//         const user = new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password
//         });
//         user.save()
//             .then(() => {
//                 res.send(user)
//             }).catch((err) => {
//                 res.status(400).send(err);
//             });
//     };
// };

// module.exports = new RegisterRouter();