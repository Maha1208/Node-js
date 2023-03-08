function doSomethingAsync() {
    return new Promise((resolve, reject) => {
      // Simulate an async operation that fails
      setTimeout(() => {
        reject(new Error('async error'))
      }, 6000)
    })
  }
  
  doSomethingAsync()
    .then(() => {
      console.log('Async operation completed successfully')
    })
    .catch((err) => {
      console.error('Async operation failed:', err)
    })
  