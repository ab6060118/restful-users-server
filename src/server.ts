import * as Express from 'express'
import { users, posts, filters, localSystemEventLog, supportApps } from "./data";
const app = Express();
const userRouter = Express.Router();
const postRouter = Express.Router();
const filterRouter = Express.Router();
const logRouter = Express.Router();
const supportRouter = Express.Router();

const delay = 500

userRouter.get('/', (req, res) => {
  return setTimeout(() => {
    res.json(
      {
        status: 200,
        data: users,
      }
    )
  }, delay)
})

userRouter.get('/:userId', (req, res) => {
  return setTimeout(() => {
    res.json(
      {
        status: 200,
        data: users.filter(
          user => user.pid === parseInt(req.params.userId)
        )[0]
      }
    )
  }, delay)
})

postRouter.get('/', (req, res) => {
  console.log();
  return setTimeout(() => {
    res.json(
      {
        status: 200,
        data: posts.filter(
          post => post.userId === parseInt(JSON.parse(req.query.filter)[0].value)
        )
      }
    )
  }, delay)
})

filterRouter.get('/', (req, res) => {
  return setTimeout(() => {
    res.json(
      {
        status: 200,
        data: filters
      }
    )
  }, delay)
})

logRouter.get('/', (req, res) => {
  return setTimeout(() => {
    res.json(
      {
        status: 200,
        data: localSystemEventLog
      }
    )
  }, delay)
})

supportRouter.get('/', (req, res) => {
  return setTimeout(() => {
    res.json(
      {
        status: 200,
        data: supportApps
      }
    )
  }, delay)
})

filterRouter.get('/:filterId', (req, res) => {
  return setTimeout(() => {
    res.json(
      {
        status: 200,
        data: filters.filter(
          filter => filter.id === parseInt(req.params.filterId)
        )[0]
      }
    )
  }, delay)
})

app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)
app.use('/api/filters', filterRouter)
app.use('/api/logs', logRouter)
app.use('/api/support', supportRouter)

app.listen(3000);
