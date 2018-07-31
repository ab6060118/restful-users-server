import * as Express from 'express'
import { users, posts, filters, localSystemEventLog } from "./data";
const app = Express();
const userRouter = Express.Router();
const postRouter = Express.Router();
const filterRouter = Express.Router();
const logRouter = Express.Router();

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
          user => user.id === parseInt(req.params.userId)
        )[0]
      }
    )
  }, delay)
})

postRouter.get('/', (req, res) => {
  return setTimeout(() => {
    res.json(
      {
        status: 200,
        data: posts.filter(
          post => post.userId === parseInt(req.query.userId)
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

filterRouter.get('/:filterId')

app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)
app.use('/api/filters', filterRouter)
app.use('/api/logs', logRouter)

app.listen(3000);
