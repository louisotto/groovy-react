import React, { Component } from 'react';
var Clipboard = require('clipboard');

class GroovyOutputs extends Component {
    constructor() {
        super();
        this.state = {
            copied: false
        }
    }

    componentDidMount() {
        // Attach clipboard handler to class on mount
        new Clipboard('.copy');
    }

    handleCopy() {
        this.setState({ copied: true });
        // Reset button text after 3 seconds
        setTimeout(() => this.setState({ copied: false}), 3000);
    }

    render() {
        const {
            websiteName,
            canonicalUrl,
            keywords,
            description,
            fbTitle,
            fbName,
            fbImage,
            fbLocale,
            fbId,
            twUser,
            twTitle,
            twDesc,
            twUrl,
            twAlt,
            gUrl,
            gLink,
            twitter,
            google,
            facebook
        } = this.props.metadata;

        let copiedText = this.state.copied ? 'Copied!' : 'Copy to Clipboard';
        
        return(
            <div className="groovy-outputs">
                <h2>Your Meta Tags</h2>
                
                <section className="code">
                    <span className="meta">&lt;meta</span> <span className="property">http-equiv</span>="Content-Type" <span className="property">content=</span>"text/html; charset=utf-8" <span className="meta">&gt;</span>
                    <br />

                    <span className="meta">&lt;title&gt;</span>{websiteName}<span className="meta">&lt;/title&gt;</span>
                    <br />

                    { canonicalUrl ?
                        <div>
                            <span className="meta">&lt;link</span> <span className="property">rel</span>="canonical" <span className="property">href</span>="{canonicalUrl}"&gt;
                            <br />
                        </div>

                        : null
                    }

                    <span className="meta">&lt;meta</span> <span className="property">name</span>="viewport" <span className="property">content=</span>"width=device-width, initial-scale=1"&gt;
                    <br />

                    <span className="meta">&lt;meta</span> <span className="property">name</span>="keywords" <span className="property">content=</span>"{keywords}" <span className="meta">&gt;</span>
                    <br />

                    <span className="meta">&lt;meta</span> <span className="property">name</span>="description" <span className="property">content=</span>"{description}"<span className="meta">&gt;</span>
                    <br />

                    { facebook === true ?
                        <div>
                            <span className="comment">&lt;!--FACEBOOK--&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="og:title" <span className="property">content=</span>"{fbTitle}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="og:site_name" <span className="property">content=</span>"{fbName}"<span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="og:url" <span className="property">content=</span>"{canonicalUrl}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="og:description" <span className="property">content=</span>"{description}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="og:image" <span className="property">content=</span>"{fbImage}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="fb:app_id" <span className="property">content=</span>"{fbId}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="og:type" <span className="property">content=</span>"website" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="og:locale" <span className="property">content=</span>"{fbLocale}" <span className="meta">&gt;</span>
                        </div>

                        : null
                    }

                    { twitter === true ?
                        <div>
                            <span className="comment">&lt;!--TWITTER--&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="twitter:card" <span className="property">content=</span>"summary" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="twitter:title" <span className="property">content=</span>"{twTitle}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="twitter:description" <span className="property">content=</span>"{twDesc}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="twitter:creator" <span className="property">content=</span>"{twUser}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="twitter:url" <span className="property">content=</span>"{canonicalUrl}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="twitter:image" <span className="property">content=</span>"{twUrl}" <span className="meta">&gt;</span>
                            <br />
                            <span className="meta">&lt;meta</span> <span className="property">property</span>="twitter:image:alt" <span className="property">content=</span>"{twAlt}" <span className="meta">&gt;</span>
                        </div>

                        : null
                    }

                    { google === true ?
                        <div>
                            <span className="comment">&lt;!--GOOGLE+--&gt;</span>
                            <br />
                            <span className="meta">&lt;link</span> <span className="property">rel</span>="author" <span className="property">href</span>="{gUrl}"<span className="meta">&gt;</span>
                            <br /> 
                            <span className="meta">&lt;link</span> <span className="property">rel</span>="publisher" <span className="property">href</span>="{gLink}"<span className="meta">&gt;</span>
                        </div>

                        :null
                    }
                    
                </section>
                <button className="copy" data-clipboard-target=".code" onClick={this.handleCopy.bind(this)}>{copiedText}</button>
            </div>    
        )
    }
}

export default GroovyOutputs;
