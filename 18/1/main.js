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

dibujar_linea('orange', 0, c1.clientHeight, c1.clientWidth / 2, 0, 3);
dibujar_linea(
	'blue',
	c1.clientWidth,
	c1.clientHeight,
	c1.clientWidth / 2,
	0,
	3
);
