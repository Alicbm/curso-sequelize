const Post =  require('./models/Post')
const User =  require('./models/User')
const Address =  require('./models/Address')

//Relaciones

//Uno a uno, usuario tiene una direccion
//añade una clave foranea del tipo userId a la tabla address
// ese as: 'residente' lo que nos muestra es la llave foranea con ese nombre
User.hasOne(Address, { as: 'domicilio', foreignKey: 'residente_id' })

// Añade una clave userId a la tabla address
//el belongsTo es obligatorio en las relaciones uno a uno
//debemos poner la misma foreignkey de lo contrario se crea un nuevo campo
Address.belongsTo(User, { as: 'residente', foreignKey: 'residente_id' })