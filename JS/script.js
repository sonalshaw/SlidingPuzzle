let MovesCount=0

const randomPos = () => {
    let arr = [];
    while(arr.length < 9){
        let r = ((Math.floor(Math.random() * 3)+1).toString())+((Math.floor(Math.random() * 3)+1).toString());
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}

let RandomPos=randomPos()

for(let i =0;i<document.getElementsByClassName("tile").length;i++){
    document.getElementsByClassName("tile")[i].style.gridArea=RandomPos[i][0]+"/"+RandomPos[i][1]
}

const MoveMe = (tile) => {
    let EmptyTile=document.querySelector(".emtile")
    let Possibilties=[
        parseInt(RandomPos[tile][0])+1==parseInt(RandomPos[8][0])&&parseInt(RandomPos[tile][1])==parseInt(RandomPos[8][1]),
        parseInt(RandomPos[tile][0])-1==parseInt(RandomPos[8][0])&&parseInt(RandomPos[tile][1])==parseInt(RandomPos[8][1]),
        parseInt(RandomPos[tile][1])+1==parseInt(RandomPos[8][1])&&parseInt(RandomPos[tile][0])==parseInt(RandomPos[8][0]),
        parseInt(RandomPos[tile][1])-1==parseInt(RandomPos[8][1])&&parseInt(RandomPos[tile][0])==parseInt(RandomPos[8][0]),
    ]
    let NeededPos;
    if (Possibilties[0] || Possibilties[1] || Possibilties[2] || Possibilties[3]) {
        MovesCount++;
        EmptyTile.style.gridArea = RandomPos[tile][0] + "/" + RandomPos[tile][1];
        document.querySelectorAll(".tile")[tile].style.gridArea = RandomPos[8][0] + "/" + RandomPos[8][1];

        let CurrentTile = RandomPos[tile]
        RandomPos[tile] = RandomPos[8]
        RandomPos[8] = CurrentTile;
        NeededPos = ["11", "12", "13", "21", "22", "23", "31", "32", "33"]
        if (RandomPos.join(".") == NeededPos.join(".")) {
            console.log("Game Beated");
            document.querySelector(".blscreen").style.display = 'flex'
            document.querySelector(".MovesCount").innerHTML = MovesCount;
            let stars = 0;
            if (MovesCount < 100) {
                stars = 3
            } else if (MovesCount < 200) {
                stars = 2
            } else if (MovesCount < 300) {
                stars = 1
            } else {
                stars = 0
            }
            for (let i = 0; i < 2; i++) {
                document.getElementsByTagName("path").style.fill = "yellow"
            }
        }
    }
}