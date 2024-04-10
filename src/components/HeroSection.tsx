import HeroImage from "../assets/Persona Main Photo.png";

function HeroSection() {
    return (
        <div class="hero-section content-wrapper">
            <div>
                <h1>
                    <span class="underline-wrapper">Hi, I am</span>
                </h1>
                <h1>
                    <span class="underline-wrapper">
                        <span class="focus-wrapper">S</span>awan{" "}
                    </span>
                    <span class="underline-wrapper">
                        <span class="focus-wrapper">S</span>unar
                    </span>
                </h1>
                <h4>I am a Programmer</h4>
            </div>

            <div>
                <img src={HeroImage} alt="" />
            </div>
        </div>
    );
}

export default HeroSection;
