const crypt = require('crypto');
const fs = require('fs');


const GenerateKey=()=>{
    const Token_secret = "TOKEN_SECRET="+crypt.randomBytes(128).toString('hex')
    const envPath = __dirname.replace('functions','.env');
    if (!fs.existsSync(envPath)){
        fs.writeFileSync(envPath,Token_secret);
    }
}

module.exports = GenerateKey