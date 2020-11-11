import React from 'react';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/repos/yoel169/my-app/contents/src/components/data/blog.json")
      .then(result => result.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            //get content off response, decode, then grab the items inside the array
            items: JSON.parse(atob(result.content)).items
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1 id="title">My Blog</h1>
          <h2>This is my blog where I keep you updated with everything that's happening.</h2>
          {items.map(item => (  
            <div>   
            <p>Posted: {item.date}</p>
            <p>{item.entry}</p>
            </div>           
          ))}
        </div>
      );
    }
  }
}
 
export default Blog;