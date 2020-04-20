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

