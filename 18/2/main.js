const c1 = document.getElementsByClassName('canvas')[0];
const papel1 = c1.getContext('2d');

function dibujar_circulo(color, x, y, radio, grosor = 1) {
	papel1.beginPath();
	papel1.lineWidth = grosor;
	papel1.strokeStyle = color;
	papel1.arc(x, y, radio, 0, 2 * Math.PI);
	papel1.stroke();
	papel1.closePath();
}

dibujar_circulo('red', c1.clientWidth / 2, c1.clientHeight / 2, 175, 5);
dibujar_circulo(
	'cyan',
	c1.clientWidth / 2 + 30,
	c1.clientHeight / 2 + 30,
	100,
	5
);
dibujar_circulo(
	'green',
	c1.clientWidth / 2 + 45,
	c1.clientHeight / 2 + 45,
	60,
	5
);
dibujar_circulo(
	'black',
	c1.clientWidth / 2 + 60,
	c1.clientHeight / 2 + 60,
	30,
	5
);
