process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error:', err)
    process.exit(1) // Exit with failure code
  })
  
  //simulate uncaught exception
  setTimeout(() => {
    throw new Error('uncaught exception')
  }, 1000)
  