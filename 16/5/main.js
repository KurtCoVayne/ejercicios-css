const c1 = document.getElementById('canvas');
const papel1 = c1.getContext('2d');
const radial = papel1.createRadialGradient(500, 920, 0, 500, 100, 850);
radial.addColorStop(0.15, '#66ff00');
radial.addColorStop(0.5, 'blue');
radial.addColorStop(0.1, 'red');

papel1.fillStyle = radial;
papel1.fillRect(0, 0, 1000, 1000);
