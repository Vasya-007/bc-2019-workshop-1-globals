module.exports = (obj1,obj2,obj3) => {
     let merged = {...obj3,...obj2, ...obj1};
    let newobj = Object.keys(merged).sort().reduce((r, k) => Object.assign(r, { [k]: merged[k] }), {});
    console.log(newobj)
return merged

// Without f1 (deep merge)
}        