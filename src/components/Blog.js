import React, { Component } from "react";
 
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      entries: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/yoel169/my-app/contents/src/components/data/blog.json')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.entries
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, entries } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(entries);
      return (
        <ul>
          {entries.map(entry => (
            <li id={entry.id}>
              {entry.name} {entry.entry}
            </li>
          ))}
        </ul>
      );
    }
  }
}
 
export default Blog;