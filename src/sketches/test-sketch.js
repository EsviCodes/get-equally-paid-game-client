import * as ml5 from "ml5";

export default function testSketch(p) {
  // Add some header info
  // For TM template code

  console.log("ml5", ml5);

  // Video
  let video;

  let classifier;
  let label = "waiting";

  console.log("label", label);

  // STEP 1: Load the model! STEP 2: Start classifying
  p.preload = () => {
    // images
    // classifier = ml5.imageClassifier(
    //   "https://teachablemachine.withgoogle.com/models/RtE5ECt6/model.json"
    // );

    //pose --> doesn't work
    // classifier = ml5.imageClassifier(
    //   "https://teachablemachine.withgoogle.com/models/zAFmVWDP/model.json"
    // );

    // money images
    classifier = ml5.imageClassifier(
      "https://teachablemachine.withgoogle.com/models/sKAIhvKV/model.json"
    );

    //   .then(classifier => {
    //     console.log("classifier", classifier);
    //     return classifier.classify(video);
    //   })
    //   .then(results => {
    //     // the first object is always the one with the highest confidence score
    //     console.log("results", results[0].label);
    //   })
    //   .catch(error => console.error(error));
  };

  p.setup = () => {
    p.createCanvas(640, 520);
    // Create the video
    video = p.createCapture(p.VIDEO);
    video.hide();

    // STEP 2: Start classifying
    classifyVideo();
  };

  // STEP 2 classify!
  const classifyVideo = () => {
    classifier
      .then(classifier => {
        //console.log("classifier", classifier);
        return classifier.classify(video);
      })
      .then(results => {
        // the first object is always the one with the highest confidence score
        //console.log("results", results[0].label);
        label = results[0].label;
        console.log("label", label);

        // call function again so it keeps classifying
        classifyVideo();
      })
      .catch(error => console.error(error));
  };

  p.draw = () => {
    p.background(0);

    // Draw the video
    p.image(video, 0, 0);

    // STEP 4: Draw the label
    p.textSize(32);
    p.textAlign(p.CENTER, p.CENTER);
    p.fill(255);
    p.text(label, p.width / 2, p.height - 16);
  };

  // STEP 3: Get the classification!
  //   const gotResults = (error, results) => {
  //     if (error) {
  //       console.error(error);
  //       return;
  //     }
  //     console.log(results);
  //   };
}
