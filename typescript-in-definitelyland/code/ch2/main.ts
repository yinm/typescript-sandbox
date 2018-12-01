// 3rd
async function main() {
  const sub = await import('./sub')
  console.log(sub.hello())
}

function mainAnother() {
  import('./sub').then(sub => {
    console.log(sub.hello())
  })
}

main()
mainAnother()
