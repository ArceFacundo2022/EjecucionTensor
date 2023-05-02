const tf = require('@tensorflow/tfjs');

const tensor = tf.tensor([[1.0, 2.0], [3.0, 4.0]]);
console.log(tensor.toString());
console.log(tensor)


const vector01 = [2,4,6,8,10]

const matriz01 = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [1,4,7,10]
]


const matriz02 = [
    [
        [1,3,5,7,9],
        [2,4,6,8,10]
    ],[
        [1,2,6,7],
        [3,4,8,9]
    ],[
        [9,1,8,2,7],
        [3,6,4,5]
    ]
]
