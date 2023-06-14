var sum = 0
let stoploop = false
var ave = 0


while (true) {
    let num = Number (prompt (`Please enter a number`))
    let key = (num == -1)
    
switch (key) {
    case false: 
        sum = num + sum
        ave ++
    
break

    case true:
    let total = (sum / ave)
    stoploop = true
    alert (`the average is ${total}`)
break}
   

    if (stoploop) {
        break
    }
}
