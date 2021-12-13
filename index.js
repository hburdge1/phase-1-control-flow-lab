function scuberGreetingForFeet(someThing) {
  let responseToFeet 
  if (someThing <= 400) {
    responseToFeet = 'This one is on me!';
  } else if ((someThing > 2000) && (someThing <= 2500)) {
    responseToFeet = 'I will gladly take your thirty bucks.'
  } else if (someThing > 2500) {
    responseToFeet = 'No can do.'
  }
  return(responseToFeet)
};
  
function ternaryCheckCity(destination) {
  let tellThem
  destination === 'NYC' ? (tellThem = "Ok, sounds good.") : (tellThem = 'No go.' )
  return tellThem;
};

function switchOnCharmFromTip(cashMoney) {
  let Charm ;
  switch (cashMoney) {
    case 'generous' :
    Charm = 'Thank you so much.'
    break ;
    case 'not as generous' :
    Charm = 'Thank you.'
    break ;
    default:
    Charm = 'Bye.'
  }
  return Charm ;
}