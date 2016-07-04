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
        canonical: "",
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
                <Header version={Version} />
                <GroovyInputs linkState={this.linkState} tags={this.state.tags} />
                <GroovyOutputs tags={this.state.tags}/>
                <Footer/>
            </div>
        )
    }

})

// Header

var Header = React.createClass({

    render : function() {

        return(
            <header>
                <div className="groovy-title">
                    <h1>Groovy<span>Meta</span>Generator<span>v{this.props.version}</span></h1>
                </div>
                <div className="groovy-desc">
                    <p>I built this tool purely to speed up creation of HTML metadata for websites, as well as those pesky social tags. It's already configured for best-practises from Facebook, Google and Twitter and when you're done all you need to do is copy-paste. It's your one-stop-meta-tag-shop. Oh, and it's free!</p>
                </div>
            </header>            
        )
    }
})

// GroovyInputs

var GroovyInputs = React.createClass({

    render : function() {
        var linkState = this.props.linkState;
        var tags = this.props.tags;

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
                
                <input type="checkbox" checkedLink={linkState('tags.fb')}/>
                <span className="helper">Facebook</span>

                <input type="checkbox" checkedLink={linkState('tags.twitter')}/>
                <span className="helper">Twitter</span>

                <input type="checkbox" checkedLink={linkState('tags.googlePlus')}/>
                <span className="helper">Google+</span>

                <h2>Let's get Social!</h2>
                <p>Groovy Meta supports major social platforms, simply check the ones you want to include tags for and fill them in.</p>

                {tags.fb == true ?

                    <div>

                        <h3>Facebook</h3>

                        <p>A lot of content is shared via Facebook, so filling out these fields will ensure your page looks great when people share a link to your home page on Facebook. <a href="https://developers.facebook.com/docs/sharing/best-practices" target="_blank">Read more about Facebook's best sharing practises here.</a></p>

                        <input type="text" valueLink={linkState('tags.socialTitle')} placeholder="The title of your article, excluding any branding."/>
                        <span className="helper">The title of your article, excluding any branding. Don't use your website name. Think of a catchy headline.</span>
                    
                        <input type="text" valueLink={linkState('tags.socialName')} placeholder="The name of your website, not the URL."/>
                        <span className="helper">The name of your website. Not the URL, but the name. (i.e. "Google" not "google.com".)</span>

                        <input type="text" valueLink={linkState('tags.socialImage')} placeholder="A link to an image you want displayed when your page is shared."/>
                        <span className="helper">This is an image associated with your media. We suggest that you use an image of at least 1200x630 pixels.</span>

                        <input type="text" valueLink={linkState('tags.socialLocale')} placeholder="Your locale. Use en_US if unsure."/>
                        <span className="helper">The locale of the resource. The default is en_US. Format is ll_cc where "ll" is language and "cc" is Country.</span>

                        <input type="text" valueLink={linkState('tags.FacebookAppID')} placeholder=""/>
                        <span className="helper">(Optional) The unique ID that lets Facebook know the identity of your site. This is crucial for Facebook Insights to work properly. See <a href="https://developers.facebook.com/docs/insights" target="_blank">Facebooks Insights Documentation</a> for more details.</span>

                    </div>

                : null
                }

                {tags.twitter == true ?

                    <div>

                        <h3>Twitter</h3>

                        <p>Twitter offer 'Summary cards' to enable better sharing of content. Please fill out the tags if you want your link to look great in Twitter shares. When live on your site, you need to <a href="https://dev.twitter.com/docs/cards/validation/validator" target="_blank">register your Summary Card with Twitter.</a></p>
                        
                        <input type="text" valueLink={linkState('tags.twitterSite')} placeholder="Your Twitter username (include the @)"/>
                        <span className="helper">The Twitter @username the card should be attributed to. <a href="https://dev.twitter.com/cards/analytics" target="_blank">Required for Twitter Card analytics.</a></span>

                        <input type="text" valueLink={linkState('tags.twitterTitle')} placeholder="The title of your article, excluding any branding."/>
                        <span className="helper">A concise title for the related content.</span>
                    
                        <input type="text" valueLink={linkState('tags.twitterDescription')} placeholder="Your card's description"/>
                        <span className="helper">A description that concisely summarizes the content as appropriate for presentation within a Tweet. You should not re-use the title as the description or use this field to describe the general services provided by the website. </span>

                        <input type="text" valueLink={linkState('tags.twitterImage')} placeholder="A link to an image you want displayed when your page is shared."/>
                        <span className="helper">The image must be a minimum size of 120px by 120px and must be less than 1MB in file size. The image will be cropped to a square on all platforms.</span>

                        <input type="text" valueLink={linkState('tags.twitterImageAlt')} placeholder="Your image's alt attribute."/>
                        <span className="helper">A text description of the image conveying the essential nature of an image to users who are visually impaired. </span>

                    </div>

                : null
                }

                {tags.googlePlus == true ?

                    <div>

                        <h3>Google+</h3>

                        <input type="text" valueLink={linkState('tags.googlePlusProfile')} placeholder="Your Google+ Profile link"/>
                        <span className="helper">The URL for your Google+ personal profile page.</span>

                        <input type="text" valueLink={linkState('tags.googlePlusPageProfile')} placeholder="Your Google+ Page Profile link"/>
                        <span className="helper">(Optional) This should be the URL of your Google+ Business page. Not a personal profile page as above.</span>
                    
                    </div>

                : null
                }

            </div>    
        )
    }
})

