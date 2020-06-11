$('#carouselExampleCaptions').on('slide.bs.carousel', function() {
    $('.youtube_video_player:visible').each(function() {
        let video_player = $(this);
        let url = video_player.attr('src');
        video_player.attr('src', url);
    })
})

archivio.video.reverse().forEach(video => {
    let slide = '<div class="carousel-item">' +
        '<iframe class="d-block col-10 col-md-7 mx-auto youtube_video_player" width="560" height="315" src="' + video.url + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
        '<div class="carousel-caption d-none d-md-block">' +
        '    <h5>' + video.titolo + '</h5>' +
        '    <p class="text-justify">' + video.descrizione + '</p>' +
        '</div></div>';
    $('.carousel-inner').append(slide)

});

$('.carousel-item').eq(0).addClass('active');