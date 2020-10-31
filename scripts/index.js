$('#carouselExampleCaptions').on('slide.bs.carousel', function() {
    
        $('.youtube_video_player:visible').each(function() {
            let video_player = $(this);
            let url = video_player.attr('src');
            video_player.attr('src', url);

            let c_item = this.parentElement
            let c_caption = c_item.querySelector('.carousel-caption')
            riduci(c_caption)
        })
})
var i = 0;
archivio.video.reverse().forEach(video => {

    let slide = '<div class="carousel-item">' +
        '<iframe class="d-block col-10 col-md-7 mx-auto youtube_video_player" width="560" height="315" src="' + video.url + '?rel=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
        '<div class="carousel-caption">' +
        '    <h5>' + video.titolo + '</h5>' +
        '    <p class="text-justify" style="white-space: pre-line;" id="desc-'+i+'">' + showMore(video.descrizione) + '</p>' +
        '</div></div>';

    $('.carousel-inner').append(slide)

    let indicator = '<li data-target="#carouselExampleCaptions" data-slide-to="' + i + '"></li>'
    i++;
    $('.carousel-indicators').append(indicator)

});

$('.carousel-item').eq(0).addClass('active');
$('.carousel-indicators').find('li').eq(0).addClass('active');

function showMore(longText, max = 200) {
    
    if(longText.length < max) {
        return longText;
    }
    else {
        var testo = longText.substr(0, max) + "<span class='d-none'>" + longText.substr(max) + "</span>" + "<span class='ellipsis'>...</span>";
        var showMore = `<p class="show-more" onclick="espandi(this)">Mostra altro</p>`;
        var showLess = `<p class="show-more" style="display: none" onclick="riduci(this)">Mostra meno</p>`;
        testo += showMore + showLess
        return testo
    }

}

function espandi(elem) {
    var parent = elem.parentElement
    var parrafo = parent.getElementsByTagName('p')[0]
    var mostra = parent.getElementsByTagName('p')[1]
    var nascondi = parent.getElementsByTagName('p')[2]
    var ellipsis = parent.querySelector('span.ellipsis')
    var hiddenSpan = parrafo.getElementsByTagName('span')[0]
    hiddenSpan.classList.remove('d-none')
    ellipsis.style.display = 'none'
    mostra.style.display = 'none'
    nascondi.style.display = ""

}

function riduci(elem) {
    var parent = elem.parentElement
    var parrafo = parent.getElementsByTagName('p')[0]
    var mostra = parent.getElementsByTagName('p')[1]
    var nascondi = parent.getElementsByTagName('p')[2]
    var ellipsis = parent.querySelector('span.ellipsis')
    var hiddenSpan = parrafo.getElementsByTagName('span')[0]

    hiddenSpan.classList.add('d-none')
    ellipsis.style.display = ''
    mostra.style.display = ''
    nascondi.style.display = "none"
}