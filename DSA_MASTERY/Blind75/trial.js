    const maxCandy =[2,3,5,1,3].reduce((acc, curr) => {
        return acc < curr ? acc = curr : acc
    })

    console.log(maxCandy)