// function
function swalSuccess(title, text, params) {
	Swal.fire({
		icon: 'success',
		title: title,
		text: text,
		showConfirmButton: false,
		timer: '3000'
	}).then((result) => {
		params;
	});
}

function showingNext(subject, intDelay, object) {

	$(subject).fadeOut('slow').delay(intDelay).promise().done(function () {
		$(object).fadeIn('slow');
	});
}


$(window).on('load', function () {

	// matikan turn_on
	$('#turn_on').hide();

	$('#go').on('click', function () {
		// Acara tiket
		var kodeAcara;
		kodeAcara = 'vika08';

		// sweetalert
		Swal.mixin({
			input: 'text',
			inputAttributes: {
				required: 'required'
			},
			validationMessage: 'Kode Acara Tidak Boleh Kosong!',
			confirmButtonText: 'Submit',
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			showCancelButton: true,
		}).queue([{
			title: 'Kode Acara??',
			text: 'Masukkan Kode Acara Yang Telah Diberikan!'
		}]).then((result) => {
			if (result.value) {
				const kodeAcaraTamu = result.value;

				// pengecheckan kode
				if (kodeAcaraTamu[0] == kodeAcara) {
					swalSuccess(
						'Berhasil',
						'Kode Yang Anda Masukkan Benar',
						$('#go').hide(),

						// play 
						$('.loading').fadeOut('fast'),
						$('.container').fadeIn('fast'),
						$('#turn_on').show(),
					);

				} else {
					Swal.fire({
						icon: 'error',
						title: 'Invalid!',
						text: 'Kode Acara Salah!',
						showConfirmButton: false,
						timer: '1800',
					});
				}
			}
		});

	});

	// play 
	$('.loading').fadeOut('fast');
	// $('.tlt').textillate();
	$('.container').fadeIn('fast');

	// Text Animated
	const textHead = document.querySelector('h3');

	function getRandomText(place) {
		// array Text
		const arrayText = ["Selamat Ulang Tahun Vika", "Happy Birthday", "Wish You All The Best", "Website Ultah", "Selamat Menyaksikan", "Vika Regina Situmorang", "My Little Sister", "Hello Vika"];

		// Panjang Array text
		const lenArr = arrayText.length;

		// random angka
		const random1 = Math.floor(Math.random() * lenArr);
		const random2 = Math.floor(Math.random() * lenArr);

		// pengecekan
		if (random1 == random2) {
			if (random1 > random2) {
				place.innerText = arrayText[random1];
			} else {
				place.innerText = arrayText[random2];
			}
		} else {
			getRandomText(place)
		}
	}

	const interval = setInterval(function () {
		getRandomText(textHead);
	}, 1700);
	
});



$('document').ready(function () {
	var vw;
	$(window).resize(function () {
		vw = $(window).width() / 2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b11').animate({
			top: 240,
			left: vw - 350
		}, 500);
		$('#b22').animate({
			top: 240,
			left: vw - 250
		}, 500);
		$('#b33').animate({
			top: 240,
			left: vw - 150
		}, 500);
		$('#b44').animate({
			top: 240,
			left: vw - 50
		}, 500);
		$('#b55').animate({
			top: 240,
			left: vw + 50
		}, 500);
		$('#b66').animate({
			top: 240,
			left: vw + 150
		}, 500);
		$('#b77').animate({
			top: 240,
			left: vw + 250
		}, 500);
	});

	$('#turn_on').click(function () {
		$('.pengantar').hide();
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		showingNext(this, 5000, '#play');
		// $(this).fadeOut('slow').delay(5000).promise().done(function () {
		// 	$('#play').fadeIn('slow');
		// });
	});
	$('#play').click(function () {
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color', '#FFF');
		$('body').addClass('peach-after');
		showingNext(this, 6000, '#bannar_coming');
		// $(this).fadeOut('slow').delay(6000).promise().done(function () {
		// 	$('#bannar_coming').fadeIn('slow');
		// });
	});

	$('#bannar_coming').click(function () {
		$('.bannar').addClass('bannar-come');
		$('body').addClass('bg-decorate');
		showingNext(this, 6000, '#balloons_flying');
		// $(this).fadeOut('slow').delay(6000).promise().done(function () {
		// 	$('#balloons_flying').fadeIn('slow');
		// });
	});

	function loopOne() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b1').animate({
			left: randleft,
			bottom: randtop
		}, 10000, function () {
			loopOne();
		});
	}

	function loopTwo() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b2').animate({
			left: randleft,
			bottom: randtop
		}, 10000, function () {
			loopTwo();
		});
	}

	function loopThree() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b3').animate({
			left: randleft,
			bottom: randtop
		}, 10000, function () {
			loopThree();
		});
	}

	function loopFour() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b4').animate({
			left: randleft,
			bottom: randtop
		}, 10000, function () {
			loopFour();
		});
	}

	function loopFive() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b5').animate({
			left: randleft,
			bottom: randtop
		}, 10000, function () {
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b6').animate({
			left: randleft,
			bottom: randtop
		}, 10000, function () {
			loopSix();
		});
	}

	function loopSeven() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b7').animate({
			left: randleft,
			bottom: randtop
		}, 10000, function () {
			loopSeven();
		});
	}

	$('#balloons_flying').click(function () {
		$('.balloon-border').animate({
			top: -500
		}, 8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();

		showingNext(this, 5000, '#cake_fadein');
		// $(this).fadeOut('slow').delay(5000).promise().done(function () {
		// 	$('#cake_fadein').fadeIn('slow');
		// });
	});

	$('#cake_fadein').click(function () {
		$('.cake').fadeIn('slow');
		showingNext(this, 3000, '#light_candle');
		// $(this).fadeOut('slow').delay(3000).promise().done(function () {
		// 	$('#light_candle').fadeIn('slow');
		// });
	});

	$('#light_candle').click(function () {
		$('.fuego').fadeIn('slow');
		showingNext(this, undefined, '#wish_message');
		// $(this).fadeOut('slow').promise().done(function () {
		// 	$('#wish_message').fadeIn('slow');
		// });
	});


	$('#wish_message').click(function () {

		// ucapan selamat ulang Tahun
		Swal.fire({
			title: 'Happy Birthday',
			text: 'Happy Birthday Vika Situmorang',
			imageUrl: 'bday-312.gif',
			imageAlt: 'Happy Birthday'
		}).then((result) => {
			showingNext(this, 3000, '#story');
		});

	});

	$('#story').click(function () {
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function () {
			$('.message').fadeIn('slow');
		});

		var i;

		function msgLoop(i) {
			$("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function () {
				i = i + 1;
				$("p:nth-child(" + i + ")").fadeIn('slow').delay(1500);
				if (i == 55) {
					$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
						$('.cake').fadeIn('fast');
					});

				} else {
					msgLoop(i);
				}

			});

		}

		msgLoop(0);

	});
});