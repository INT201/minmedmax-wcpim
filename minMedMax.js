const { template } = require('@babel/core')

function minMedMax(num1, num2, num3) {
  const numberr = [num1, num2, num3]
  let minn = numberr[0]
  let medd = numberr[0]
  let maxx = numberr[0]

for(const value of numberr){
if (value < minn) {
  return minn = value
}
}
for(const value of numberr){
  if ( value > maxx){
    return maxx = value
  }
}
for(const value of numberr){
 if (value != maxx && value != minn) { 
return medd = value}

if(num1 === num2){
    medd = num1
}

if(num1 === num3){
    medd = num1
}

if(num2 === num3){
    medd = num2
}
}
return {min: minn, mid: medd, max: maxx};

}
module.exports = minMedMax

