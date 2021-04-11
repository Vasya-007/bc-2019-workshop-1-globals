module.exports = (arrayLeft,arrayRight) => {
console.log(arrayLeft,arrayRight)
//let empty =[null,null,null]
arrayLeft.forEach((element, ind) => {
arrayRight.find(ele => {
    if (ele===element) {
    arrayLeft[ind]= null
    }
})
});
console.log(arrayLeft.filter(Boolean))
return Array.from(arrayLeft.filter(Boolean))
}