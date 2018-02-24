function getQuote() {
    var randomQuote = '';
    var author = ""
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"]
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"

    $.getJSON(url, function (data) {
        randomQuote = data.quoteText;
        author = data.quoteAuthor;

        console.log(randomQuote);

        $(".text").animate({
            opacity: 0
        }, 500, function () {
            $(this).animate({
                opacity: 1
            }, 500);
            $('#text').text(randomQuote);
        });

        $('.author').animate({
            opacity: 0
        }, 500, function () {
            $(this).animate({
                opacity: 1
            }, 500);
            $('#author').text(author)
        })

        var color = Math.floor(Math.random() * colors.length);

        console.log(colors[color]);

        $('body').animate({
            backgroundColor : colors[color],
            color : colors[color] 
        }, 1000);

        $('.button').animate({
            backgroundColor : colors[color]
        }, 1000);

        $('#quote_tw').attr('href', "https://twitter.com/intent/tweet?text=" + randomQuote  +  author);
        $('#tmblr_quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+ encodeURIComponent(author) +'&content='+ encodeURIComponent(randomQuote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button')
    })

}


$(document).ready(function () {
    getQuote();

    $('#new_quote').on('click', getQuote);
})