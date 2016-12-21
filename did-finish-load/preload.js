
var fs = require('fs');
var path = require('path');

for (var i = 0; i < 10000; i++) {
    fs.writeFileSync(path.join(__dirname, './test.text'), '1'.repeat(100000));
}
