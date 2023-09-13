import "./footer.scss";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="socials">
					<img src="/fa-brands_facebook-square.svg" />
					<img src="/fa-brands_instagram.svg" />
					<img src="/fa-brands_twitter.svg" />
					<img src="/fa-brands_youtube.svg" />
				</div>
				<div className="links">
					<span>Condition of Use</span>
					<span>Privacy & Policy</span>
					<span>Press Room </span>
				</div>
				<div className="copyright">
					<p>© 2021 MovieBox by Adriana Eka Prayudha built by Chibuzo Ekwue</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
