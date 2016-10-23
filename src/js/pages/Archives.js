import React from "react";

import Blog from "../components/Blog";

export default class Archives extends React.Component {
  render() {
    const Blogs = [
      "Some Blog",
      "Some Other Blog",
      "Yet Another Blog",
      "Still More"
    ].map((title, i) => <Blog key={i} title={title} />);

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
        <div class="row">{Blogs}</div>
      </div>
    );
  }
}
