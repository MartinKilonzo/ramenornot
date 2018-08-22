// based on https://github.com/paramaggarwal/react-dropzone, adds image preview
import React from 'react';
import _ from 'lodash';

class Dropzone extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isDragActive: false,
    }
  }

  propTypes: {
    onDrop: React.PropTypes.func.isRequired,
    size: React.PropTypes.number,
    style: React.PropTypes.object
  }

  onDragLeave =(e) => {
    this.setState({
      isDragActive: false
    });
  }

  onDragOver =(e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';

    this.setState({
      isDragActive: true
    });
  }

  onDrop =(e) => {
    e.preventDefault();

    this.setState({
      isDragActive: false
    });

    var files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    _.each(files, this._createPreview);
  }

  onClick = () => {
    this.refs.fileInput.getDOMNode().click();
  }

  _createPreview =(file)=> {
    var self = this
      , newFile
      , reader = new FileReader();

    reader.onloadend = function(e){
      newFile = {file:file, imageUrl:e.target.result};
      if (self.props.onDrop) {
        self.props.onDrop(newFile);
      }
    };

    reader.readAsDataURL(file);
  }

  render() {

    var className = 'dropzone';
    if (this.state.isDragActive) {
      className += ' active';
    };

    var styles = {
      wrapper: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      dropzone: {
        display: 'flex',
        alignItems: 'center',
        width: this.props.size || 300,
        height: this.props.size || 150,
        borderStyle: 'solid',
        borderColor: this.state.isDragActive ? 'grey' : 'transparent',
        backgroundColor: 'rgba(245,245,245,1)',
      }
    };

    return (
      <div style={styles.wrapper}>
        <div className={className} style={styles.dropzone} onClick={this.onClick} onDragLeave={this.onDragLeave} onDragOver={this.onDragOver} onDrop={this.onDrop}>
          <input style={{display: 'none' }} type='file' multiple ref='fileInput' onChange={this.onDrop} />
          {this.props.children}
        </div>
      </div>
    );
  }

};

export default Dropzone;
