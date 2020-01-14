//event saat link diklik
$('.page-scroll').on('click', function(e) {
	
// cek connst code js
// console.log('ok');

// ambil isi href
	var tujuan = $(this).attr('href');
// tangkap elemen
	var elementujuan = $(tujuan);
	console.log(elementujuan.offset().top-100);

	// $('body').scrollTop(elementujuan.offset().top);

// pindah scroll 
	// $('body').animate({
	// 	scrollTop: elemenTujuan.offset().top - 50
	// }, 1000, 'easeInOutExpo');

	// e.preventDefault();

});