import React from 'react';

const Header = (props) => {
    return(
        <header>
            <div className="groovy-title">
                <h1>Groovy<span>meta</span>Generator<span>v{props.version}</span></h1>
            </div>
            <div className="groovy-desc">
                <p>Groovy Meta Generator speeds up the application of HTML metadata for websites to the max! Social tags? Got you covered, holmes. Groovy Meta's already configured for best-practises from Facebook, Google and Twitter and when you're done all you need to do is copy-paste. It's your one-stop-meta-tag-shop. Oh, and it's free!</p>
                <p>Simply fill in your site's information on the left, and grab it from the code box on the right, when you're done. Catch you on the flip side!</p>
            </div>
        </header>            
    )
}

export default Header;
