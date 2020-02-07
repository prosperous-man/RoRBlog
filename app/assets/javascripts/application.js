// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery.min
//= require jquery-migrate.min
//= require jquery_ujs
//= require bootstrap/js/bootstrap.min
//= require back-to-top
//= require fancybox/source/jquery.fancybox.pack
//= require owl.carousel/owl.carousel.min
//= require layout
//= require bs-carousel
//= require_tree .

jQuery(document).ready(function() {
    Layout.init();
    Layout.initOWL();
    Layout.initTwitter();
    //Layout.initFixHeaderWithPreHeader(); /* Switch On Header Fixing (only if you have pre-header) */
    //Layout.initNavScrolling();
});