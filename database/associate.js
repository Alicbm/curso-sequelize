const Post =  require('./models/Post')
const User =  require('./models/User')
const Address =  require('./models/Address')

//Relaciones

//Uno a uno, usuario tiene una direccion
// añade una clave foranea del tipo userId a la tabla address
User.hasOne(Address)