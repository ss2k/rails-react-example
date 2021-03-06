var Posts = React.createClass({
  getInitialState: function() {
    return { posts: this.props.myPosts};
  },
  render: function() {
    var allPosts = this.state.posts.map(function(post) {
      return <Post key={post.id} post={post} />;
    });
    return (
      <div className='postDiv'>
        { allPosts }
      </div>
    );
  }
});

var Post = React.createClass({
  render: function() {
    return(      
      <div className='post'>
        <h2>{ this.props.post.title }</h2>
        <span className='postBody'> { this.props.post.body } </span>
      </div>
    );
  }
});