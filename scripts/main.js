var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var Catalyst = require('react-catalyst');

var App = React.createClass({

    // Two-way data-binding love
    mixins : [Catalyst.LinkedStateMixin],

    getInitialState : function() {
    return {
      tags: {
        fb: false,
        twitter: false,
        googlePlus: false
      }
    }
  },

    render : function() {
        var Version = "2.0";
        return (
            <div className="groovy-meta">
                <Header tagline="Groovy Meta Generator" version={Version} />
                <Introduction />
                <GroovyInputs linkState={this.linkState} tags={this.state.tags} />
                <GroovyOutputs tags={this.state.tags} />
            </div>
        )
    }

})

// Header

var Header = React.createClass({

    render : function() {

        return(
            <header>
                <h1>{this.props.tagline}</h1>
                <span>v{this.props.version}</span>
            </header>            
        )
    }
})

// Introduction

var Introduction = React.createClass({

    render : function() {

        return(
            <article>
                <p>I built this tool purely to speed up creation of HTML metadata for websites, as well as those pesky social tags. It's already configured for best-practises from Facebook, Google and Twitter and when you're done all you need to do is copy-paste. It's your one-stop-meta-tag-shop. Oh, and it's free!</p>
            </article>            
        )
    }
})

// GroovyInputs

var GroovyInputs = React.createClass({

    checkFb : function() {
        var fb = this.props.tags.fb;
            if (fb === false) {
                FaceBook = <FaceBook linkState={this.props.linkState}/>;

                // ToDo : Hide checkbox
            }
    },
    checkTwitter : function() {
        var twitter = this.props.tags.twitter;
            if (fb === false) {
                Twitter = <Twitter/>;

                // ToDo : Hide checkbox
            }
    },
    checkGoogle : function() {
        var google = this.props.tags.googlePlus;
            if (fb === false) {
                GooglePlus = <GooglePlus/>;

                // ToDo : Hide checkbox
            }
    },

    render : function() {
        var linkState = this.props.linkState;

        return(
            <div className="groovy-inputs">

                <h2>Fundamentals</h2>
                <p>These tags are the most valuable, make sure they're filled out for best-usage.</p>
                
                <input type="text" valueLink={linkState('tags.title')} placeholder="Website Name"/>
                <span className="helper">The title of your website. Appears in tabs.</span>

                <input type="text" valueLink={linkState('tags.canonical')} placeholder="Canonical URL"/>
                <span className="helper">For SEO goodness. Enter the full URL of your homepage so the search engine knows which is the 'canonical' version. This greatly helps search engines in knowing which page is your 'true' home page, and thus improves search results. When filled out, I'll automatically include it in the social tags so you're ready to go.</span>

                <textarea valueLink={linkState('tags.keywords')} placeholder="Keywords (separate with commas)"/>
                <span className="helper">Pretty much ignored these days, but still used by lesser-known search engines. Keywords should be relevant to text found on the page. Make sure they are relevant; too many may hurt your SEO.</span>

                <textarea valueLink={linkState('tags.desc')} placeholder="A short description of your site (max recommended 200 chars)"/>
                <span className="helper">It's important to give your site a good description. This will be displayed in search engine results, as well as Social sharing.</span>
                
                <input type="checkbox" checkedLink={linkState('tags.fb')} onClick={this.checkFb} placeholder="Website Name"/>
                <span className="helper">Facebook</span>

                <input type="checkbox" checkedLink={linkState('tags.twitter')} placeholder="Website Name"/>
                <span className="helper">Twitter</span>

                <input type="checkbox" checkedLink={linkState('tags.googlePlus')} placeholder="Website Name"/>
                <span className="helper">Google+</span>

                <h2>Let's get Social!</h2>
                <p>Groovy Meta supports major social platforms, simply check the ones you want to include tags for and fill them in.</p>

                {FaceBook}

            </div>    
        )
    }
})

// FaceBook

var FaceBook = React.createClass({

    render : function() {
        var linkState = this.props.linkState;
        return(
            <div>
                <input type="text" valueLink={linkState('tags.socialTitle')} placeholder="The title of your article, excluding any branding."/>
                <span className="helper">The title of your article, excluding any branding. Don't use your website name. Think of a catchy headline.</span>
            </div>
        )
    }
})


// GroovyOutputs

var GroovyOutputs = React.createClass({

    render : function() {

        var tags = this.props.tags;

        return(
            <p>{tags.name}</p>    
        )
    }
})

// Routes

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}/>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));