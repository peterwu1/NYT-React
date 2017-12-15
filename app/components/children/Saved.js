var React = require("react");

var Saved = React.createClass({
  render: function() {
    console.log("Rendering saved, props.saved: " + this.props.saved);
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">
          {this.props.saved.map(function(search, i) {
            return (
              <p key={i}><a href="{search.url}">{search.title}</a> (Saved on: {search.date})</p>
            );
          })}
        </div>
      </div>
    );
  }
});

module.exports = Saved;