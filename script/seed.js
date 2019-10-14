const db = require('../server/db')
const User = require('../server/db/models/user')
const Message = require('../server/db/models/message')
const Channel = require('../server/db/models/channel')

const channels = [
  {name: 'really_random'},
  {name: 'generally_speaking'},
  {name: 'dogs_of_fullstack'},
  {name: 'lunch_planning'}
]

const users = [
  {
    name: 'JohnieeJuiceboxx',
    image: '/aaimages/0.jpg'
  },
  {
    name: 'Alice',
    image: '/aaimages/2.jpg'
  },
  {
    name: 'Star',
    image: '/aaimages/3.jpg'
  },
  {
    name: 'Trisha',
    image: '/aaimages/4.jpg'
  },
  {
    name: 'Megan',
    image: '/aaimages/5.jpg'
  },
  {
    name: 'Karen',
    image: '/aaimages/6.jpg'
  },
  {
    name: 'Ellen',
    image: '/aaimages/7.jpg'
  },
  {
    name: 'Taylor',
    image: '/aaimages/8.jpg'
  },
  {
    name: 'Ramona',
    image: '/aaimages/9.jpg'
  },
  {
    name: 'Sam',
    image: '/aaimages/10.jpg'
  },
  {
    name: 'Georgia',
    image: '/aaimages/11.jpg'
  },
  {
    name: 'Jasmine',
    image: '/aaimages/12.jpg'
  },
  {
    name: 'Tiff',
    image: '/aaimages/13.jpg'
  },
  {
    name: 'Alona',
    image: '/aaimages/14.jpg'
  },
  {
    name: 'Rin',
    image: '/aaimages/15.jpg'
  },
  {
    name: 'Pusheen',
    image: '/aaimages/16.jpg'
  },
  {
    name: 'Delilah',
    image: '/aaimages/17.jpg'
  },
  {
    name: 'Wolf',
    image: '/aaimages/18.jpg'
  }
]

const id = () => Math.round(Math.random() * (users.length - 1)) + 1

const messages = [
  {userId: id(), content: 'I like cake!', channelId: 1},
  {userId: id(), content: 'I love using QREW!', channelId: 1},
  {userId: id(), content: 'Isnt it so easy!', channelId: 1},
  {userId: id(), content: 'I like writing web apps!', channelId: 2},
  {userId: id(), content: 'You should learn JavaScript!', channelId: 2},
  {userId: id(), content: 'JavaScript is pretty great!', channelId: 2},
  {userId: id(), content: 'Dogs are great!', channelId: 3},
  {userId: id(), content: 'Cats are also great!', channelId: 3},
  {userId: id(), content: 'Why must we fight so?', channelId: 3},
  {userId: id(), content: 'I want to get tacos!', channelId: 4},
  {userId: id(), content: 'I want to get salad!', channelId: 4},
  {
    userId: id(),
    content: 'But do yall still got the $1 Ritual tho? ;)',
    channelId: 4
  }
]

const seed = () =>
  Promise.all(users.map(user => User.create(user)))
    .then(() => Promise.all(channels.map(channel => Channel.create(channel))))
    .then(() => Promise.all(messages.map(message => Message.create(message))))

const main = () => {
  console.log('Syncing db...')
  db
    .sync({force: true})
    .then(() => {
      console.log('Seeding databse...')
      return seed()
    })
    .catch(err => {
      console.log('Error while seeding')
      console.log(err.stack)
    })
    .then(() => {
      db.close()
      return null
    })
}

main()
