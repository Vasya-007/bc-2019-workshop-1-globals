module.exports = (arrayLeft,arrayRight) => {
    console.log(arrayLeft,arrayRight)
    let empty = []
    let emptySet = new Set()
    arrayLeft.forEach((element, ind) => {
    arrayRight.find(ele => {
        if (ele===element) {
        empty.push(element)
        }
    })
    });
    empty.map((el,id) =>
    {
     emptySet.add(el)
    })
    console.log(emptySet)
    return Array.from(emptySet)
    }