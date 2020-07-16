import React, { Component } from "react";
import { ArrayQuestionFactory } from "./arrayquestionfactory";
import GameEngine from "../components/GameEngine";
import * as ArrayConstants from "./arrayconstants";

const ARRAYOPTIONS = [
  {
    id: ArrayConstants.LABELSOPTIONID,
    label: "Labels",
    checked: ArrayConstants.DEFAULTLABELSOPTION,
  },
  { id: ArrayConstants.LOOPSOPTIONID, label: "Loops", checked: false },
  { id: ArrayConstants.TWODOPTIONID, label: "2D", checked: false },
];

class ArrayGameEngine extends Component {
  state = {};

  constructor(props) {
    super(props);

    let labels = this.getLabelChecked();
    console.log("array game constructor labels=", labels);
    this.state = {
      options: ARRAYOPTIONS,
      qf: ArrayQuestionFactory,
      labels: labels,
      maxtime: ArrayConstants.MAXTIME,
      addtime: ArrayConstants.ADDTIME,
    };
  }

  getLabelChecked() {
    //console.log("getLabelIndex returning");
    for (let i = 0; i < ARRAYOPTIONS.length; ++i) {
      if (ARRAYOPTIONS[i].id === ArrayConstants.LABELSOPTIONID)
        return ARRAYOPTIONS[i].checked;
    }
  }

  handleOptions = (options, id, checked) => {
    console.log("options have changed ", options, id, checked);
    // timer and label options are handled here.
    // other options are used by the question factory
    switch (id) {
      case ArrayConstants.LABELSOPTIONID:
        let labels = checked;
        this.setState({ labels, options });
        return;
      default:
        console.log("unknown option in array game engine");
        break;
    }
    this.setState({ options });
  };

  render() {
    //console.log("disarray game engine render labels = ", this.state.labels);

    return (
      <div>
        <GameEngine
          title={ArrayConstants.ARRAYGAMETITLE}
          options={this.state.options}
          handleOptions={this.handleOptions}
          labels={this.state.labels}
          qf={this.state.qf}
          maxtime={this.state.maxtime}
          addtime={this.state.addtime}
        />
        <h6>Click only on the array cells shown in the code.</h6>
      </div>
    );
  }
}

export default ArrayGameEngine;
