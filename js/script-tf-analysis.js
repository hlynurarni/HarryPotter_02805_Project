var wc_dict = {
    "wordcloud-dobby": "Dobby_wordcloud.png",
    "wordcloud-harry": "Harry Potter_wordcloud.png",
    "wordcloud-bellatrix": "Bellatrix_wordcloud.png",
    "wordcloud-hermione": "Hermione_wordcloud.png",
    "wordcloud-mcgonagall": "Mcgonagall_wordcloud.png",
    "wordcloud-ron": "Ron_wordcloud.png",
    "wordcloud-snape": "Snape_wordcloud.png",
    "wordcloud-voldemort": "Voldemort_wordcloud.png"
}
var set_wordcloud = function(e) {
    var buttons = document.querySelectorAll('.wordcloud')
    buttons.forEach(function (button) {
        button.className = "btn btn-light wordcloud";
    })
    e.className = "btn btn-light wordcloud active";
    document.getElementById("wordcloud-img").src = "movie_scripts/data/char_images/char_wordclouds/" + wc_dict[e.id];
}