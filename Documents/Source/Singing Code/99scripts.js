document.addEventListener('DOMContentLoaded', function () {
    // create button that tells friends to sing
    let button = document.createElement('button');
    button.id = 'btn-sing';
    let sing = document.createTextNode("sing!");
    button.appendChild(sing);
    document.body.appendChild(button);

    // friends who sing
    button.addEventListener('click', function () {
        let friends = ['Ana', 'Laur', 'Faith', 'Kim', 'Steph'];

        for (let i = 0; i < friends.length; i++) {
            let friendDiv = document.createElement('div');
            friendDiv.className = "friend";
            document.body.appendChild(friendDiv);
            let friendName = document.createTextNode(friends[i]);
            let h3 = document.createElement('h3');
            h3.appendChild(friendName);
            friendDiv.appendChild(h3);

            // song that is sung
            for (let x = 99; x > 0; x--) {
                let p = document.createElement('p');
                friendDiv.appendChild(p);
                if (x === 2) {
                    let secondLast = document.createTextNode(x + " lines of code in the file, " + x + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (x - 1) + " line of code in the file");
                    p.appendChild(secondLast);
                } else if (x === 1) {
                    let last = document.createTextNode(x + " line of code in the file, " + x + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
                    p.appendChild(last);
                } else {
                    let main = document.createTextNode(x + " lines of code in the file, " + x + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (x - 1) + " lines of code in the file");
                    p.appendChild(main);
                }

            }
        }
    });
});

