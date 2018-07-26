/* JAVASCRIPT CODES */
//ON STAGE READY
$( function() {
  // !selectors
  var el_main = {
      win:                $( window ),
      header:             $( '#pageHeader' ),
      logoDesk:           $( '#logoDesktop' ),
      nav:                $( '#in-nav-menu' ),
      navToggle:          $( '.navbar-toggle' ),
      wrapper:            $( '.wrapper' ),
      carousel:           $( '.carousel' ),
      nav_menu:           $( '.nav_menu' ),
      contentheader:      $( '.content-page-header' ),
  }

  //scroll

  var posHeader = el_main.header.offset().top;

  el_main.win.on( 'scroll', function( e ) {
      var posScroll = $( this ).scrollTop();

      if ( posScroll > ( posHeader + 25 ) ) {
          el_main.logoDesk.addClass( 'logo-desktop--active' );
          el_main.logoDesk.addClass( 'fadeOut' );
          el_main.nav_menu.addClass( 'nav-menu--active' );
          el_main.contentheader.addClass( 'content-page-header--active' );
      } else {
          el_main.logoDesk.removeClass( 'logo-desktop--active' );
          el_main.logoDesk.removeClass( 'fadeOut' );
          el_main.nav_menu.removeClass( 'nav-menu--active' );
          el_main.contentheader.removeClass( 'content-page-header--active' );
      }
  } );

  //navmenu
  el_main.navToggle.on('click', function(){
      el_main.sectionSearch.removeClass('active');
  });

  //SLIDER HOME
  el_main.carousel.carousel({
      interval: 4000
  });

} );
