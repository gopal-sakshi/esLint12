var blah1 = "is this local (or) global ??";

function multiply(p1, p2) {
    var p3 = p1 +p2;
    console.log("see what eslint rules get applied here...");

    // there is one eslintrc.json file within the directory
    // it is this file that applies eslint rules...
    // for files outside subFolder1 directory ====> global eslintrc.json file gets applied

    // or may be not...
    // it seems, eslintrc configurations cascade... 
    // so, this configuration also affects config in app23.js file

    // for the timebeing, we will not use this eslintrc in subfolder thingy
    // renaming it to eslintrc23 will do the job for now

    return p1*p2;
}
module.exports = multiply;