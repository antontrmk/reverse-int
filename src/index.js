module.exports = function reverse (n) {
  let i = +Math.abs(n).toString().split('').reverse().join('');
  return i;
}