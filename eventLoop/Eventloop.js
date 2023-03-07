const one = () => console.log('one')

const two = () => console.log('two')

const three = () => {
  console.log('three')
  setTimeout(one, 3000)
  two()
}

three()