import React, { useState } from "react";

const CameraAndUploadButtons = () => {
  const [image, setImage] = useState(null);
  const [fileTypeError, setFileTypeError] = useState("");

  const handleTakePicture = () => {
    const videoElement = document.createElement("video");
    const canvasElement = document.createElement("canvas");
    const constraints = { video: { facingMode: "environment" } };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        videoElement.srcObject = stream;
        videoElement.play();
        setTimeout(() => {
          canvasElement.width = videoElement.videoWidth;
          canvasElement.height = videoElement.videoHeight;
          canvasElement
            .getContext("2d")
            .drawImage(
              videoElement,
              0,
              0,
              canvasElement.width,
              canvasElement.height
            );
          const imageData = canvasElement.toDataURL("image/png");
          setImage(imageData);
          stream.getTracks().forEach((track) => track.stop());
        }, 1000);
      })
      .catch((error) => console.error("Error accessing camera:", error));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const validTypes = ["image/jpeg", "image/png", "image/gif"];

    if (file && validTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setFileTypeError("");
      };
      reader.readAsDataURL(file);
    } else {
      setFileTypeError("Invalid file type. Please upload a JPEG, PNG, or GIF.");
    }
  };

  return (
    <div>
      <button onClick={handleTakePicture}>Take Picture</button>
      <input
        type="file"
        accept="image/jpeg, image/png, image/gif"
        onChange={handleFileUpload}
      />
      {image && <img src={image} alt="Preview" width="300" />}
      {fileTypeError && <p style={{ color: "red" }}>{fileTypeError}</p>}
    </div>
  );
};

export default CameraAndUploadButtons;
