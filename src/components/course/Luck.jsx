import React from "react";

import img from "../../assets/images/1.jpg";

const Luck = ({ id, name, score, countries }) => {
  return (
    <div>
      <div style={{ maxWidth: "700px", color: "#433b6d", lineHeight: "30px" }}>
        <img src={img} alt="hey" />
        <div>
          <div style={{ marginBlock: "3rem" }}>
            <h2>Study {name} in {countries}</h2>
            <hr />
          </div>
          <p>{score}</p>
          <br />
          <p>
            Phasellus eu urna venenatis, pretium dolor nec, ultricies ligula.
            Donec purus urna, hendrerit nec nisi vel, scelerisque porta nibh.
            Nulla elementum sit amet tellus quis tristique. Nunc pharetra enim
            dictum convallis auctor. Mauris feugiat justo vel imperdiet
            pharetra. Sed cursus quam lacus, quis placerat est luctus vel. Duis
            vehicula pellentesque quam, vitae porta arcu eleifend in. Vivamus
            interdum, tortor quis tempus vehicula, neque nisl volutpat ligula, a
            tincidunt tellus leo et mauris. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Phasellus ut mi velit. Donec aliquet non ante non hendrerit. Aliquam
            condimentum nibh non iaculis pulvinar. Cras suscipit porttitor nisl
            eu semper.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Luck;
