/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const values={I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
    let total =0

    for(let i=0; i<s.length;i++){
        let presentValue=values[s[i]]
        let nextValue=values[s[i+1]]

        if(nextValue && presentValue<nextValue){
            total-=presentValue
        }
        else{total+=presentValue}
    }
    return total



};