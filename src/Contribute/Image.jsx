import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.PureComponent {

  static propTypes = {
    file: PropTypes.object.isRequired,
  }

  handleMouseOver = () => {

  }

  render() {
    const color = this.props.file.isRamen ? 'rgba(0,200,0,0.5)' : 'rgba(200,0,0,0.5)';
    const styles = {
      wrapper: {
        width: '200px',
        padding: '20px 20px 20px 20px',
      },
      image: {
        width: '100%',
        // webkitFilter: this.props.file.isRamen ? 'grayscale(100%)' : `grayscale(${this.props.file.confidence || 0})`,
        boxShadow: `inset 0px 0px 64px 64px ${color}, 0px 0px 4px 4px ${color}`,
      }
    }
    return (
      <div style={styles.wrapper}>
        <div style={styles.imageFilter}></div>
        <img style={styles.image} src={this.props.file.preview} onMouseOver={this.handleMouseOver}></img>
      </div>
    );
  }
}

Image.defaultProps = {};

export default Image;
