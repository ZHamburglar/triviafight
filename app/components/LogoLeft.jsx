var React = require('react');

var LogoLeft = React.createClass({
  render : function(){
    return (
      <div className="logo-left-div">
        <img className="imgLeft" src="app/images/logo.png" alt="logo" />
      </div>
    );
  }
});

module.exports = LogoLeft;
