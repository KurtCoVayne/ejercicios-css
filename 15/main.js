const c1 = document.getElementById('canvas1');
const papel1 = c1.getContext('2d');
const lineal1 = papel1.createLinearGradient(0, 200, 200, 0);
lineal1.addColorStop(0.6, 'red');
lineal1.addColorStop(0.4, 'green');
papel1.fillStyle = lineal1;
papel1.fillRect(0, 0, 400, 400);

const c4 = document.getElementById('canvas4');
const papel4 = c4.getContext('2d');
const lineal2 = papel4.createLinearGradient(0, 0, 0, 400);
lineal2.addColorStop(0.6, 'red');
lineal2.addColorStop(0.4, 'yellow');

const c3 = document.getElementById('canvas3');
const papel3 = c3.getContext('2d');
const radial1 = papel3.createRadialGradient(0, 0, 55, 0, 0, 500);
radial1.addColorStop(0, 'yellow');
radial1.addColorStop(1, 'blue');
papel3.fillStyle = radial1;
papel3.fillRect(0, 0, 400, 400);

const c2 = document.getElementById('canvas2');
const papel2 = c2.getContext('2d');
const radial2 = papel2.createRadialGradient(200, 200, 200, 0, 0, 400);
radial2.addColorStop(0.7, 'red');
radial2.addColorStop(0.3, 'blue');
papel2.fillStyle = radial2;
papel2.fillRect(0, 0, 400, 400);

const imagen1 = new Image();
imagen1.src =
	'https://res.cloudinary.com/kurtcovayne4/image/upload/v1622922718/896cb7994f825c07ccdefab31ca94e49_cavjhw.webp';

imagen1.onload = function () {
	papel1.drawImage(imagen1, 75, 75, 250, 250);
	setInterval(dibujar3, 30);
};

const imagen2 = new Image();
imagen2.src =
	'https://res.cloudinary.com/kurtcovayne4/image/upload/v1622922699/kawaii-pizza_yrzaxg.webp';

imagen2.onload = function () {
	papel2.drawImage(imagen2, 75, 75, 250, 250);
	setInterval(dibujar4, 30);
};
let papel4ImagenDireccionX = 1;
let papel4ImagenX = 75;
let papel4ImagenY = 75;

function dibujar4() {
	papel4.clearRect(0, 0, c4.width, c4.height);
	papel4.fillStyle = lineal2;
	papel4.fillRect(0, 0, c4.width, c4.height);
	papel4.drawImage(imagen2, papel4ImagenX, papel4ImagenY, 250, 250);
	if (papel4ImagenX + 250 >= c4.width) {
		papel4ImagenDireccionX = -1;
	}
	if (papel4ImagenX <= 0) {
		papel4ImagenDireccionX = 1;
	}
	papel4ImagenX += 5 * papel4ImagenDireccionX;
}

let papel3ImagenDireccionY = 1;
let papel3ImagenX = 75;
let papel3ImagenY = 75;

function dibujar3() {
	papel3.clearRect(0, 0, c3.width, c3.height);
	papel3.fillStyle = lineal1;
	papel3.fillRect(0, 0, c3.width, c3.height);
	papel3.drawImage(imagen1, papel3ImagenX, papel3ImagenY, 250, 250);
	if (papel3ImagenY + 250 >= c3.width) {
		papel3ImagenDireccionY = -1;
	}
	if (papel3ImagenY <= 0) {
		papel3ImagenDireccionY = 1;
	}
	papel3ImagenY += 5 * papel3ImagenDireccionY;
}
