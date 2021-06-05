const c1 = document.getElementById('canvas');
const papel1 = c1.getContext('2d');
const lineal1 = papel1.createLinearGradient(0, 0, 1000, 1000);
lineal1.addColorStop(0, '#B91C1C');
lineal1.addColorStop(0.5, '#FEF2F2');
lineal1.addColorStop(1, '#111827');
lineal1.addColorStop(0.5, '#E5E7EB');
papel1.fillStyle = lineal1;
papel1.fillRect(0, 0, 1000, 1000);
