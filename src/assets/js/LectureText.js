/**
 * Created by Cho To Xau Tinh on 07-Oct-16.
 */
var React = require('react');
var HtmlToReactParser = require('html-to-react').Parser(React);
var CardText = require('material-ui').CardText;
var CardTitle = require('material-ui').CardTitle;

var LectureText = React.createClass({
    render: function () {
        return (
            <div className="lectureText">
                <CardTitle title={<h3 style={{fontSize: '28px'}}>{this.props.data.title}</h3>}/>
                <CardText color="rgba(0, 0, 0, 0.5)">
                    {HtmlToReactParser.parse(this.props.data.content)}
                </CardText>
            </div>
        )
    }
});

module.exports = LectureText;
