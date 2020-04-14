const fs = require('fs')
fs.writeFileSync('text.txt', "Create File by using sync method");
fs.appendFileSync('text.txt',"\nThis is the append value");