var ms = 11795,
   min = (ms/1000/60) << 0,
   sec = (ms/1000) % 60;

console.log(min + ':' + sec);