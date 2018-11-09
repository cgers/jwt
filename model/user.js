// Create sample users

function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

const Ted = new User('Ted', 'ted@gmail.com', '123456');
const Bob = new User('Bob', 'bob@gmail.com', '123456');

const UserCollection = [Ted, Bob];

module.exports = UserCollection;