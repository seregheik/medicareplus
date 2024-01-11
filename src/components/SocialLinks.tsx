import IconButton from "@mui/material/IconButton";
import { PiInstagramLogoFill } from "react-icons/pi";
import { PiFacebookLogoFill } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";

const SocialLinks = () => {
    return (
        <div className="d-flex  justify-content-center">
            <div className="px-q">
                <IconButton
                    size="small"
                    className="fs-2"
                    sx={{ color: "inherit" }}
                    href="https://www.instagram.com/medihaleconsults"
                    target="_blank"
                >
                    <PiInstagramLogoFill />
                </IconButton>
            </div>
            <div className="px-1">
                <IconButton
                    size="small"
                    className="fs-2"
                    sx={{ color: "inherit" }}
                    href=""
                    target="_blank"
                >
                    <PiFacebookLogoFill />
                </IconButton>
            </div>
            <div className="px-1">
                <IconButton
                    size="small"
                    className="fs-2"
                    sx={{ color: "inherit" }}
                    href="https://x.com/medihaleconsult"
                    target="blank"
                >
                    <RiTwitterXFill />
                </IconButton>
            </div>
            <div className="px-1">
                <IconButton
                    size="small"
                    className="fs-2"
                    sx={{ color: "inherit" }}
                    href="https://www.linkedin.com/in/medihale-consults-895a20298/"
                    target="blank"
                >
                    <RiLinkedinBoxFill />
                </IconButton>
            </div>
        </div>
    )
}

export default SocialLinks