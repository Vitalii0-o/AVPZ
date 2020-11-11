const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const authRoutes = require('./routes/auth')
const profileRoutes = require('./routes/profile')
const workoutRoutes = require('./routes/workout')
const cworkoutRoutes = require('./routes/cworkout')
const bodyParser = require('body-parser')

mongoose.connect('mongodb+srv://vlad:as1305@cluster0.wxkyd.mongodb.net/AVPZ?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true  }).then(() => {
    console.log('Connected')
}).catch(error => {
    console.log(error)
})

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())


app.use('/api/auth', authRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/workout', workoutRoutes)
app.use('/api/cworkout', cworkoutRoutes)
const port = process.env.PORT || 6000

app.listen(port, () => console.log(`Server has been started on ${port}`))

module.exports = app