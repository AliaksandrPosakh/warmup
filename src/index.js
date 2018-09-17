module.exports = function warmup(temperature) {
if (temperature < 273.15) {
  return;
}
return temperature * 9 / 5 + 32;
};
