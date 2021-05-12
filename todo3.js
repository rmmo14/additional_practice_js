function removeNegatives(arr) {
    var arr;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = arr[i] * -1;
        }
    }
    console.log('check', arr);
    return arr;
}
// removeNegatives([1, 2, 3, -2, -1]);

function secondToLast(arr) {
    var arr;
    if (arr.length < 2) {
        // console.log('null');
        return null;
    }
    var newReturn = arr[arr.length - 2];
    // console.log('check', newReturn);
    return newReturn;
}
// secondToLast([1, 'kate', 'potato', 23]);

function secondLargest(arr) {
    // bubble sort method
    var arr;
    var holder;
    for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < arr.length - 1 - j; i++) {
            if (arr[i] < arr[i + 1]) {
                holder = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = holder;
            }
        }
    }
    if (arr.length < 2) {
        console.log('null')
        return null;
    } else {
        console.log('second largest is', arr[1]);
        return arr[1];
    }
}
// secondLargest([5, 2, 4, 3, 1]);