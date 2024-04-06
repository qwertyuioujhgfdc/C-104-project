
var y = Math.floor(Math.random() * 10 + 1);

var x = document.getElementById("guessField").ariaValueMax;

if(x == y)
    {
      alert("CANGRATULATION!!!"+playername+"  YOU GUSSES IT RIGHT IN" + GUESS + " GUESS");
      guess= 1;
    }

    else if(x > y)

{
    guess++;
    alert("OOPS SORRY !! TRY A SMALLER NUMBER ");
}
else
{
    guess++;
    alert("OOPS SORRY !! TRY A GREATER NUMBER")
}

function playAgain(){
    y Math.floor(Math.random() * 10 + 1);
}