let counter = [0, 0, 0, 0];
counter[29] = 0;
console.log(counter);
function incrCounter(event) {

    var str = event.target.id;
    var matches = str.match(/(\d+)/);
    console.log(matches);
    if (matches) {
        document.getElementById('demo').innerHTML = matches[0];
    }
    const result = document.getElementById("result_" + matches[0]);
    console.log(counter[matches[0]] = counter[matches[0]] + 1);
    result.innerHTML = "<h1>" + counter[matches[0]] + "</h1>"



}

