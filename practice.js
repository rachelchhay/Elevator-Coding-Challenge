let letters = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
    ['J', 'K', 'L']
]

let print = (row, column) => {
    for(let i = 0; i < row; i++) {
        if(i < 2){
            for(let j = 0; j < letters[i].length; j++) {
                console.log(letters[i][j])
            }
        } else {
            for(let j = 0; j < 1; j++) {
                console.log(letters[i][j]);
            }
        }
        
    }
}

print(3, 1)
// OUTPUT: A B C D E F G 

