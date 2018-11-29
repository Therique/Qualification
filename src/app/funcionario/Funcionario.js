$(function () {
    var estrelas = $('.star');
    var escolhida = 0;

    function repaint(e) {
        var indice = $(this).index() + 1;
        if (e.type == 'click') escolhida = indice;
        estrelas.removeClass('full');
        var upTo = $(this).hasClass('star-wrapper') ? escolhida : indice;
        estrelas.slice(0, upTo).addClass('full');
    }

    $('.star-wrapper').on('mouseleave', repaint);
    estrelas.on('mouseenter mouseleave click', repaint);
});