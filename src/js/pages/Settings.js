import React from "react";

import Note from "../components/Note";

export default class Settings extends React.Component {
  render() {
    const Notes = [
      "Some Note",
      "Some Other Note",
      "Yet Another Note",
      "Still More"
    ].map((title, i) => <Note key={i} title={title} />);

    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5"
    ];

    const randomAd = adText[Math.round(Math.random() * (adText.length - 1))];
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>
        <div class="row">{Notes}</div>
      </div>
    );
  }
}
