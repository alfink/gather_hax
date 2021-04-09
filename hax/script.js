
init = false
interv = setInterval(function() {
    gameSpace.onRing = function () {gameSpace.chat("dont ring me!","LOCAL_CHAT")};
    if (!init && gameSpace.locationInitialized){
        document.addEventListener("keydown", function(event){
            console.log(event.key);
            var x = 0;
            var y = 0;
            switch (event.key) {
                case "i":
                    y-=1;
                    break;
                case "j":
                    x-=1;
                    break;
                case "k":
                    y+=1;
                    break;
                case "l":
                    x+=1;
                    break;
                default:
                    return true;
            }
            x += gameSpace.prevPlayerCoords.x;
            y += gameSpace.prevPlayerCoords.y;
            gameSpace.teleport(x,y);
            console.log(x,y)
            return false;
        });
        init = true;
    }
}, 2000);