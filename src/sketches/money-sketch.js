import * as ml5 from "ml5";

export default function moneySketch(p) {
  // Video
  let video;
  let classifier;
  let label = "$$$";

  // STEP 1: Load the model! STEP 2: Start classifying
  p.preload = () => {
    // money images
    classifier = ml5.imageClassifier(
      "https://teachablemachine.withgoogle.com/models/sKAIhvKV/model.json"
    );
  };

  p.setup = () => {
    p.createCanvas(600, 450);
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
        console.log("results", results);
        label = results[0].label;
        console.log("label", label);

        // call function again so it keeps classifying
        classifyVideo();
      })
      .catch(error => console.error(error));
  };

  p.draw = () => {
    p.background(133, 187, 101);

    // Draw the video
    p.image(video, 0, 0);

    // STEP 4: Draw the label
    p.textSize(30);
    p.textAlign(p.CENTER, p.CENTER);
    p.fill(255);
    p.text(label, p.width / 2, p.height - 20);
  };
}
