/**
 * Created by Cho To Xau Tinh on 07-Oct-16.
 */
var React = require('react');
var HtmlToReactParser = require('html-to-react').Parser(React);
var CardText = require('material-ui').CardText;
var CardTitle = require('material-ui').CardTitle;
var $ = require('jquery');

var LectureText = React.createClass({
    componentDidMount: function () {
        this.highlightCode();
    },
    componentDidUpdate: function () {
        this.highlightCode();
    },
    highlightCode: function () {
        $('pre,code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    },
    render: function () {
        return (
            <div className="lectureText">
                <CardTitle title={<h3
                    style={{fontSize: '28px', textAlign: 'center', fontWeight: 'bold'}}>{this.props.data.title}</h3>}
                           subtitleStyle={{display: 'inline'}} subtitle={this.props.data.subtitle}/>
                <CardText color="rgba(0, 0, 0, 0.5)">
                    {HtmlToReactParser.parse(this.props.data.content)}
                </CardText>
            </div>
        )
    }
});

module.exports = LectureText;
