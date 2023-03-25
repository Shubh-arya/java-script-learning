// mixin
let cleanRoomMixin = {
     cleanRoom() {
     console.log(`Hello ${this.name}, your room is clean now`);
},
sayBye() {
     console.log(`Bye ${this.name}`);
}
};

// usage:
class User {
     constructor(name) {
          this.name = name;
     }
}

// copy the methods
Object.assign(User.prototype, cleanRoomMixin);

// now User can clean the room
new User("Dude").cleanRoom(); // Hello Dude, your room is clean now!