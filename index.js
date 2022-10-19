const core = require('@actions/core')
var fs = require('fs') 

try {
    const file_path = core.getInput('file')
    const find = core.getInput('find')
    const replace = core.getInput('replace')
} catch (error) {
    core.setFailed(error.message)
}


fs.readFile(file_path, 'utf8', function (err, data) {
  if (err) {
    core.setFailed(error.message)
    return 0
  }
  var result = data.replace(find, replace);

  fs.writeFile(file_path, result, 'utf8', function (err) {
     if (err){
         core.setFailed(error.message)
         return 0
     }
  });
});
