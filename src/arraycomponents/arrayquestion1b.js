import QuestionBaseClass from "../components/questionbaseclass";

function arrayQuestion1b(props) {
  // question will have 1 row and 8 columns
  const aq = new QuestionBaseClass(props, 1, 8);
  //console.log("array question base class", aq);
  aq.pointValue = 2;
  aq.rows = 1;
  const decrement = aq.randomIncrementOrDecrement();
  let lowerBound = Math.floor(Math.random() * 4);
  const upperBound = Math.floor(Math.random() * (8 - lowerBound)) + lowerBound;
  const equalsChar =
    Math.random() > 0.5 || upperBound === lowerBound ? "=" : "";

  aq.text = [
    "for(int i=" +
      upperBound +
      "; i >" +
      equalsChar +
      " " +
      lowerBound +
      "; i-=" +
      decrement +
      ") {",
    "   System.out.print( a[i] );",
    "}",
  ];
  if (equalsChar === "=") {
    --lowerBound;
  }
  for (let i = upperBound; i > lowerBound; i -= decrement) {
    aq.buttonStates[0][i] = 1;
  }
  return aq;
}

export default arrayQuestion1b;
