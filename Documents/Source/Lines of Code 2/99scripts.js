let friends = ['Ana', 'Laur', 'Faith', 'Kim', 'Steph'];

for(var x = 0; x < friends.length; x++) {
    for (var i = 99; i > 2; i--) {
        console.log(i + " lines of code in the file, " + i + " lines of code; " + friends[x] + " strikes one out, clears it all out, " + (i-1) + " lines of code in the file")
    };
    // last couple lines were a little different because of singular/plural rules
    // is there a more efficient way to do this?
    if (i = 2) {
        console.log(i + " lines of code in the file, " + i + " lines of code; " + friends[x] + " strikes one out, clears it all out, " + (i-1) + " line of code in the file")
    };
    if (i = 1) {
        console.log(i + " line of code in the file, " + i + " line of code; " + friends[x] + " strikes one out, clears it all out, no more lines of code in the file")
    };
};
