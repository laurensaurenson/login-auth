'use strict';

//third party software
const { Router } = require("express");
const router = Router();

const Users = require('../models/User')

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

router.post('/register', (req, res, err) => {
  console.log( req.body );
  Users
    .create( req.body )
    .then( msg =>  {
      res.redirect('/login')

    })
    .catch(err)
})

router.post('/login', ({ session, body: { email, password } }, res, err) => {
  Users.findOne({ email })
    .then(user => {
      if(user && user.password === password) {
        console.log("grats, you logged in ", user);
        res.redirect('/')
      } else if ( user ) {
        console.log('wrong password')
      } else {
        res.redirect('/register')
      }
    })
})

// router.get('/logout', (res, req) => {
//   res.render('logout')
// })

// router.post('/logout', (req, res) => {
//   req.session.destroy(err => {
//     if(err) throw err
//     res.redirect('/login')
//   })
// })

// router.use((req, res, next) => {
//   if( req.session ) {
//     console.log(req.session)
//     next()
//   } else {
//     res.redirect('/login')
//   }
// })

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