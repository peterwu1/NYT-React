var axios = require("axios");
var jsonp = require("jsonp");

var helper = {


  runQuery: function(queryTerm, startYear, endYear) {
    var authKey = '02f755e84aa34b25bfb1063dadb369e2';

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey
      + "&q=" + queryTerm + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231";

    return axios.get(queryURL)
    .then(function(NYTData) {
 
      return NYTData.data.response.docs;
    });

  },

 
  getSaved: function() {
    return axios.get("/api");
  },


  postSaved: function(article) {
    return axios.post("/api/save", {title: article.title, url: article.url});
  }
};

module.exports = helper;