enum CONDITION_TYPE {
  INCLUDE = 1,
    EXCLUDE =2,
}

interface IUser {
  id:number
  name:string
}

interface IDate {
  start:string
  end:string
}

interface IField {
  condition: CONDITION_TYPE
  value: string[]
}

interface IFilter {
  id:number
  severity:number
  name:string
  date:IDate
  time:number[][]
  users:IField
  ip:IField
  app:IField
  category:IField
  content:IField
}

export const users:IUser[] = [
  {id: 1, name: 'One'},
  {id: 2, name: 'Two'},
  {id: 3, name: 'Three'},
  {id: 4, name: 'Four'},
  {id: 5, name: 'Five'},
  {id: 6, name: 'Six'},
  {id: 7, name: 'Seven'},
  {id: 8, name: 'Eight'},
]

export const posts = [
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

export const filters:IFilter[] = [
  {
    id: 1,
    severity:1,
    name: 'filter1',
    date: {
      start: '2018-10-10',
      end: '2018-10-10'
    },
    time: [[0,0],[23,59]],
    users: {
      condition: 1,
      value: ['admin', 'test', 'user']
    },
    ip: {
      condition: 1,
      value: ['192.168.0.100']
    },
    app: { condition: 1, value: ['AppCenter'] },
    category: { condition: 2, value: ['c001'] },
    content: { condition: 1, value: ['a', '2'] }
  },
  {
    id: 2,
    severity: 2,
    name: 'filter2',
    date: {
      start: '2018-10-10',
      end: '2018-10-10'
    },
    time: [[0,0],[23,59]],
    users: {
      condition: 1,
      value: ['admin', 'test', 'user']
    },
    ip: {
      condition: 1,
      value: ['192.168.0.100']
    },
    app: { condition: 1, value: ['AppCenter'] },
    category: { condition: 2, value: ['c001'] },
    content: { condition: 1, value: ['a', '2'] }
  }
]
