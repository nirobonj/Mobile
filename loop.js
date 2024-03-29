function loop_for(){
    for(let i=0; i<5; i++)
    {
        console.log(i)
    }
}

const if_check = (year) => {
    if (year === 2566){
        console.log('2023')
    }
    else if (year === 2567){
        console.log('2024')
    }
    else {
        console.log('nothing')
    }
}

if_check(2566)
if_check('2567')
//console.log(a)