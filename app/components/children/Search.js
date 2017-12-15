var React = require("react");

var Search = React.createClass({
  getInitialState: function() {
    return { term: "", start: "", end: "" };
  },


  handleTermChange: function(event) {
    this.setState({ term: event.target.value });
  },
  handleStartChange: function(event) {
    this.setState({ start: event.target.value });
  },
  handleEndChange: function(event) {
    this.setState({ end: event.target.value });
  },
  handleSubmit: function(event) {
    event.preventDefault();


    this.props.setTerm(this.state.term, this.state.start, this.state.end);
    this.setState({ term: "", start: "", end: "" });
  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className=""><strong>Topic</strong></h4>

              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleTermChange}
                required
              />
              <br />
              
              <h4 className=""><strong>Start Year</strong></h4>

              <input
                value={this.state.start}
                type="text"
                className="form-control text-center"
                id="start"
                onChange={this.handleStartChange}
                
              />
              <br />

              <h4 className=""><strong>End Year</strong></h4>

              <input
                value={this.state.end}
                type="text"
                className="form-control text-center"
                id="end"
                onChange={this.handleEndChange}
                
              />
              <br />

              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Search;