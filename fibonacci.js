const fibonacci = function(n){
  
  const sequence = [0, 1]

  if(n === 0){
    return sequence[0]
  } else if(n === 1){
    return sequence[1]
  }
  
  for(let i = 2; i <= n; i++){
   let nextNumber = sequence[i - 1] + sequence[i - 2] // 1 + 0 / 1 + 1 / 2 + 1 / 3 + 2
   sequence.push(nextNumber)
  }
  return sequence[n]
}

// Do not edit below this line
module.exports = fibonacci;