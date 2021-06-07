counter = 0
color = 'white'
size = 350
countText = text(904,672)
soccerball = stamp('@ball1',100)
net = stamp('soccernet',384,100,size)
reset()
fill('grass')
text('This is an open source soccer type game.',15,512,40,'lightblue')
start = stamp('start2',384,600,275)
start.tap = startButton
size = 350
function startButton()
{
  reset()
  fill('futbolfield')
	net = stamp('soccernet',384,100,size)
	soccerball = stamp('ball1',100)
	countText = text(counter,672,985,100,'white')
}
function touching()
{
  soccerball.move(x,y,1000)
}

i = 0
function loop()
{
	i += .2+counter*.01
  net.move(Math.sin(i)*200+386,100)
	if( soccerball.hits('soccernet'))	
	{
    soccerball.move(386,512)
 		//stamp('ball')
    counter++
    countText.change(counter)
	}
if (counter == 5)
{
 net.size(150)
 countText.change('')
 countText = text(counter,672,985,100,'bluegreen')
}

if (counter == 10)
{
 net.size(100)
 countText.change('')
 countText = text(counter,672,985,100,'red')
}  
  
if (counter == 15)
{
  reset()
  fill('black')
  stamp('@wow')
}
  
  if (offscreen(soccerball)) {
    (soccerball.move(376,512))
  }




}//end of loop function


