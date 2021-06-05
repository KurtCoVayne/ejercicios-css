const c1 = document.getElementById('canvas');
const papel1 = c1.getContext('2d');
const lineal1 = papel1.createLinearGradient(0, 0, 1000, 0);
lineal1.addColorStop(0, '#2193b0');
lineal1.addColorStop(0.5, '#6dd5ed32');
lineal1.addColorStop(1, '#20002c');
lineal1.addColorStop(0.5, '#cbb4d4');
papel1.fillStyle = lineal1;
papel1.fillRect(0, 0, 1000, 1000);
