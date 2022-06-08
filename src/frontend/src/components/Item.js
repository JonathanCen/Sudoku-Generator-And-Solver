import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";


function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                border: "1px solid black",
                ...sx
            }} {...other}
        />
    )
}

Item.propTypes = {
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
        ),
        PropTypes.func,
        PropTypes.object
    ])
}

export default Item;