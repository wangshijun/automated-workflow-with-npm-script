for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(Date.now(), i);
  }, 1000 * i);
}
