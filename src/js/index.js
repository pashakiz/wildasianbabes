import * as $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import '@scss/main.scss'
import 'owl.carousel'

$(function() {

    $(document).ready(function() {

        //preloader
        setTimeout(function() {
            let preloader = $('#page-preloader');
            if ( !preloader.hasClass('done') ) {
                preloader.addClass('done');
            }
        }, 1000);

        //mobile menu expand
        $('.header').on('click', '.header__nav-toggle', function(){
            let header_menu = $(this).closest('.header').find('.header-menu');
            if ( $('.header').hasClass('expand') ) {
                header_menu.slideUp(300);
                setTimeout(function() {
                    $('.header').removeClass('expand');
                }, 300);
            } else {
                header_menu.slideDown(300);
                $('.header').addClass('expand');
            }
        });

        //upload photo
        $('.custom-file-input').on('change', function(){
            let imageUrl = 'img/photos/ava.jpg';
            $('.profile-photo').css('background-image', 'url(' + imageUrl + ')');
        });

        //slider (Profile gallery) for mobile
        $('.owl-carousel.user-profile-slider').owlCarousel({
            items: 1,
            dots:true
        });

        owlDotsBeauty('.user-profile-slider');

        //slider (Profile gallery) for desktop
        $('.owl-carousel.user-list_slider').owlCarousel({
            loop: true,
            dots: true,
            items: 2,
            margin: 25,
            autoWidth: true,
            responsive:{
                1200:{
                    margin: 25
                },
                1500:{
                    dots: false,
                    margin: 50
                },
                1920:{
                    dots: false,
                    margin: 148
                }
            }
        });

        //slider (user_list extra) for mobile only
        owlInit('.user-list-extra');

    });

    //count all items and change margins if many
    function owlDotsBeauty(el_class) {
        let userProfileSliderItems = document.querySelectorAll(el_class + ' .owl-dot').length;
        console.log('userProfileSliderItems', userProfileSliderItems);
        if (userProfileSliderItems > 9 && userProfileSliderItems < 16) {
            document.querySelector(el_class).classList.add('user-profile-slider_many-items1');
        }
        if (userProfileSliderItems > 15) {
            document.querySelector(el_class).classList.add('user-profile-slider_many-items2');
        }
    }

    //init owl carousel for custom screen width
    function owlInit(el_class) {
        if (window.innerWidth < 1200) {
            $(el_class).addClass('owl-carousel');
            $('.owl-carousel' + el_class).owlCarousel({
                loop: true,
                dots: true,
                items: 2,
                margin: 22,
                autoWidth: true
            });
        } else {
            $('.owl-carousel' + el_class).owlCarousel('destroy');
            $(el_class).removeClass('owl-carousel');
        }
    }

    $(window).resize(function() {
        owlInit('.user-list-extra');
    });

});