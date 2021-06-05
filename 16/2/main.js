const c1 = document.getElementById('canvas');
const papel1 = c1.getContext('2d');
const lineal1 = papel1.createLinearGradient(0, 0, 800, 0);
lineal1.addColorStop(0, '#2193b0');
lineal1.addColorStop(1, '#6dd5ed');
papel1.fillStyle = lineal1;
papel1.fillRect(0, 0, 800, 800);
