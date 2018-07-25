import * as Express from 'express'
const app = Express();
const userRouter = Express.Router();
const postRouter = Express.Router();

interface IUser {
  id:number
  name:string
}

const users:IUser[] = [
  {id: 1, name: 'One'},
  {id: 2, name: 'Two'},
  {id: 3, name: 'Three'},
  {id: 4, name: 'Four'},
  {id: 5, name: 'Five'},
  {id: 6, name: 'Six'},
  {id: 7, name: 'Seven'},
  {id: 8, name: 'Eight'},
]

const posts = [
  {userId: 1, id: 1,  name: 'O', content: '1' },
  {userId: 1, id: 2,  name: 'T', content: '2' },
  {userId: 1, id: 3,  name: 'T', content: '3' },
  {userId: 1, id: 4,  name: 'O', content: '4' },
  {userId: 1, id: 5,  name: 'T', content: '5' },
  {userId: 2, id: 6,  name: 'T', content: '6' },
  {userId: 2, id: 7,  name: 'O', content: '7' },
  {userId: 2, id: 8,  name: 'T', content: '8' },
  {userId: 2, id: 9,  name: 'T', content: '9' },
  {userId: 3, id: 10, name: 'O', content: '10' },
  {userId: 1, id: 11, name: 'T', content: '11' },
  {userId: 1, id: 12, name: 'T', content: '12' },
]

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

app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)

app.listen(3000);
