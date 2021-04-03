var {execSync} = require('child_process')
module.exports = (msg,origin,branch) => {
try {
execSync(`git add . && git commit -m ' ${msg||'Emergency Push'} ' && git push -u ${origin || 'origin'} ${branch || 'master'}`)
}
catch(err){
console.log('We Got A Problem')
console.log(err.stderr.toString()) 
}
}
