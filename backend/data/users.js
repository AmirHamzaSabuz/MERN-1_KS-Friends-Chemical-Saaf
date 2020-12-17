import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        //password: bcrypt.hashSync('Ah503100', 10),
        isAdmin: true
    },
    {
        name: 'Amir',
        email: 'amir@example.com',
        password: bcrypt.hashSync('123456', 10),
        
    },
    {
        name: 'Hamza',
        email: 'hamza@example.com',
        password: bcrypt.hashSync('123456', 10),
    }

]

export default users;
 