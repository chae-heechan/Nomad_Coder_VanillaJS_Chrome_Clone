
const player = {
    name: "chae",
    sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName);
    },
};

player.sayHello(player.name);
player.sayHello("gom");