// caputring groups and backreferencing

let data = "2018-3-9"

let reg = /^(\d\d\d\d)([-./])(\d{1,2})\2(?:\d{1,2})/

let arr = reg.exec(data), year, month, date;

if (reg.test(data)) {
    year = arr[1]
    month = arr[2]
    day= arr[3]
}else {
    console.log("wrong format")
}

// lookahead groups

let data2 = "https://altthingsjavascript.com http://google.com yahoo.com"

let reg2 = /\w+(?=\.com)/g

let arr2 = data2.match(reg2)


// Iterate through the data provided. Use a regular expression to store the names 
// in a new array but change the order of the name 
// so first name is listed first and last name is listed last

let data3 = ["Jensen, Dale", "Smith, Andrea", "Jorgensen, Micheal", "Vasefi, Annika", "Lopez, Monica", "Crcokett, Steven"]

let reg3 = /(\w+) (\w+)/;
let newData = data3.map(name => {
    console.log(name.replace(/(\w+), (\w+)/, "$2 $1"))
})

// a generic password regex

let password="N2RN3/>zvd"

let theLength = /^.{8,32}$/
let upper = /^[A-Z]/
let lower = /^[a-z]/
let numbers = /[0-9]/
let special = /[^0-9A-Za-z]/

