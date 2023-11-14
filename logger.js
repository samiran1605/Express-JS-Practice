const logger = (req, res, next) => {
  const method = req.method;
  console.log(method)
  const url = req.url
  console.log(url)
  const time = new Date().getFullYear()
  console.log(time)
  next()
}

module.exports = logger