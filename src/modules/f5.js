module.exports = (object,string,number) => {
    let newstr = string.split('.')
   // let newstr1 = string.split('.')
    let emptyArray = ['object']
    newstr.forEach((el,ind) => {
        emptyArray[ind+1] = `[newstr[${ind}]]`
             if (ind = Object.keys(newstr).length) {
                emptyArray[ind+1] = '=number'
             }
    });
 let string1 = emptyArray.join('')
 
  /*  function addKeys(objectt)
   {
        if (eval(string1)  ) {
            return  objectt
          } else { eval(string1 = null)
        addKeys()}

    }
    addKeys(string1) */
   // object[newstr[0]][newstr[1]][newstr[2]][newstr[3]][newstr[4]] = 5 
    console.log(string1)
   eval(string1)
    return object 
}
        