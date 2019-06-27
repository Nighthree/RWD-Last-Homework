$(document).ready(function () {
    /*選單開關*/
    $('.hamburger').click(function (e) { 
        $('.header').toggleClass('show');
    });
    $('.listList').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
    });
    $('.fa-heart').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('far');
        $(this).toggleClass('fas');
    });
});