var fs = require('fs');

fs.readFile('./mocha-output.json', 'utf8', (err, data) => {
    //console.log(data);
    var result = JSON.parse(data);
    var passed = 0;
    var failed = 0;
    var obj = result['jQuery Calculator'];
    var failedTests = [];
    for (var key of Object.keys(obj)) {
        var val = obj[key];
        //console.log(key + ' ' + val);
        if (val == "PASSED") passed++;
        else if (val == "FAILED") {
            failedTests.push(key);
            failed++;
        }
    }
    //console.log("PASSED: " + passed + "; FAILED: " + failed);
    if (passed + failed == 0) {
        console.log("Something went wrong, no tests were executed.");
    }
    else if (passed > 0 && failed == 0) {
        console.log("All " + passed + " tests passed! Great job!");
    }
    else {
        console.log(passed + " tests passed and " + failed + " tests failed.");
        var score = (100 * passed) / (passed + failed);
        console.log("Your score for this assignment would be " + score + "% if you submitted now.");
        console.log("The following test cases failed:");
        var count = 1;
        failedTests.forEach((test) => {
            console.log(count + '. ' + test);
            count++;
        });
        console.log("Type the command 'npm test' below to re-run all the tests and see more information.");
    }
});   


