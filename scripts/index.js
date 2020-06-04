$('#carouselExampleCaptions').on('slide.bs.carousel', function() {
    $('.youtube_video_player:visible').each(function() {
        let video_player = $(this);
        let url = video_player.attr('src');
        video_player.attr('src', url);
    })
})