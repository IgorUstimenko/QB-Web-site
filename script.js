// Скрипт для отправки форм
$(document).ready(function () {

	//Заявка о сайте
	$(".main-form").submit(function () {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function () {
			$('#thanks-modal').modal();
			setTimeout(function () {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	// Заявка со страницы кейсов
	$(".callback-form").submit(function () {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function () {
			$('#thanks-modal').modal();
			setTimeout(function () {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	// Подписка на рассылку
	$(".sending-request").submit(function () {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	// Подписка на рассылку на телефоне
	$(".mobile-sub-on-our-sending-form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	// Отправка формы о сайте на телефоне
	$(".main-mobile-form").submit(function () {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function () {
			$('#mobile-success-modal').modal();
			setTimeout(function () {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


});



// Скролл до страницы кейсов

const casesPage = document.getElementById('mobile-our-works-page');
const AgecnyPage = document.getElementById('mobile-blossom-agansy-page');
let DownArrow = document.getElementById('mobile-down-arrow');
let GetToKnow = document.getElementById('get-to-know-block');

DownArrow.addEventListener('click', function () {
	casesPage.scrollIntoView({
		behavior: "smooth"
	});
});

GetToKnow.addEventListener('click', function () {
	AgecnyPage.scrollIntoView({
		behavior: "smooth"
	});
});



// // Скрол на экран ниже
// const SecondPage = document.getElementById('SecondPage');
// let MainPageBtn = document.getElementById('main-page-down-arrow');
// MainPageBtn.addEventListener('click', function () {
// 	SecondPage.scrollIntoView({
// 		behavior: "smooth"
// 	});
// });

// // Скролл до BlossomIT

// const BlossomItPage = document.getElementById('blossom-agancy-page');
// let GetToKnowBtn = document.getElementById('GetToKnowBtn');
// GetToKnowBtn.addEventListener('click', function () {
// 	BlossomItPage.scrollIntoView({
// 		behavior: "smooth"
// 	});
// });