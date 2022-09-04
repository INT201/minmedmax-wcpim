const { template } = require('@babel/core')

function minMedMax(num1, num2, num3) {
  const numberr = {num1, num2, num3}
  let minn = numberr[0]
  let medd = numberr[0]
  let maxx = numberr[0]

for(const value of numberr){
if (numberr < minn) {
  return minn = numberr
}
}
for(const value of numberr){
  if ( numberr > maxx){
    return maxx = numberr
  }
}
for(const value of numberr){
 if (value != maxx && value != minn) { 
return medd = numberr}
  if (numberr = maxx) {
    return medd = numberr}
    if (numberr = minn) {
      return medd = numberr}
}


}
module.exports = minMedMax

