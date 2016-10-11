/**
 * Created by vietnam on 10/6/16.
 */
import React from 'react';

class Step extends React.Component {
    changeLesson() {
        if (this.props.data.active) {
            this.props.onclick(this.props.data.id);
        }
    }

    render() {
        let className = 'mdl-stepper-step';
        var maskIcon;
        if (this.props.data.active) {
            className += ' active-step';
        }
        if (this.props.current) {
            className += ' current-step';
            maskIcon = <i className="material-icons mask-icon">location_on</i>;
        }
        if (this.props.data.done) {
            className += ' step-done';
            maskIcon = <i className="material-icons mask-icon">done</i>;
        }
        var icon;
        switch (this.props.data.type) {
            case 'text':
                icon = <i className="material-icons">hdr_weak</i>;
                break;
            case 'video':
                icon = <i className="material-icons">play_arrow</i>;
                break;
            case 'slide':
                icon = <i className="material-icons">slideshow</i>;
                break;
            case 'quiz':
                icon = <i className="material-icons">edit</i>;
                break;
            case 'code':
                icon = <i className="material-icons">code</i>;
                break;
        }

        return (
            <div className={className}>
                <div className="mdl-stepper-circle" onClick={()=> this.changeLesson()}>{icon}{maskIcon}</div>
                <span className="tooltiptext">
                    <div className="mdl-stepper-title">{this.props.data.title}</div>
                    <div className="mdl-stepper-optional">{this.props.data.subtitle}</div>
                </span>
                <div className="mdl-stepper-bar-left"></div>
                <div className="mdl-stepper-bar-right"></div>
            </div>
        )
    }
}

export default Step