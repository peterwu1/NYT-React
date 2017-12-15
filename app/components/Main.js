var React = require("react");

var Search = require("./children/Search.js");
var Results = require("./children/Results.js");
var Saved = require("./children/Saved.js");

var helpers = require("./utils/helpers.js");

var Main = React.createClass({
  getInitialState: function() {
    return { searchTerm: "", startYear: "", endYear: "", results: [], saved: [] };
  },
  componentDidMount: function() {

    helpers.getSaved().then(function(response) {
      console.log("Getting saved stories: " + response.data);
      if (response !== this.state.saved) {
        this.setState({ saved: response.data });
      }
    }.bind(this));
  },
  componentDidUpdate: function() {
  
    console.log("component updated!");
    helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear).then(function(data) {
      if (data !== this.state.results) {
        this.setState({ results: data });
      }
      helpers.getSaved().then(function(response) {
        console.log("Getting saved stories: " + response.data);
        if (response !== this.state.saved) {
          this.setState({ saved: response.data });
        }
      }.bind(this))
    }.bind(this));

  },
  setTerm: function(term, startYear, endYear) {
    this.setState({ searchTerm: term, startYear: startYear, endYear: endYear });
  },
  saveArticle: function(article) {
    console.log("The article is: " + article.title);
    helpers.postSaved(article);
  },
  updateSaved: function() {
    var saved = helpers.getSaved();
    this.setState({ saved: saved });
  },
  render: function() {
    return (
      <div className="container">
        <div className="row">

          <div className="jumbotron">

            <h2 className="text-center">NYTimes Search</h2>

          </div>

          <div className="row">

            <Search setTerm={this.setTerm} />

          </div>

          <div className="row">

            <Results articles={this.state.results} updateSaved={this.updateSaved} saveArticle = {this.saveArticle}/>

          </div>

        </div>

        <div className="row">

          <Saved saved={this.state.saved} />

        </div>

      </div>
    );
  }
});

module.exports = Main;