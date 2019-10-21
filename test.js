
// let y = new Promise((res,rej)=> {
// console.log('Making a request...')
// var a = Math.random()*10
//  return new Promise(()=> {setTimeout(()=>{
//   console.log('Fetching data from database..', a)  
//   if(a>4) {
//     rej(a)
//   }
//   res(a)
// }, 2000)})
// })
// .then((a)=>{
//   console.log('Second request...', a)
// })
// .catch((e)=>{
//   console.log('Oops, error is ' + e)
// })


async function asyncFetch() {
  console.log('Start fetching..')
  await setTimeout(()=> {
    console.log('setTimeout is logging..')
  }, 2000)

  const request = await new Promise((res)=> {
    setTimeout(()=> {
      console.log('Internal console log')
      res()
    },1500)
  })
}

asyncFetch()
