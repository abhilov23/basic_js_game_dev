import kaplay from "kaplay";


//kaplay() => to start the game
const k = kaplay({
    width: 1280, //passing the parameters regarding the game
    height: 720,
    cellSize: 32, //size of each cell

}); //way to initialize the canvas

k.loadBean();
k.setGravity(1000) //to seth the gravity in the game

const player = k.add([ //initializing the player using add thing
    k.sprite("bean"), //using a bean charactor
    k.pos(k.center()), //passing the position of the charactor
    k.area(),
    k.body()
])


player.onKeyPress("space",()=>{ //this will execute when the space will be clicked
  if(player.isGrounded()){ //when the player will be on ground then
    player.jump(500) //way to make the charactor jump
  }
    
})

k.add([
    k.rect(k.width(), 300),
     k.pos(0, 500),
      k.area(),
      k.outline(3),
       k.body({isStatic: true})
    ]);

k.loop(1, ()=>{
    k.add([
        k.rect(50, 50), k.pos(1000, 500),
        k.area(),
        k.body(),
        k.outline(3),
        k.move(k.vec2(-1, 0), 300), //vec2 is useful in terms for direction vec2(x, y)

    ])
})