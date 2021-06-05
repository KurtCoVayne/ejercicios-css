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
// Cabeza
dibujar_circulo('black', c1.clientWidth / 2, 100, 50, 3);

// Tronco
dibujar_linea('black', c1.clientWidth / 2, 150, c1.clientWidth / 2, 325, 3);

// Antebrazo izquierdo
dibujar_linea(
	'black',
	c1.clientWidth / 2,
	200,
	c1.clientWidth / 2 - 100,
	200,
	3
);
//Brazo izquierdo
dibujar_linea('black', c1.clientWidth / 2 - 100, 200, 250, 250, 3);

//Antebrazo derecho
dibujar_linea(
	'black',
	c1.clientWidth / 2,
	200,
	c1.clientWidth / 2 + 100,
	200,
	3
);
//Brazo derecho
dibujar_linea('black', c1.clientWidth / 2 + 100, 200, 362, 125, 3);

//Pierna izquierda
dibujar_linea('black', c1.clientWidth / 2, 325, 150, 400, 3);

//Pierna derecha
dibujar_linea('black', c1.clientWidth / 2, 325, 350, 400, 3);
