// ******************* GOAL *******************
// Find the starting elevator.
// Count the number of elevators in that string. If there's one elevator letter, print out that elevator. If there's 2 elevators, decide if the new elevator has an index closer to your final destination floor.
// Keep going through the arrays to add elevators to the elevatorPath array until you reach final destination. If final destination is not possible then print out "Not possible".

// ******************* OUTCOME *******************
// Correct elevator path : AABDD
// My final elevator path : AABAB
// Why : If there is 1 elevator, the function prints out the starting elevator. If there are 2 elevators, the function prints out the other elevator. 
// Revised goal : The function needs to decide between staying or switching elevators. If switching elevators, the bottom level loop needs to run again with the new elevator. The function should end at the final destination floor.
// Improvements/Solutions : The code needs to be more modular. Maybe have a currentElevator variable to keep track of what elevator you're on.

let elevatorStates = [
    // State @ t=1
    `xx.x.x.xDxx
     xx.x.x.x.xx
     xx.x.x.x.xx
     xx.xBx.x.xx
     xx.x.xCx.xx
     xxAx.x.x.xx`,
    // State @ t=2
    `xx.x.x.x.xx
     xx.x.x.x.xx
     xxAx.x.x.xx
     xx.xBx.x.xx
     xx.x.xCx.xx
     xx.x.x.xDxx`,
    // State @ t=3
    `xx.x.xCx.xx
     xx.x.x.x.xx
     xx.x.x.x.xx
     xxAxBx.x.xx
     xx.x.x.x.xx
     xx.x.x.xDxx`,
    // State @ t=4
    `xx.x.xCx.xx
     xx.x.x.x.xx
     xx.xBx.xDxx
     xx.x.x.x.xx
     xxAx.x.x.xx
     xx.x.x.x.xx`,
     // State @ t=5
    `xx.x.xCx.xx
     xx.x.x.xDxx
     xx.x.x.x.xx
     xx.x.x.x.xx
     xxAxBx.x.xx
     xx.x.x.x.xx`,
   ];

let startingElevator;
let finalDestination;
let finalDestinationArr;
let floor;
let time;
let elevatorStateArr = [];
let elevatorPathArr = [];
let finalElevatorPath;
let locateElevator;
let input;
let numOfElevatorsOnFloor;
let allElevators;
let getOtherElevator;
let otherElevator;

// Split final destination string into floor and time variables
let splitFinalDestination = (finalDestination) => {
    finalDestinationArr = finalDestination.split('-');
    floor = finalDestinationArr[0];
    time = finalDestinationArr[1];

    console.log('Final Destination floor: ' + floor);
    console.log('Final Destination Time: ' + time);
}

// Split each multi-line string into array
let getElevatorArr = (elevatorStates) => {
    for(let i = 0; i < elevatorStates.length; i++) {  
        let newArr = elevatorStates[i].split(" ").filter(Boolean).reverse();
        elevatorStateArr.push(newArr);
    }    
}

// Add elevator to elevatorPathArr
let addToElevatorPathArr = (elevator) => {
    elevatorPathArr.push(elevator);
}

// Get final elevator path
let getFinalElevatorPath = () => {
    finalElevatorPath = elevatorPathArr.join('');
    console.log('>>>> FINAL ELEVATOR PATH: ' + finalElevatorPath + ' <<<<')
}


const findElevatorPath = (elevatorStates, startingElevator, finalDestination) => {
    splitFinalDestination(finalDestination);
    getElevatorArr(elevatorStates);
    // console.log(elevatorStateArr); 

    // Looping through each state
    for(let i = 0; i < time; i++) {
        let state = i + 1;
        console.log('************* State at time = ' + state + ' : ************* ')
        console.log([i] + ' ' + elevatorStateArr[i])

        // Looping through each floor
        for(let j = 0; j < elevatorStateArr[i].length; j++) {
            // console.log('Bottom level loop @ index ' + [j] + ' : ' + elevatorStateArr[i][j])
            console.log(elevatorStateArr[i][j].match(startingElevator));
            // Find the starting elevator at each state
            locateElevator = elevatorStateArr[i][j].match(startingElevator);
            
            if(startingElevator ==  locateElevator) {
                // Input = floor with the elevator
                input = locateElevator.input;

                // Number of elevators on the floor
                numOfElevatorsOnFloor = input.replace(/[^A-Z]/g, "").length
                console.log('Index of starting elevator:' + [j])
                console.log('Floor with starting elevator:' + input);
                console.log('Starting elevator: ' + locateElevator[0])
                console.log('Number of elevators on the floor: ' + numOfElevatorsOnFloor);

                
                // If there's another elevator on the floor
                if(numOfElevatorsOnFloor > 1) {
                    allElevators = input.replace(/[^A-Z + startingElevator +]/g, "");
                    getOtherElevator = (otherElevator) => {
                        if(otherElevator != startingElevator) {
                            return true;
                        }
                    }
                    // Get the other elevator on the floor
                    otherElevator = allElevators.split("").filter(getOtherElevator)

                    // Add logic to decide whether or not to switch elevators

                    // Adding an elevator to the elevator path
                    addToElevatorPathArr(otherElevator);


                    console.log('All elevators on floor: ' + allElevators)
                    console.log("Other elevator that's not the starting elevator: " + otherElevator)
                } else {
                    // Adding an elevator to the elevator path
                    addToElevatorPathArr(locateElevator[0]);
                }

                getFinalElevatorPath();
            }
        }
    }
}   

findElevatorPath(elevatorStates, "A", "5-5");
// "floor-time"



