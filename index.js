homeScore = document.getElementById("home-score")
awayScore = document.getElementById("away-score")

let score = 0

// home scores //

function homeScoreOne(){
    score += 1
    homeScore.innerText = score
}

function homeScoreTwo(){
    score += 2
    homeScore.innerText = score
}

function homeScoreThree(){
    score += 3
    homeScore.innerText = score
}

function homeScoreReset(){
    score = 0
    homeScore.innerText = score
}

// away scores //

let scoreAway = 0

function awayScoreOne(){
    scoreAway += 1
    awayScore.innerText = scoreAway
}

function awayScoreTwo(){
    scoreAway += 2
    awayScore.innerText = scoreAway
}

function awayScoreThree(){
    scoreAway += 3
    awayScore.innerText = scoreAway
}

function awayScoreReset(){
    scoreAway = 0
    awayScore.innerText = scoreAway
}