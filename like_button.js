'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      {
        onClick: () => this.setState({ liked: true }),
        className:
          'bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg',
      },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
