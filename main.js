const wheel = document.getElementById('wheel');
const spikes = new Array(12).fill('').map((e, idx) => idx + 1);
const spike = spikes.map((spike) => {
  const lines = document.createElement('div');
  const transform = `rotate(${spike * 15}deg)`;
  lines.className = 'line';
  lines.style.transform = transform;
  return lines;
});
wheel.append(...spike);
