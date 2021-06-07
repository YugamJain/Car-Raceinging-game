class Form{
    constructor(){

        this.title = createElement("h2");
        this.input = createInput("Name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
        this.reset = createButton("reset");

    }

    display(){
       
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-50,0);

  
        this.input.position(displayWidth/2-40,displayHeight/2-80);


        this.button.position(displayWidth/2+80,displayHeight/2);

       
        this. greeting.position(displayWidth/2-70,displayHeight/4);
        this. button.mousePressed( () =>{
            this.  input.hide();
            this.  button.hide();

            player.name = this.input.value();
            this.  greeting.html("Hello " + player.name);

            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
        })
        
        this.reset.position(displayWidth-100,20);
        this.reset.mousePressed(() =>{
             game.update(0);
             player.updateCount(0);
             
        })

    
    }
}