function doSomethingAsync() {
    return new Promise((resolve, reject) => {
      // Simulate an async operation that completes successfully
      setTimeout(() => {
        resolve('Async operation completed successfully')
      }, 1000)
    })
  }
  
  async function main() {
    try {
      const result = await doSomethingAsync()
      console.log(result)
    } catch (err) {
      console.error('Async operation failed:', err)
    }
  }
  
  main()
  