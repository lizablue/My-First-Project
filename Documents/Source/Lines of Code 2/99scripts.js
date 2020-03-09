document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    button.id = 'sing';
    document.body.appendChild(button);
    
    // start singing on button click
    button = document.getElementById('sing')

    // friends who sing
    button.addEventListener('click', function() {
        let friends = ['Ana', 'Laur', 'Faith', 'Kim', 'Steph'];

        // song that is sung
        for (let x = 0; x < friends.length; x++) {

            console.log(friends[x].toUpperCase() + ':');
    
            for (let i = 9; i > 0; i--) {
    
                if (i === 2) {
                    console.log(i + " lines of code in the file, " + i + " lines of code; " + friends[x] + " strikes one out, clears it all out, " + (i - 1) + " line of code in the file");
                } else if (i === 1) {
                    console.log(i + " line of code in the file, " + i + " line of code; " + friends[x] + " strikes one out, clears it all out, no more lines of code in the file");
                } else {
                    console.log(i + " lines of code in the file, " + i + " lines of code; " + friends[x] + " strikes one out, clears it all out, " + (i - 1) + " lines of code in the file");
                }
            }
        }
    
    });
});

