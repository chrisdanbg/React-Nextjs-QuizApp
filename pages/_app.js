import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Component {...pageProps} />
			<style jsx global>{`
				body {
					background-color: #f2f2f7;
				}
				h1 {
					font-size: 55px;
					color: white;
				}
				.result {
                    width: 500px;
					color: white;
					background-color: #fda7df;
					border: 1px solid #eee;
					border-radius: 15px;
					box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
				}
				Confetti {
					position: absolute;
					bottom: 0;
				}
			`}</style>
		</div>
	);
}

export default MyApp;
