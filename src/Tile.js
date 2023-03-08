import React from 'react';


const Tile = (props) => {
    return (
            <td className="Tile"
                onClick={props.flipTile}
                style={{ backgroundColor: props.isLit ? 'orange' : 'lightgray' }}>
            </td>
    );
};

export default Tile;