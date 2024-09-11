function a(...args) {
    console.log(args)
    console.log(arguments, arguments[0])
    console.log(Array.from(arguments))
}

a(1,2,3)