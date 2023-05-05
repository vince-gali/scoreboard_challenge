let home = 0
let away = 0





function HomeScoreOne(){
    home++
   console.log('success')
    draw()
    
}

function AwayScoreOne(){
    away++
    console.log('success')
    draw()
}


function HomeScoreThree(){
    home+=3
    draw()
}

function AwayScoreThree(){
    away+=3
    console.log('yes')
    draw()
}

function ResetScore(){
    home = 0
    away = 0
    draw()
}



function draw(){
    document.getElementById('home-score').innerText = home 
    document.getElementById('away-score').innerText = away 
}
