import express from 'express'

// Create express router
const router = express.Router()

const app = express()

let token = null
const user = {
  image: 'https://avatars2.githubusercontent.com/u/16149737?s=460&u=e06a19dcf14661616bb1b9c7d7ac94ed69fd69cc&v=4',
  name: 'stalker',
  password: 'stalker'
}

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  const creds = req.body || {}

  if (creds.name === user.name && creds.password === user.password) {
    // Making token pseudorandom at this point
    token = 'token' + (+new Date())

    const { password, ...rest } = user
    const response = {
      ...rest,
      token
    }

    req.session.authUser = response

    return res.json(response)
  }

  res.status(403).send({ message: 'Bad credentials' })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  if (isLoggedIn(req)) {
    token = null

    delete req.session.authUser

    res.json({ ok: true })
  }

  res.status(401).send({ error: 'Unauthorized' })
})

function isLoggedIn (req) {
  return req.session.authUser.token === token
}

// Export the server middleware
export default {
  path: '/api',
  handler: router
}
