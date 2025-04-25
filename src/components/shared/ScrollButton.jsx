"use client"
import { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

class ScrollButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleVisibility);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleVisibility);
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className="scroll-to-top">
        {this.state.visible && (
          <button onClick={this.scrollToTop} className="scroll-button">
            <i className="fas fa-chevron-up"><FontAwesomeIcon icon={faChevronUp} /></i>
          </button>
        )}
      </div>
    );
  }
}

export default ScrollButton;