
// 过滤方法
let filter = function(num){
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

console.log(filter(2000))

