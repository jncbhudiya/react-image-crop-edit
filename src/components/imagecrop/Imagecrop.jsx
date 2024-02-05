import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "D:/react/image-crop/src/components/imagecrop/imagecrop.css";

const Imagecrop = (url) => {
  const [crop, setCrop] = useState(
    // aspect: 16 / 9,
    // unit: '%',
    // width: 100,
    null
  );

  const [rotation, setRotation] = useState(0);
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [Completecrop, setcompletecrop] = useState(null);
  const [src, setSrc] = useState("");

  return (
    <div>
      <ReactCrop
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={(e) => {
          setcompletecrop(e);
        }}
      />
    </div>
  );
};

export default Imagecrop;
