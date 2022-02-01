import React from "react";




const Link = ({ href, children, className }) => {


    const onClickHandler = (event) => {

        if (event.metaKey || event.crtlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }


    return <a onClick={onClickHandler} className={className} href={href}>{children}</a>
}



export default Link;