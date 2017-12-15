var React = require("react");

var Results = React.createClass({
  getInitialState: function() {
    return { articles: [] };
  },
  handleSubmit: function(event) {

    console.log(this.state.articles[event.target.value].title);
    this.props.saveArticle(this.state.articles[event.target.value]);
    this.props.updateSaved();
  },

  render: function() {
    var thisComp = this;
    var articles = [];

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body">
          {}
          {this.props.articles.map(function(search, i) {
            thisComp.state.articles.push({title: search.headline.main, url: search.web_url});

            return (
              <div>
              <h2 key={i}>{search.headline.main}</h2>
              {
              }
              <button className="btn btn-success" type="button" onClick={thisComp.handleSubmit} value={i}>Save</button>
              </div>
            );
          })}
        </div>
      </div>
    );

  }
});

module.exports = Results;