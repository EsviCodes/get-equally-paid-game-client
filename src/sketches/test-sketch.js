import * as ml5 from "ml5";

export default function testSketch(p) {
  // Add some header info
  // For TM template code

  console.log("ml5", ml5);

  // Video
  let video;

  let classifier;

  // STEP 1: Load the model! STEP 2: Start classifying
  p.preload = () => {
    classifier = ml5
      .imageClassifier(
        "https://teachablemachine.withgoogle.com/models/RtE5ECt6/model.json"
      )
      .then(classifier => {
        console.log("classifier", classifier);
        return classifier.classify(video);
      })
      .then(results => {
        console.log("results", results);
      })
      .catch(error => console.error(error));
  };

  p.setup = () => {
    p.createCanvas(640, 520);
    // Create the video
    video = p.createCapture(p.VIDEO);
    video.hide();

    // STEP 2: Start classifying
    //classifyVideo();
  };

  // STEP 2 classify!
  //   const classifyVideo = () => {
  //     // const classify = ml5.classify();
  //     // console.log("classify", classify);
  //     // classifier is a promise
  //     //classifier.classify(video, gotResults);
  //   };

  p.draw = () => {
    p.background(0);

    // Draw the video
    p.image(video, 0, 0);

    // STEP 4: Draw the label
  };

  // STEP 3: Get the classification!
  const gotResults = (error, results) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(results);
  };
}
