//call function -> works on a function but takes comma seperated parameters.
const person1 = { name: "Shubham", surname: "Arya" };
const person2 = { name: "payal", surname: "Arya" };

function greet(message1, message2) {
  console.log(message1 + " " + this.name + " " + this.surname + " " + message2);
}

greet.call(person1, "Hello", "How are You?");
greet.call(person2, "Hello", "All Ok?");

// Apply does the same as of call, the only difference is that along with this, you have to pass the variables as a array
function askToMeet(message1, message2) {
  console.log(message1 + " " + this.name + " " + this.surname + " " + message2);
}

askToMeet.apply(person1, ["Hi", "When can we meet?"]);
askToMeet.apply(person2, ["Hello", "Please suggest your free time to meet?"]);

// Unlike bind define a new function which should be called to get the desired result.

function invite(message1, message2){
    console.log(message1 + " " + this.name + " " + this.surname + " " + message2);
}
const person1Invite = invite.bind(person1)
const person2Invite = invite.bind(person2)

person1Invite("Hi", "Please come to Hard Rock cafe by 5PM")
person2Invite("Hi", "Lets meet at BARBQNATIONS for dinner at 8PM")