 tabs_autolayout();

  function tabs_autolayout() {
    let tabs_list = $('.user-items-list[data-space-below-section-title-value="52"] .user-items-list-simple');
    if ( tabs_list.length ) {
      tabs_list.slick({
        slide: '.list-item',
        slidesToShow: 1,
        fade: true,
        infinite: true,
        dots: true,
        speed: 500,
        arrows: false,
        customPaging : function(slider, i) {
          var title = $(slider.$slides[i]).find('.list-item-content__title').html();
          return '<span class="tab-title">'+title+'</span>';
        }
      });

  
    }
  }