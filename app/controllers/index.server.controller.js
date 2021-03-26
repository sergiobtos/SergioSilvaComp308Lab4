const tf = require("@tensorflow/tfjs");
//require("@tensorflow/tfjs-node");
const iris = require("../../iris.json");
//const irisTesting = require("../../iris-testing.json");

var lossValue;
//
exports.trainAndPredict = function (req, res) {
  let sepal_length = req.body.sepalLength;
  let sepal_width = req.body.petalLength;
  let petal_length = req.body.petalLength;
  let petal_width = req.body.petalLength;
  let epoch = req.body.epoch;
  let lr = req.body.lr;

  const trainingData = tf.tensor2d(
    iris.map((item) => [
      item.sepal_length,
      item.sepal_width,
      item.petal_length,
      item.petal_width,
    ])
  );

  const outputData = tf.tensor2d(
    iris.map((item) => [
      item.species === "setosa" ? 1 : 0,
      item.species === "virginica" ? 1 : 0,
      item.species === "versicolor" ? 1 : 0,
    ])
  );

  const testingData = tf.tensor2d([
    [sepal_length, 
      sepal_width, 
      petal_length, 
      petal_width],
  ]);

  const model = tf.sequential();
  //add the first layer
  model.add(
    tf.layers.dense({
      inputShape: [4], // four input neurons
      activation: "sigmoid",
      units: 5, //dimension of output space (first hidden layer)
    })
  );
  //add the hidden layer
  model.add(
    tf.layers.dense({
      inputShape: [5], //dimension of hidden layer
      activation: "sigmoid",
      units: 3, //dimension of final output
    })
  );

  //add output layer
  model.add(
    tf.layers.dense({
      activation: "sigmoid",
      units: 3, //dimension of final output
    })
  );
  //compile the model with an MSE loss function and Adam algorithm
  model.compile({
    loss: "meanSquaredError",
    optimizer: tf.train.adam(lr),
  });

  //train the model and predic

  async function run() {
    const startTime = Date.now();
    await model.fit(trainingData, outputData, {
      epochs: epoch,
      callbacks: {
        onEpochEnd: async (epoch, log) => {
          lossValue = log.loss;
          elapsedTime = Date.now() - startTime;
        },
      },
    });
    const results = model.predict(testingData);

    results.array().then((array) => {
      var resultForData1 = array[0];
      var resultForData2 = array[1];
      var resultForData3 = array[2];
      var dataToSend = {
        row1: resultForData1,
        row2: resultForData2,
        row3: resultForData3,
      };
console.log(dataToSend);
      res.status(200).send(dataToSend);
    });
  } 
  run();

};
