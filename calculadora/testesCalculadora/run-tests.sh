#!/bin/bash

# see if there are any files in the submit directory
if [ ! "$( ls -A calc.html )" ]; then
    echo "calc.html not found in directory. Please upload your files before proceeding." 
    exit
fi
if [ ! "$( ls -A calc.js )" ]; then
    echo "calc.js not found in directory. Please upload your files before proceeding." 
    exit
fi


# run the tests
echo "Running tests; please be patient while tests run (this may take as long as 45 seconds)"
npm run calculate-grade > /dev/null 2>&1
node report_grade.js
