
const chalk = require ('chalk')
const wildPeople = ['Guilherme', 'Gonçalo', 'André', 'João']
const randomChalk = () => {
    chalkColors = ['pink', 'blue', 'yellow', 'orange']
    const randomNumber = () => Math.round(Math.random() * chalkColors.length)
    return chalkColors[randomNumber()]
}

wildPeople.map((wildPeople) => console.log(chalk[randomChalk()](wildPeople)))
