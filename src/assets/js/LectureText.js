/**
 * Created by Cho To Xau Tinh on 07-Oct-16.
 */
import React from 'react';
import HtmlToReact from 'html-to-react';
import {CardText, CardTitle} from 'material-ui'
import $ from 'jquery';

require('../css/railscasts.css');

class LectureText extends React.Component {
    constructor(props) {
        super(props);
        this.HtmlToReactParser = HtmlToReact.Parser(React);
    }

    componentDidMount() {
        this.highlightCode();
    }

    componentDidUpdate() {
        this.highlightCode();
    }

    highlightCode() {
        $('pre,code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }

    render() {
        return (
            <div className="lectureText">
                <CardTitle title={<h3
                    style={{fontSize: '28px', textAlign: 'center', fontWeight: 'bold'}}>{this.props.data.title}</h3>}
                           subtitleStyle={{display: 'inline'}} subtitle={this.props.data.subtitle}/>
                <CardText color="rgba(0, 0, 0, 0.5)">
                    {this.HtmlToReactParser.parse(this.props.data.content)}
                </CardText>
            </div>
        )
    }
}

export default LectureText
