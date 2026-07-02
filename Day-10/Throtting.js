function throttle(fn, limit) {
  let inThrottle = false;

  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

const print = throttle(() => {
  console.log("Executed", Date.now());
}, 1000);

// Every 100ms call
setInterval(() => {
  print();
}, 100);