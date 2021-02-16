import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.css";
import useClipboard from "react-use-clipboard";

function Footer() {
    const [isCopied, setCopied] = useClipboard("ethan.r.mcdowell@gmail.com");
    return(
        <div className="contact">
            <a href="https://www.facebook.com/ethan.mcdowell/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab", "facebook-square"]} size="3x" /></a>
            <a href="https://www.instagram.com/ethansuckz/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab", "instagram-square"]} size="3x" /></a>
            <a href="https://github.com/ethanrmcdowell" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab", "github-square"]} size="3x" /></a>
            <a href="https://www.last.fm/user/spartaoverboard" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab", "lastfm-square"]} size="3x" /></a>
            <a href="https://www.linkedin.com/in/ethan-r-mcdowell/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" /></a>
            <FontAwesomeIcon icon={["fas", "envelope-square"]} size="3x" onClick={setCopied}>{isCopied ? <h1 className="copied-alert">Copied to clipboard!</h1> : "Nope! 👎"}</FontAwesomeIcon>
        </div>
    )
}

export default Footer;