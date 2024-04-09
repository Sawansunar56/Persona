function Footer() {
    const data = [
        "Things that I love to see",
        "More of the stuff in the world",
        "Lots of things",
        "Science is fun to listen too",
        "Programming is hard for beginners",
    ]

    return (
        <div class="footer-section">
            <div class="scroller" data-animated="true">
                <ul class="scroller-inner">
                    {data.map((quote, _) => (
                        <li>
                            {quote}
                        </li>
                    ))}
                    {data.map((quote, _) => (
                        <li>
                            {quote}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Footer;
