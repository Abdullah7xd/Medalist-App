const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/userRouter');
const playerRouter = require('./routers/playerRouter');
const tournamentRouter = require('./routers/tournamentRouter');

const app = express();
const port = 5000;


app.use(cors({
    origin : ['http://localhost:3000']
}))
app.use(express.json());

app.use('/user', userRouter);
app.use('/player', playerRouter);
app.use('/tournament', tournamentRouter);

app.get('/',(req,res) => {res.send('working Perfectly')});
app.listen(port,() =>{console.log('server is being started');});