// GroovyOutputs

var GroovyOutputs = React.createClass({

    render : function() {

        var tags = this.props.tags;

        return(
            <div className="groovy-outputs">
                <h2>Your Meta Tags</h2>
                <p>Once you're done, just copy-paste it straight into your project &lt;head&gt; tags!</p>

                <section className="code">
                    <span className="meta">&lt;meta</span> <span className="property">http-equiv</span>="Content-Type" <span className="property">content=</span>"text/html; charset=utf-8" <span className="meta">&gt;</span>
                    <br />

                    <span className="meta">&lt;title&gt;</span>{tags.title}<span className="meta">&lt;/title&gt;</span>
                    <br />

                    { tags.canonical !=="" ?
                        <div>
                            <span className="meta">&lt;link</span> <span className="property">rel</span>="canonical" <span className="property">href</span>="{tags.canonical}"&gt;
                            <br />
                        </div>
                        : null
                    }

                    <span className="meta">&lt;meta</span> <span className="property">name</span>="viewport" <span className="property">content=</span>"width=device-width, initial-scale=1"&gt;
                    <br />

                    <span className="meta">&lt;meta</span> <span className="property">name</span>="keywords" <span className="property">content=</span>"{tags.keywords}" <span className="meta">&gt;</span>
                    <br />

                    <span className="meta">&lt;meta</span> <span className="property">name</span>="description" <span className="property">content=</span>"{tags.desc}"<span className="meta">&gt;</span>
                    <br />

                    { tags.fb ==true ?
                        <div>
                            <span className="comment">&lt;!--FACEBOOK--&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="og:title" <span className="property">content=</span>"{tags.socialTitle}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="og:site_name" <span className="property">content=</span>"{tags.socialName}"<span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="og:url" <span className="property">content=</span>"{tags.canonical}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="og:description" <span className="property">content=</span>"{tags.desc}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="og:image" <span className="property">content=</span>"{tags.socialImage}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="fb:app_id" <span className="property">content=</span>"{tags.FacebookAppID}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="og:type" <span className="property">content=</span>"website" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="og:locale" <span className="property">content=</span>"{tags.socialLocale}" <span className="meta">&gt;</span>
                        </div>
                        : null
                    }

                    { tags.twitter ==true ?
                        <div>
                            <span className="comment">&lt;!--TWITTER--&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="twitter:card" <span className="property">content=</span>"summary" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="twitter:title" <span className="property">content=</span>"{tags.twitterTitle}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="twitter:description" <span className="property">content=</span>"{tags.twitterDescription}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="twitter:creator" <span className="property">content=</span>"{tags.twitterSite}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="twitter:url" <span className="property">content=</span>"{tags.canonical}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="twitter:image" <span className="property">content=</span>"{tags.twitterImage}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="twitter:image:alt" <span className="property">content=</span>"{tags.twitterImageAlt}" <span className="meta">&gt;</span>
                        </div>
                        : null
                    }

                    { tags.googlePlus ==true ?
                        <div>
                            <span className="comment">&lt;!--GOOGLE+--&gt;</span>
                            <br />
                            <span className="meta">&lt;link</span> <span className="property">rel</span>="author" <span className="property">href</span>="{tags.googlePlusProfile}"<span className="meta">&gt;</span>
                            <br /> 
                            <span className="meta">&lt;link</span> <span className="property">rel</span>="publisher" <span className="property">href</span>="{tags.googlePlusPageProfile}"<span className="meta">&gt;</span>
                        </div>
                    :null
                    }
                    
                    
                </section>
            </div>    
        )
    }
})

var Footer = React.createClass({

    render : function() {
        return (

            <footer>
                <div className="icons">
                    <a className="tweet" href="https://twitter.com/home?status=HTML%20meta%20data%20made%20easy%20thanks%20to%20GroovyMeta!%20http://www.groovymeta.com%20@louisotto">Share on Twitter</a>
                    <a className="facebook" href="https://www.facebook.com/sharer/sharer.php?u=http://www.groovymeta.com">Share on Facebook</a>
                </div>
                <p>Built by <a href="https://wingtip.solutions">Louis Otto</a></p>
            </footer>
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