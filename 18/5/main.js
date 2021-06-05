const c1 = document.getElementsByClassName('canvas')[0];
const papel1 = c1.getContext('2d');

function dibujar_linea(color, x, y, x2, y2, grosor = 1) {
	papel1.beginPath();
	papel1.lineWidth = grosor;
	papel1.strokeStyle = color;
	papel1.moveTo(x, y);
	papel1.lineTo(x2, y2);
	papel1.stroke();
	papel1.closePath();
}

function dibujar_circulo(color, x, y, radio, grosor = 1) {
	papel1.beginPath();
	papel1.lineWidth = grosor;
	papel1.strokeStyle = color;
	papel1.arc(x, y, radio, 0, 2 * Math.PI);
	papel1.stroke();
	papel1.closePath();
}

dibujar_linea('black', 0, 0, c1.clientWidth / 2, c1.clientHeight, 3);
dibujar_linea(
	'black',
	c1.clientWidth,
	0,
	c1.clientWidth / 2,
	c1.clientHeight,
	3
);

dibujar_linea('black', 0, c1.clientHeight, c1.clientWidth / 2, 0, 3);
dibujar_linea(
	'black',
	c1.clientWidth,
	c1.clientHeight,
	c1.clientWidth / 2,
	0,
	3
);

dibujar_circulo('black', c1.clientWidth / 4, 75, 50, 2);
dibujar_circulo('black', 500 - c1.clientWidth / 4, 75, 50, 2);
dibujar_circulo('black', c1.clientWidth / 4, 500 - 75, 50, 2);
dibujar_circulo('black', 500 - c1.clientWidth / 4, 500 - 75, 50, 2);

dibujar_circulo('black', c1.clientWidth / 2, c1.clientHeight / 2 - 25, 50, 2);
dibujar_circulo('black', c1.clientWidth / 2, c1.clientHeight / 2 + 25, 50, 2);
