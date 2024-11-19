var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    $( ".list-b li" ).hover(function() {
        //alert($(this).find("img").attr('src'));
        $(".over-screen").css("background-image", "url(" + $(this).find("img").attr('src') + ")");
    });

    
    if ($(window).width() >= 640 && $(window).width() <= 1024 ) {
        $('.block-05 ul').bxSlider({ 
            pager: true, 
            controls: false, 
            useCSS: false, 
            adaptiveHeight: true, 
            minSlides: 1, 
            maxSlides: 3, 
            slideWidth: $(window).width()/2 
        });
    } else if($(window).width() < 640) {
        $('.block-05 ul').bxSlider({ 
            pager: true, 
            controls: false, 
            useCSS: false, 
            adaptiveHeight: true, 
            minSlides: 1, 
            maxSlides: 3, 
            slideWidth: $(window).width()/1 
        }); 
    }
    else {
        $('.block-05 ul').bxSlider({ 
            pager: true, 
            controls: false, 
            useCSS: false, 
            adaptiveHeight: true, 
            minSlides: 1, 
            maxSlides: 3, 
            slideWidth: $(window).width()/3 
        }); 
    }
    
    // $('.block-05 ul').wrapInner('<div class="inner"></div>');
    // $('.block-05 ul').each(function(){ 
    //     $(this).addClass('regular-hide').clone().removeClass('regular-hide').addClass('regular-only').insertAfter($(this));
    //     $(this).addClass('regular-hide').clone().removeClass('regular-hide').addClass('tablet-only').insertAfter($(this));
    //     $(this).addClass('regular-hide').clone().removeClass('regular-hide').addClass('mobile-only').insertAfter($(this));

    //     if($(this).hasClass('regular-hide')){ 
    //         $(this).bxSlider({ 
    //             pager: true, 
    //             controls: false, 
    //             useCSS: false, 
    //             adaptiveHeight: true, 
    //             minSlides: 1, 
    //             maxSlides: 3, 
    //             moveSlides: 3, 
    //             slideWidth: $(window).width()/3 
    //         }); 
    //     }
    //     if($(this).hasClass('regular-only')){ 
    //         $(this).bxSlider({ 
    //             pager: true, 
    //             controls: false, 
    //             useCSS: false, 
    //             adaptiveHeight: true, 
    //             minSlides: 1, 
    //             maxSlides: 2, 
    //             moveSlides: 2, 
    //             slideWidth: $(window).width()/2 }); 
    //     }
    //     if($(this).hasClass('tablet-only') || $(this).hasClass('mobile-only')){ 
    //         $(this).bxSlider({ 
    //             pager: true, 
    //             controls: false, 
    //             useCSS: false, 
    //             adaptiveHeight: true }); 
    //     }
    // });
    // $(".block-05 ul").bxSlider({ 
    //     pager: true, 
    //     controls: false, 
    //     useCSS: false, 
    //     adaptiveHeight: true, 
    //     minSlides: 1, 
    //     maxSlides: 3, 
    //     moveSlides: 3, 
    //     slideWidth: $(window).width()/3 
    // }); 

    $(".slider-a").bxSlider({  
        pager: false, 
        controls: true, 
        useCSS: false, 
        adaptiveHeight: true 
    }); 



    $('.block-04').addClass('unscrolled').each(function(){ 
        $(this).waypoint(function() { 
            $(this).addClass('shown');
        }, { offset: '65%' }); 
    });


    $('#top').each(function(){ $(this).clone().attr('id','clone').insertAfter('#featured, #welcome').find('#nav').removeAttr('id').parent().find('#skip').remove(); });
    $(window).each(function(){ 
        $(this).waypoint(function() { 
            $('#clone').toggleClass('active');
        }, { offset: -$('#featured, #welcome').outerHeight() }); 
    }); 

    $(".block-05 li .overlay").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
    });

    $('.form-a input, .form-a textarea, .search-a input, #contact input, #contact textarea, .form-b input').each(function(){
        if($(this).val() !== '') $(this).parent().children('label').css('margin-top','-3000em');
    }).on('focus',function(){
        $(this).parent().children('label').css('margin-top','-3000em');
    }).on('blur',function(){
        if($(this).val() === '') $(this).parent().children('label').css('margin-top',0);
    });


    $('#top').append('<div class="fit-a"><div></div></div>')
    $(".fit-a").remove().insertAfter("#top #nav");
    $('#top .fit-a').on('click',function(){ $(this).parent().toggleClass('active'); });


    ////// Gooogle Map
    $('#contact').append('<div class="map" id="mapa"></div>');
    
    if($('#mapa').size()){                                                          
        var mapa, styledMap, mapOptions, styles, markerOpts, infowindow;                    
        var styles = [{
            featureType: 'landscape',
            stylers: [{
                saturation: -100
            },{
                lightness: 65
            },{
                visibility: 'on'
            }
        ]
        },{
            featureType: 'poi',
            stylers: [{
                saturation: -100
            },{
                lightness: 51
            },{
                visibility: 'off'
            }
        ]
        },{
            featureType: 'road.highway',
            stylers: [{
                saturation: -100
            },{
                visibility: 'simplified'
            }
        ]
        },{
            featureType: 'road.arterial',
            stylers: [
                {
                    saturation: -100
                },{
                    lightness: 30
                },{
                    visibility: 'on'
                }
            ]
        },{
            featureType: 'road.local',
            stylers: [
                {
                    saturation: -100
                },{
                    lightness: 40
                },{
                    visibility: 'on'
                }
            ]
        },{
            featureType: 'transit',
            stylers: [
                {
                    saturation: -100
                },{
                    visibility: 'simplified'
                }
            ]
        },{
            featureType: 'administrative.province',
            stylers: [
                {
                    visibility: 'off'
                }
            ]
        },{
            featureType: 'water',
            elementType: 'labels',
            stylers: [
                {
                    visibility: 'on'
                },{
                    lightness: -25
                },{
                    saturation: -100
                }
            ]
        },{
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
                {
                    hue: '#ffff00'
                },{
                    lightness: -25
                },{
                    saturation: -97
                }
            ]
        }];         
        styledMap = new google.maps.StyledMapType(styles,{ name: 'Styled Map' });
        mapOptions = {
            zoom: 16,
            center: new google.maps.LatLng(51.5073509,-0.12775829999998223),
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            disableDefaultUI: true,
            draggable: true,
            zoomControl: false, 
            scrollwheel: false, 
            disableDoubleClickZoom: false,
            mapTypeControlOptions: {
                mapTypeIds: [ google.maps.MapTypeId.ROADMAP, 'map_style' ]
            }
        };
        mapa = new google.maps.Map(document.getElementById('mapa'), mapOptions);            
        
        mapa.mapTypes.set('map_style', styledMap);
        mapa.setMapTypeId('map_style');
        markerOpts = {
            position: new google.maps.LatLng(51.5073509,-0.12775829999998223),
            map: mapa,
            icon: 'images/pin-theme-a.png'
        } 
        new google.maps.Marker(markerOpts);             
    }
    
    
});