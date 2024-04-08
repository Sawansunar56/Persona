import GithubIcon from "../assets/github.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import TwitterIcon from "../assets/x-twitter.svg";
import MyIcon from "../assets/Icon Design- High Def.png"

function Navbar() {
    return (
        <nav>
            <div>
                <div class="wrapper personal-icon-wrapper">
                    <img src={MyIcon} alt="" class="my-icon" />
                </div>
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
            </div>
            <div>
                <div class="wrapper social-icon-wrapper">
                    <img class="social-icon" src={GithubIcon} alt="" />
                    <img class="social-icon" src={TwitterIcon} alt="" />
                    <img class="social-icon" src={LinkedInIcon} alt="" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
