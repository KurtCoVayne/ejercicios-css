const c1 = document.getElementById('canvas');
const papel1 = c1.getContext('2d');
const lineal1 = papel1.createLinearGradient(0, 0, 0, 800);
lineal1.addColorStop(0, '#56ab2f');
lineal1.addColorStop(1, '#a8e063');
papel1.fillStyle = lineal1;
papel1.fillRect(0, 0, 800, 800);
