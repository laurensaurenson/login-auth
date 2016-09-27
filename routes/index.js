'use strict';

//third party software
const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => {
  res.render("index")
  // .catch(console.error);
});

router.get('/login', (req, res) => {
  res.render("login")
  // .catch(console.error);
});

router.get('/register', (req, res) => {
  res.render("register")
  // .catch(console.error);
});

router.post('/login', ({ session, body: { email, password } }, res, err) => {
  User.findOne({ email })
    .then(user => {
      if(user) {

      }
    })
})

router.get('/logout', (res, req) => {
  res.render('logout')
})

router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if(err) throw err
    res.redirect('/login')
  })
})

router.use((req, res, next) => {
  if(req.session.email) {
    next()
  } else {
    res.redirect('/login')
  }
})

  module.exports = router;

// router.post('/login', ({ session, body: { email, password } }, res, err) => {
//   User.findOne({ email })
//     .then(user => {
//       if (user) {
//         return new Promise((resolve, reject) => {
//           bcrypt.compare(password, user.password, (err, matches) => {
//             if (err) {
//               reject(err)
//             } else {
//               resolve(matches)
//             }
//           })
//         })
//       } else {
//         res.render('login', { msg: 'Email does not exist in our system' })
//       }
//     })
//     .then((matches) => {
//       if (matches) {
//         session.email = email
//         res.redirect('/')
//       } else {
//         res.render('login', { msg: 'Password does not match' })
//       }
//     })
//     .catch(err)
// })