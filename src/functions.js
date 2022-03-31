function login(username){

    let defResponse = "Canceled";
    let falseLogin = "Wrong username or password";
    let trueLogin = "Welcome!";


    if (username == null || username == "") 
        return defResponse;

    if (username !== "admin") 
        return falseLogin;


    if (username === "admin") { 
        let pass = prompt("Password:");

        if (pass == null || pass == "")
            return defResponse;

        if (pass !== "TheMaster")
            return falseLogin;

        if (pass === "TheMaster")
            return trueLogin;
    }
};



function nameOfJS() {

    const jsName = "ECMAScript";
    const question = "What is the \"official\" name of JavaScript?";
    const corrResponse = "Right!";
    const incResponse = "You don't know? \"ECMAScript\"!";

    let corrAns = jsName === prompt (question);
    
    corrAns ? alert(corrResponse) : alert(incResponse);
}



function numSign(number){

    if (!number){
        return undefined
    }

    const isPos = number > 0 ? 1 : undefined;
    const isZero = number == 0 ? 0 : undefined;
    const isNeg = number < 0 ? -1 : undefined;

    return isPos ?? isZero ?? isNeg;

    // if (!number && (number !== "0"))
    //     return undefined;

    // const isPos = number > 0 ? 1 : 0;
    // const isZero = number == 0 ? 0 : 0;
    // const isNeg = number < 0 ? -1 : 0;

    // return isPos || isZero || isNeg; 


    // const isPos = number > 0;
    // const isZero = number == 0;
    // const isNeg = number < 0;

    // let result = undefined;

    // if (isPos)
    //     result = 1;

    // if (isZero)
    //     result = 0;

    // if (isNeg)
    //     result = -1;

    // return result;
}



