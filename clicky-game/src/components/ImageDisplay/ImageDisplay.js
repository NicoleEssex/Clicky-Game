import React from "react";
import "./ImageDisplay.css"

export class ImageDisplay extends React.Component {

    constructor(props) {
      super(props);
      this.state ={
        imageDisplay:[<img alt="" src="https://cdn.pixabay.com/photo/2016/03/25/19/37/crocus-1279508_960_720.png" className="image"></img>,
        <img alt="" src="https://cdn.pixabay.com/photo/2016/04/20/21/17/png-1342113_960_720.png" className="image"></img>,
        <img alt="" src="https://cdn.pixabay.com/photo/2016/03/25/19/27/marguerite-1279482_960_720.png" className="image"></img>,
        <img alt="" src="https://cdn.pixabay.com/photo/2018/03/02/09/04/lotus-3192656_960_720.png"className="image"></img>,
        <img alt="" src="https://cdn.pixabay.com/photo/2018/03/02/09/19/flower-marigolds-3192686_960_720.png" className="image"></img>,
        <img alt="" src="https://cdn.pixabay.com/photo/2016/04/22/14/40/png-1345901_960_720.png" className="image"></img>,
        <img alt="" src="https://cdn.pixabay.com/photo/2016/04/20/21/16/png-1342111_960_720.png" className="image"></img>,
        <img alt="" src="https://cdn.pixabay.com/photo/2016/04/21/23/47/png-1344813_960_720.png" className="image"></img>,
    ]
      }
    }
    render() {
      
      return (
        <div className="container">
        <div className="jumbotron">
          
          {
            this.state.imageDisplay.map(image => {
              return <button key={image.src}>{image} </button>
            })
          }
        </div>
        </div>
      )
    }
  }

  export default ImageDisplay;