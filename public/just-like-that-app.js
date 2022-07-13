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

    // return e(
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   'Like'
    // );

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );

  }
}

class LikedSongs extends React.Component {



  constructor(props) {
    super(props);
  }

  render() {
    var data = [
      { name: "Anom", age: 19, gender: "Male" },
      { name: "Megha", age: 19, gender: "Female" },
      { name: "Subham", age: 25, gender: "Male" },
    ]
    return (
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
              </tr>
            )
          })}
        </table>
    )
  }
}


const domContainer = document.querySelector('#just-like-that-container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
root.render(e(LikedSongs));