for(let a=0;a<10;a++){
        setTimeout(function(){
            console.log(a);
        },0)
}

var myObject = {
        foo: "bar",
        func: function() {
            var self = this;
            console.log(this.foo);
            console.log(self.foo);
            (function() {
                console.log(this.foo);
                console.log(self.foo);
            }());
        }
    };
    myObject.func();