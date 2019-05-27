import React, { Component } from "react";
import Spinner from "./Spinner";
import Images from "./Images";
import Buttons from "./Buttons";

export default class ImageUpload extends Component {
  state = {
    uploading: false,
    images: []
  };

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    });
  };
  render() {
    const { uploading, images } = this.state;

    const content = () => {
      switch (true) {
        case uploading:
          return <Spinner />;
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />;
        default:
          return <Buttons />;
      }
    };

    return (
      <div>
        <div className="buttons">{content()}</div>
      </div>
    );
  }
}
