import React from 'react';
import PropTypes from 'prop-types';

import Image from '../Contribute/Image';

class View extends React.PureComponent {

  static propTypes = {

  }

  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest()
    xhr.open('get', 'http://35.225.96.119:8080/images', true)
    xhr.onload = () => this.setState({ images: JSON.parse(xhr.response).results })
    xhr.send()
  }

  render() {
    const styles = {
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      imagesWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100vw',
        paddingTop: '24px',
      },
    }
    return (
      <div style={styles.imagesWrapper}>
        {this.state.images.map((image, key) => <Image file={{ isRamen: image.isRamen, preview: image.imageUrl }}></Image>)}
      </div>
    );
  }
}

View.defaultProps = {};

export default View;
