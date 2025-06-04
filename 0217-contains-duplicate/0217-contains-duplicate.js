const containsDuplicate =(nums)=>{
    const duplicate = new Set()
    for (let index of nums){
        if(duplicate.has(index)){
            return true
        }
        duplicate.add(index)
    }
    return false
}