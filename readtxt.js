fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});