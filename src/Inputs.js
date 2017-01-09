import React, { Component } from 'react';

export default class GroovyInputs extends Component {
    constructor() {
        super();
        // Initial state for checkboxes
        this.state = {
            facebook: false,
            twitter: false,
            google: false
        }
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    // Reverse state for corresponding checkbox
    handleCheckbox(e) {
        const { name } = e.target;
        let obj = {};
        obj[name] = !this.state[name];
        this.setState(obj);
        this.props.updateState(name, !this.state[name]);
    }
    // Hoist key->value pairs to parent component
    handleUpdate(e) {
        const { name, value } = e.target;
        this.props.updateState(name, value);
    }

    render() {
        return(
            <div className="groovy-inputs">
                <h2>Fundamentals</h2>
                
                <input 
                    type="text" 
                    name="websiteName" 
                    ref={input => this.name = input} 
                    placeholder="Website Name" 
                    onChange={this.handleUpdate}
                />
                <span className="helper">The title of your website. Appears in tabs.</span>

                <input 
                    type="text" 
                    name="canonicalUrl"
                    ref={input => this.canonical = input} 
                    placeholder="Canonical URL"
                    onChange={this.handleUpdate}
                />
                <span className="helper">For SEO goodness. Enter the full URL of your homepage so the search engine knows which is the 'canonical' version. This greatly helps search engines in knowing which page is your 'true' home page, and thus improves search results. When filled out, I'll automatically include it in the social tags so you're ready to go.</span>

                <textarea 
                    name="keywords"
                    ref={input => this.keywords = input} 
                    placeholder="Keywords (separate with commas)"
                    onChange={this.handleUpdate}
                />
                <span className="helper">Pretty much ignored these days, but still used by lesser-known search engines. Keywords should be relevant to text found on the page. Make sure they are relevant; too many may hurt your SEO.</span>

                <textarea 
                    name="description"
                    ref={input => this.desc = input} 
                    placeholder="A short description of your site (max recommended 200 chars)"
                    onChange={this.handleUpdate}
                />
                <span className="helper">It's important to give your site a good description. This will be displayed in search engine results, as well as Social sharing.</span>
                
                <div className="social">
                    <label className="facebook">
                        <input type="checkbox" name="facebook" onChange={this.handleCheckbox.bind(this)} />
                        Facebook
                    </label>

                    <label className="twitter">
                        <input type="checkbox" name="twitter" onChange={this.handleCheckbox.bind(this)} />
                        Twitter
                    </label>

                    <label className="google">
                        <input type="checkbox" name="google" onChange={this.handleCheckbox.bind(this)} />
                        Google+
                    </label>
                </div>

                <h2>Let's get Social!</h2>
                <p>Groovy Meta supports major social platforms, simply check the ones you want to include tags for and fill them in.</p>

                {this.state.facebook ?

                    <div>
                        <h3>Facebook</h3>

                        <p>A lot of content is shared via Facebook, so filling out these fields will ensure your page looks great when people share a link to your home page on Facebook. <a href="https://developers.facebook.com/docs/sharing/best-practices" target="_blank">Read more about Facebook's best sharing practises here.</a></p>

                        <input 
                            name="fbTitle"
                            type="text" 
                            ref={input => this.fbTitle = input} 
                            placeholder="The title of your article, excluding any branding."
                            onChange={this.handleUpdate}
                        />
                        <span className="helper">The title of your article, excluding any branding. Don't use your website name. Think of a catchy headline.</span>
                    
                        <input 
                            name="fbName"
                            type="text" 
                            ref={input => this.fbName = input} 
                            placeholder="The name of your website, not the URL."
                            onChange={this.handleUpdate}
                        />
                        <span className="helper">The name of your website. Not the URL, but the name. (i.e. "Google" not "google.com".)</span>

                        <input 
                            name="fbImage"
                            type="text" 
                            ref={input => this.fbImage = input} 
                            placeholder="A link to an image you want displayed when your page is shared."
                            onChange={this.handleUpdate}
                        />
                        <span className="helper">This is an image associated with your media. We suggest that you use an image of at least 1200x630 pixels.</span>

                        <input 
                            name="fbLocale"
                            type="text" 
                            ref={input => this.fbLocale = input} 
                            placeholder="Your locale. Use en_US if unsure."
                            onChange={this.handleUpdate}
                        />
                        <span className="helper">The locale of the resource. The default is en_US. Format is ll_cc where "ll" is language and "cc" is Country.</span>

                        <input 
                            name="fbId"
                            type="text" 
                            ref={input => this.fbId = input} 
                            placeholder=""
                            onChange={this.handleUpdate}
                        />
                        <span className="helper">(Optional) The unique ID that lets Facebook know the identity of your site. This is crucial for Facebook Insights to work properly. See <a href="https://developers.facebook.com/docs/insights" target="_blank">Facebooks Insights Documentation</a> for more details.</span>

                    </div>

                : null
                }

                {this.state.twitter === true ?

                    <div>

                        <h3>Twitter</h3>

                        <p>Twitter offer 'Summary cards' to enable better sharing of content. Please fill out the tags if you want your link to look great in Twitter shares. When live on your site, you need to <a href="https://dev.twitter.com/docs/cards/validation/validator" target="_blank">register your Summary Card with Twitter.</a></p>
                        
                        <input 
                            name="twUser"
                            type="text" 
                            ref={input => this.twUser = input} 
                            placeholder="Your Twitter username (include the @)"
                            onChange={this.handleUpdate}
                        />
                        <span className="helper">The Twitter @username the card should be attributed to. <a href="https://dev.twitter.com/cards/analytics" target="_blank">Required for Twitter Card analytics.</a></span>

                        <input 
                            name="twTitle"
                            type="text" 
                            ref={input => this.twTitle = input} 
                            placeholder="The title of your article, excluding any branding."
                            onChange={this.handleUpdate}
                        />
                        <span className="helper">A concise title for the related content.</span>
                    
                        <input 
                            name="twDesc"
                            type="text" 
                            ref={input => this.twDesc = input} 
                            placeholder="Your card's description"
                            onChange={this.handleUpdate}
                        />
                        <span className="helper">A description that concisely summarizes the content as appropriate for presentation within a Tweet. You should not re-use the title as the description or use this field to describe the general services provided by the website. </span>

                        <input 
                            name="twUrl"
                            type="text" 
                            ref={input => this.twUrl = input} 
                            placeholder="A link to an image you want displayed when your page is shared."
                            onChange={this.handleUpdate}
                        />
                        <span className="helper">The image must be a minimum size of 120px by 120px and must be less than 1MB in file size. The image will be cropped to a square on all platforms.</span>

                        <input 
                            name="twAlt"
                            type="text" 
                            ref={input => this.twAlt = input} 
                            placeholder="Your image's alt attribute."
                            onChange={this.handleUpdate}
                        />
                        <span className="helper">A text description of the image conveying the essential nature of an image to users who are visually impaired. </span>

                    </div>

                : null
                }

                {this.state.google === true ?

                    <div>
                        <h3>Google+</h3>

                        <input 
                            name="gUrl"
                            type="text" 
                            ref={input => this.gUrl = input} 
                            placeholder="Your Google+ Profile link"
                            onChange={this.handleUpdate}
                            />
                        <span className="helper">The URL for your Google+ personal profile page.</span>

                        <input 
                            name="gLink"
                            type="text" 
                            ref={input => this.gLink = input} 
                            placeholder="Your Google+ Page Profile link"
                            onChange={this.handleUpdate}
                        />
                        <span className="helper">(Optional) This should be the URL of your Google+ Business page. Not a personal profile page as above.</span>
                    
                    </div>

                : null
                }

            </div>    
        )
    }
}
