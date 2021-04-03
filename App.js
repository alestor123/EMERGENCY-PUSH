var {execSync} = require('child_process')
module.exports = (msg,origin,branch) => {
try {
execSync(`git add . && git commit -m ' ${msg||'Emergency Push'} ' && git push -u ${origin || 'origin'} ${branch || 'master'}`)
return 'Success'
}
catch(err){
return err.stdout.toString() 
}
}
