import React from "react";

const FooterBlock = ({block}) => {
    return (
        <div><a href={block.link}>{block.name}</a></div>
    )
}


const FooterList = ({blocks}) => {
    return (
        <div className="footer">
            {blocks.map((block) => <FooterBlock block={block}/>)}
        </div>
    )
}

export default FooterList