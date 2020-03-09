document.addEventListener('DOMContentLoaded', function () {
    // create button that tells friends to sing
    let button = document.createElement('button');
    button.id = 'sing';
    document.body.appendChild(button);

    // friends who sing
    button.addEventListener('click', function () {
        let friends = ['Ana', 'Laur', 'Faith', 'Kim', 'Steph'];

        for (let i = 0; i < friends.length; i++) {
            let friendDiv = document.createElement('div');
            friendDiv.className = "friend";
            document.body.appendChild(friendDiv);
            for (i in friends) {
                let friendName = document.createTextNode(friends[i]);
                let h3 = document.createElement('h3');
                h3.appendChild(friendName);
                document.body.appendChild(h3);
            }

            // song that is sung
            for (let x = 0; x < friends.length; x++) {

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
        }

    });
});

