function main() {

    var personInput = prompt("Enter a word or press 'q' to quit ");
    while (personInput !== "q") {
        personInput = prompt("Please try again :)"); // KEY: Don't need a new variable here, just re-use original. Variable name doesn't match.
        alert(personInput); // KEY: Missing semicolon
    }
}


main();