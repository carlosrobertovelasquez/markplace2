export let BackgroundImage = {
  fnc: function () {
    var databackground = $('[data-background]');
    databackground.each(() => {
      if ($(this).attr('data-background')) {
        var image_path = $(this).attr('data-background');
        $(this).css({
          background: 'url(' + image_path + ')',
        });
      }
    });
  },
};
