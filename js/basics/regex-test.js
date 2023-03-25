const string1 = "Shubham Arya arya\
Payal arya\
neha arya"
console.log(string1.match(/Arya+/gi))
const matches = string1.match(/(shubham | Arya)/gim)
console.log(matches)

console.log("good morning john".match(/\w\S*/g))

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
toTitleCase("good morning john"); // Good Morning John


let regexp = /Hello(\d+)/g;
let greeting = 'Hello110Hello210Hello310';

let greetingList = [...greeting.matchAll(regexp)];

console.log(greetingList[0]); //Hello1
console.log(greetingList[1]); //Hello2
console.log(greetingList[2]); //Hello3


function remove_linebreaks(message ) {
    return message.replace( /[\r\n]+/gm, "" );
}

console.log("DocStudio:ColumnConfig:T4".match(/:T(\d+)*/g))
console.log("good morning john".match(/\w\S*/g))