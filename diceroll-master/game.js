$(document).ready(function(){
let score =[0,0];
let roundScore =0;
let activePlayer = 0;
                                                                    //the game starts here
$('#start').click(()=>{
  const dice = Math.floor(Math.random()*6)+1;
  $('.dice').css({display:'block'});
  $('.dice').attr('src','Dice-'+dice+'.png');
  if(dice !== 1)
  {                                                   //the score of active player will be continue untill the dice is equal to 1
      console.log(activePlayer);
     roundScore += dice;
     $('#current-'+activePlayer).html(roundScore);

  }
  else
  {
    activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
    roundScore =0;
    $('#current-0').html(0);
    $('#current-1').html(0);
  }
 }); 
    $('#end').click(function(){
      score[activePlayer] += roundScore;
      $('#score-'+activePlayer).html(score[activePlayer]);
      if(score[activePlayer]>=100){
      $('#name-'+activePlayer).html('Winner');
  }
  else{
    activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
    roundScore =0;
    $('#current-0').html(0)
    $('#current-1').html(0)
  }
}) ;
});