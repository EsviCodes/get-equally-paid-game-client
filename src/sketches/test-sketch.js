export default function testSketch(p) {
  // Add some header info
  // For TM template code

  // Video
  let video;

  // STEP 1: Load the model!

  p.setup = () => {
    p.createCanvas(640, 520);
    // Create the video
    video = p.createCapture(p.VIDEO);
    video.hide();

    // STEP 2: Start classifying
  };

  // STEP 2 classify!

  p.draw = () => {
    p.background(0);

    // Draw the video
    p.image(video, 0, 0);

    // STEP 4: Draw the label
  };

  // STEP 3: Get the classification!
}
