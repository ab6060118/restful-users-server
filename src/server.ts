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
]

const posts = [
  {userId: 1, id: 1,  name: 'O' },
  {userId: 1, id: 2,  name: 'T' },
  {userId: 1, id: 3,  name: 'T' },
  {userId: 1, id: 4,  name: 'O' },
  {userId: 1, id: 5,  name: 'T' },
  {userId: 2, id: 6,  name: 'T' },
  {userId: 2, id: 7,  name: 'O' },
  {userId: 2, id: 8,  name: 'T' },
  {userId: 2, id: 9,  name: 'T' },
  {userId: 3, id: 10, name: 'O' },
  {userId: 1, id: 11, name: 'T' },
  {userId: 1, id: 12, name: 'T' },
]

userRouter.get('/', (req, res) => {
  return res.json(
    {
      status: 200,
      data: users,
    }
  )
})

userRouter.get('/:userId', (req, res) => {
  return res.json(
    {
      status: 200,
      data: users.filter(
        user => user.id === parseInt(req.params.userId)
      )[0]
    }
  )
})

app.use('/api/users', userRouter)

app.listen(3000);
