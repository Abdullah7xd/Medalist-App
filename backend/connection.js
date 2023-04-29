const mongoose = require('mongoose');
const url = 'mongodb+srv://Abdullah:Abdullah123@cluster0.ihx3lfc.mongodb.net/medalist?retryWrites=true&w=majority';


mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.error(err);
});

module.exports = mongoose;

