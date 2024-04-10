import footer_quotes from "../data/footer_data";

function Footer() {
    return (
        <div class="footer-section">
            <div class="scroller" data-animated="true">
                <ul class="scroller-inner">
                    {footer_quotes.map((quote, _) => (
                        <li>
                            {quote}
                        </li>
                    ))}
                    {footer_quotes.map((quote, _) => (
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
