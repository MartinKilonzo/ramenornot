import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import Image from './Image';


class Contribute extends React.PureComponent {

  static propTypes = {
    files: PropTypes.array,
  }

  constructor(props) {
    super(props)
    this.state = {
      ...props,
      files: []
    };
  }

  onDrop = (acceptedFiles) => {
    acceptedFiles.forEach(file => {

      const fileObject = {
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        name: file.name,
        preview: file.preview,
        size: file.size,
        type: file.type,
        webkitRelativePath: file.webkitRelativePath,
      }

      const form = new FormData()
      form.append('image', file)

      const xhr = new XMLHttpRequest();
      // xhr.open('post', 'http://localhost:8080/addimage', true);
      xhr.open('post', 'http://35.225.96.119:8080/addimage', true);
      // xhr.setRequestHeader('Content-Type', 'multipart/form-data');
      xhr.onload = (res) => this.setState({ files: [ ...this.state.files, { preview: file.preview, ...JSON.parse(xhr.response) }] })
      xhr.send(form)

    })
  }

  averageLabelScore = () => {
    const labelValues = {}
    this.state.files.forEach(file => {
      file.labels.forEach(label => {
        for (var prop in label)
          if (typeof(labelValues[prop]) === 'undefined')
            labelValues[prop] = label[prop]
          else
            labelValues[prop] += label[prop]
      })
    })

    for (var prop in labelValues)
      labelValues[prop] /= this.state.files.length
    return labelValues
  }

  render() {
    const styles = {
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      },
      imagesWrapper: {
        width: '100%',
        paddingTop: '24px',
      },
    }
    return (
      <div>
        <div style={styles.wrapper}>
          <Dropzone onDrop={this.onDrop}>
              <p style={ {...styles.wrapper, width: '100%', height: '100%'} }>Drag &amp; drop files here or click here to browse for files.</p>
          </Dropzone>
        </div>
        <div style={ { ...styles.wrapper, ...styles.imagesWrapper } }>
          {this.state.files.map((file, key) => <Image key={key} file={file}></Image>)}
        </div>
      </div>
    );
  }
}

Contribute.defaultProps = {};

export default Contribute;
