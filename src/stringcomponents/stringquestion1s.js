import QuestionBaseClass from "../components/questionbaseclass";
import * as StringConstants from "./stringconstants";

function stringQuestion1s(props) {
  //pick a word from the word pool at random
  const wordIndex = StringConstants.WORDPOOL.length;
  const currentWord =
    StringConstants.WORDPOOL[Math.floor(Math.random() * wordIndex)];
  // question will have 1 row and 8 columns
  const sq = new QuestionBaseClass(props, 1, currentWord.length);
  // adjust the button display values
  for (let i = 0; i < currentWord.length; ++i) {
    sq.displayValues[0][i] = currentWord.substring(i, i + 1);
  }
  //console.log("array question base class", sq);
  sq.pointValue = 2;
  sq.rows = 1;
  const length = currentWord.length;
  const lowerBound = Math.floor(Math.random() * length);
  sq.buttonStates[0][lowerBound] = 1;
  sq.buttonStates[0][currentWord.length - 1] = 1;

  sq.text = [`s.substring(${lowerBound});`];
  return sq;
}

export default stringQuestion1s;
