module.exports = (object,string) => {
let newstr = string.split('.')
newstr.pop()
let qwe =newstr.join('.')
const res =Object.values(eval(`object.${qwe}`))
//return object[newstr[0]][newstr[1]][newstr[2]])
if (res[0]) {
    return res[0]
} else {
    return console.log(undefined) 
}
  
}
    