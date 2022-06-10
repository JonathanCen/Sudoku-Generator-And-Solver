import React from "react";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";


function ContactInfo(props) {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                width: "500px"
            }}
        >
            <Typography
                variant="subtitle1"
            >
                <a id="github-link" href="https://github.com/">Source Code <GitHubIcon fontSize="small" /></a>
            </Typography>
            <Typography
                component="overline"
                variant="overline"
            >
                <a id="personal-page-link" href="https://google.com/">Jonathan Cen</a>
            </Typography>
        </Stack >

    )
}

export default ContactInfo;