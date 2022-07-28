import { Component } from 'react';
import './Modal.css';

export class Modal extends Component {
  componentDidMount() {
    console.log('modal mont');
  }
  componentWillUnmount() {
    console.log('modal unmont');
  }

  render() {
    return (
      <div className="Overlay">
        <div Modal>{this.props.children}</div>
      </div>
    );
  }
}
