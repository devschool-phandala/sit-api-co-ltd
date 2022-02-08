const bcrypt = require('bcrypt');

class User {
  constructor(username, password, email, role) {
      this.username = username;
      this.password = password;
      this.email = email;
      this.role = role || 'member';
  }

  // create function for hashing password
  async hashPassword(password) {
      let salt = bcrypt.genSaltSync(10);
      let hash = await bcrypt.hashSync(password, salt);
      return hash;
  }

  // create function for comparing password
  async comparePassword(password) {
      let result = await bcrypt.compareSync(password, this.password);
      return result;
  }
  
}



module.exports = { User };