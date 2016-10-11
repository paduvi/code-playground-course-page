/**
 * Created by Cho To Xau Tinh on 07-Oct-16.
 */
import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

require('../css/NoMatch.css');

class NoMatch extends React.Component {
    constructor() {
        super();
        this.degree = 0;
        this.maxtalk = 0;
        this.talkbubble = 1;
        this.timer1 = null;
        this.timer2 = null;
        this.timer3 = null;
    }

    componentDidMount() {

        var self = this;
        this.maxtalk = 0;
        //count talk bubbles
        $("div.bubble-options p.dog-bubble").each(function () {
            this.maxtalk++;
        }.bind(this));

        rotate();
        dogRun();
        dogTalk();

        //function that handles the talking dog bubble animations
        function dogTalk() {
            self.timer1 = setTimeout(function () {

                //change the bubble html code
                var $temp = "<p>" + $("div.bubble-options p.dog-bubble:nth-child(" + self.talkbubble + ")").html() + "</p>";
                $("div.dog-bubble").html($temp);

                //randomize bubble-option
                //talkbubble = Math.floor((Math.random()*maxtalk)+1);

                //browse through bubble-options
                if (self.talkbubble < self.maxtalk)
                    self.talkbubble = self.talkbubble + 1;
                else
                    self.talkbubble = 1;

                //show the bubble
                $(".dog-bubble").animate({"opacity": '1', "bottom": '10px'}, 400);

                //hide the bubble
                setTimeout(function () {

                    $(".dog-bubble").animate({"opacity": '0', "bottom": '0px'}, 400);
                    dogTalk();

                }, 5000);

            }, 2000);
        }

        //function that handles the planet animation
        function rotate() {
            var $planet = $("div.planet>img");

            //CSS3
            $planet.css({'transform': 'rotate(' + self.degree + 'deg)'});
            // For webkit browsers: e.g. Chrome
            $planet.css({WebkitTransform: 'rotate(' + self.degree * 2 + 'deg)'});
            // For Mozilla browser: e.g. Firefox
            $planet.css({'-moz-transform': 'rotate(' + self.degree + 'deg)'});
            //IE9
            $planet.css({'-ms-transform': 'rotate(' + self.degree + 'deg)'});
            //Opera
            $planet.css({'-o-transform': 'rotate(' + self.degree + 'deg)'});

            // Animate rotation with a recursive call
            self.timer2 = setTimeout(function () {
                self.degree -= 0.1;
                rotate();
            }, 10);
        }

        //function that handles dog movement animation
        function dogRun() {

            var dog = $("div.dog");
            self.timer3 = setTimeout(function () {
                if (dog.css("background-position") == "0px 0px")
                    dog.css({"background-position": "-80px -2px"});
                else
                    dog.css({"background-position": "0px 0px"});
                dogRun();
            }, 130);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timer1);
        clearTimeout(this.timer2);
        clearTimeout(this.timer3);

    }

    render() {
        return (
            <div id="not-found-wrapper">
                <div className="graphic">
                    <img src="assets/img/404.png" alt="404"/>
                </div>

                <div className="top-left">
                    <div className="not-found-text">
                        <h1 className="not-found-text">Page not found!</h1>
                    </div>

                    <div className="top-menu">
                        <Link to='/' title="Return to the home page">Home</Link> |
                        <Link to='/0' title="Navigate through our online lecture">Lecture</Link>
                    </div>
                </div>

                <div className="planet">
                    <div className="dog-wrapper">
                        <div style={{backgroundPosition: "0px 0px"}} className="dog"></div>

                        <div style={{opacity: 1, bottom: '10px'}} className="dog-bubble"><p>
                            Are you lost, bud? No worries, I'm an excellent guide!
                        </p></div>

                        <div className="bubble-options">
                            <p style={{opacity: 1, bottom: "10px"}} className="dog-bubble">
                                Are you lost, bud? No worries, I'm an excellent guide!
                            </p>
                            <p style={{opacity: 1, bottom: "10px"}} className="dog-bubble">
                                <br/>
                                Arf! Arf!
                            </p>
                            <p style={{opacity: 1, bottom: "10px"}} className="dog-bubble">
                                <br/>
                                Don't worry! I'm on it!
                            </p>
                            <p style={{opacity: 1, bottom: "10px"}} className="dog-bubble">
                                I wish I had a cookie<br/><img style={{marginTop: "8px"}} src="assets/img/cookie.png"
                                                               alt="cookie"/>
                            </p>
                            <p style={{opacity: 1, bottom: "10px"}} className="dog-bubble">
                                <br/>
                                Geez! This is pretty tiresome!
                            </p>
                            <p style={{opacity: 1, bottom: "10px"}} className="dog-bubble">
                                <br/>
                                Am I getting close?
                            </p>
                            <p style={{opacity: 1, bottom: "10px"}} className="dog-bubble">
                                Or am I just going in circles? Nah...
                            </p>
                            <p style={{opacity: 1, bottom: "10px"}} className="dog-bubble">
                                <br/>
                                OK, I'm officially lost now...
                            </p>
                            <p style={{opacity: 1, bottom: "10px"}} className="dog-bubble">
                                I think I saw a <br/><img style={{marginTop: "8px"}} src="assets/img/cat.png"
                                                          alt="cat"/>
                            </p>
                            <p style={{opacity: 1, bottom: "10px"}} className="dog-bubble">
                                What are we supposed to be looking for, anyway? @_@
                            </p>
                        </div>
                    </div>

                    <img style={{transform: "rotate(-767.4deg)"}} src="assets/img/planet.png" alt="planet"/>
                </div>
            </div>
        );
    }
}

export default NoMatch