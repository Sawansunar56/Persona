import GithubIcon from "../assets/github.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/x-twitter.svg";
import MyIcon from "../assets/Icon Design- High Def.png"
import { A } from "@solidjs/router"

function Navbar() {
    return (
        <nav>
            <div>
                <A href="/">
                    <div class="wrapper personal-icon-wrapper">
                        <img src={MyIcon} alt="" class="my-icon" />
                    </div>
                </A>
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
            </div>
            <div>
                <div class="wrapper social-icon-wrapper">
                    <A href="https://www.github.com/Sawansunar56">
                        <img class="social-icon" src={GithubIcon} alt="" />
                    </A>
                    <A href="https://twitter.com/SunarSawan7042">
                        <img class="social-icon" src={TwitterIcon} alt="" />
                    </A>
                    <A href="https://www.linkedin.com/in/sawan-sunar-618a3b247/">
                        <img class="social-icon" src={LinkedInIcon} alt="" />
                    </A>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
