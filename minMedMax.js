const { template } = require('@babel/core')

function minMedMax(num1, num2, num3) {
  const numberr = {num1, num2, num3}
  let minn = numberr[0]
  let medd = numberr[0]
  let maxx = numberr[0]

// for(value of numberr){
if (numberr < minn) {
  return minn = numberr
}


  else if ( numberr > maxx){
    return maxx = numberr
  }

 else {
return medd = numberr
  }
 


}
module.exports = minMedMax

