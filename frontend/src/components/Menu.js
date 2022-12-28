import React from "react";

const BlockMenu = ({block}) => {
    return (
        <li><a href={block.link}>{block.name}</a></li>
    )
}


const MenuList = ({blocks}) => {
    return (
        <ul className="menu">
            {blocks.map((block) => <BlockMenu block={block}/>)}
        </ul>
    )
}

export default MenuList