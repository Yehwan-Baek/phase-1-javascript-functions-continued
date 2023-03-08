// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office") { 
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(highlight = "*") {
    let result = function(comment = "special"){
        return `You are ${highlight}${comment}${highlight}!`;
    }
    return result;
}