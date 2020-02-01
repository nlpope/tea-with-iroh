$(document).ready(function() {
  var randomQuote;
  var randomNum;
  var quotes;
  var author=" -Iroh";
  function getQuote() {
    quotes = [
      '"Protection and power are overrated. I think you are very wise to choose happiness and love. There are reasons each of us are born. we have to find those reasons."',
      '"Sometimes life is like this dark tunnel, you can’t always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place."',
      '" Pride is not the opposite of shame, but it’s source. True humility is the only antidote to shame."',
      '"Life happens wherever you are, whether you make it or not."',
      '"Sick of tea? That’s like being sick of breathing!"',
      '" While it is always best to believe in one’s self, a little help from others can be a great blessing."',
      '"You must never give into despair. Allow yourself to slip down that road and you surrender to your lowest instincts. In the darkest times, hope is something you give yourself. That is the meaning of inner strength."',
      '"A man needs his rest."',
      '" It is usually best to admit mistakes when they occur, and to seek to restore honor."',
      '"Is it your own destiny? Or is it a destiny someone else has tried to force on you?"',
      '"Sometimes the best way to solve your own problems is to help someone else."',
      '"Many things that seem threatening in the dark Become welcoming when we shine light on them."'
    ];

    randomNum = Math.floor(Math.random() * quotes.length);
    randomQuote = quotes[randomNum];

    $(".quote").text(randomQuote);
  }
  $("#tweet-out").on("click", function() {
    if($('.quote').text().length === 0){
      alert('Please click on Iroh to find a quote to tweet');
    } else {
      window.open("https://twitter.com/intent/tweet?text=" + randomQuote + author);
    }
  });
  $(".newQuote").on("click", function() {
    getQuote();
  });
});
