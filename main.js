const wheel = document.getElementById('wheel');

const spikes = new Array(12).fill('').map((el, idx) => idx + 1);

const spike = spikes.map((spike, idx) => {
  const lines = document.createElement('div');
  lines.className = 'line';
  const transform = `rotate(${spike * 15}deg)`;
  lines.style.transform = transform;
  return lines;
});
wheel.append(...spike);
