$(document).ready(function() {

//select
$('.popup__select span, .cart__select span').click(function() {
	$(this).next().slideToggle(200);
});
$('.popup__select li, .cart__select li').click(function() {
	var sel_val = $(this).text();
	$(this).parent().prev().html(sel_val+'<i></i>');
	$(this).parent().slideUp(200);
});
$('.selectichok span').click(function() {
	if (!$(this).parent().parent().hasClass('active')) {
		$(this).parent().parent().addClass('active');
		$(this).next().slideDown(200);
	}
	else {
		$(this).parent().parent().removeClass('active');
		$(this).next().slideUp(200);
	};	
});
$('.selectichok li').click(function() {
	var sel_val = $(this).text();
	$(this).parent().prev().html(sel_val+'<i></i>');
	$(this).parent().slideUp(200);
	$(this).parent().parent().parent().removeClass('active');
});

//go-top
$('.go-top').click(function() {
	$('body').scrollTo(0, 600);
});

});