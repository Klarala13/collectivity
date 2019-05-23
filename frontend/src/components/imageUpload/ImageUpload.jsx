import React, { Component } from 'react'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'

export default class ImageUpload extends Component {
  
    state = {
      uploading: false,
      images: []
    }
  
    onChange = e => {
      const files = Array.from(e.target.files)
      this.setState({ uploading: true })
  
      const formData = new FormData()
  
      files.forEach((file, i) => {
        formData.append(i, file)
      })
    const url = "http://0.0.0.0:4001/users";
    fetch(url, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(image => {
          this.setState({ 
            uploading: false,
            image
          })
        })
      }
      removeImage = id => {
        this.setState({
          images: this.state.images.filter(image => image.public_id !== id)
        })
      }
      render() {
        const { uploading, images } = this.state
    
        const content = () => {
          switch(true) {
            case uploading:
              return <Spinner />
            case images.length > 0:
              return <Images images={images} removeImage={this.removeImage} />
            default:
              return <Buttons onChange={this.onChange} />
          }
        }
    
        return (
          <div>
            <div className='buttons'>
              {content()}
            </div>
          </div>
        )
      }
    }

