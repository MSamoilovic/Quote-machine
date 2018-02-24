$(document).ready(function () {
    getQuote();

    var randomQuote;
    var author;
    function getQuote() {
        var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
        $.getJSON(url, function (data) {
            $("#text").html(data.quoteText);
            $("#author").html("-" + data.quoteAuthor);
        });
    };
});