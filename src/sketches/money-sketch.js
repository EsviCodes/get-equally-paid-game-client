import * as ml5 from "ml5";

export default function moneySketch(p) {
  let video;
  let classifier;
  let label = "Waiting for the $$$";

  p.preload = () => {
    // Fetches the training model, returns a promise
    classifier = ml5.imageClassifier(
      "https://teachablemachine.withgoogle.com/models/sKAIhvKV/model.json"
    );
  };

  p.setup = () => {
    p.createCanvas(600, 450);

    video = p.createCapture(p.VIDEO);
    video.hide();

    classifyVideo();
  };

  const classifyVideo = () => {
    classifier
      .then(classifier => {
        return classifier.classify(video);
      })
      .then(results => {
        // The first element in the array (object) is always the class with the highest confidence score
        label = results[0].label;

        // Call function again so it keeps classifying after set up
        classifyVideo();
      })
      .catch(error => console.error(error));
  };

  p.draw = () => {
    p.background(133, 187, 101);

    // Draw the video
    p.image(video, 0, 0);

    // Draw the label
    p.textSize(30);
    p.textFont("Raleway");
    p.textAlign(p.CENTER, p.CENTER);
    p.fill(255, 254, 231);
    p.text(label, p.width / 2, p.height - 20);
  };
}
