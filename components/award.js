import { Spinner, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function Award(props) {
	const [isLoaded, set] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			set(true);
		}, 3000);
	}, []);

	function renderCouponCode() {
		return (
			<div>
				<h4 className="">Вашият код за отстъпка е:</h4>
				<h1 className="couponCode">CODE</h1>
				<style>{`
                    .couponCode {
                        font-size: 55px;
                        color: #74b9ff;
                    }
                `}</style>
			</div>
		);
	}

	function renderCouponLoading() {
		return (
			<div>
				<h4 className="mt-5 pt-5">Генериране на отстъпка, моля изчакайте.</h4>
				<Spinner animation="border" size="lg" />
			</div>
		);
	}

	function renderAward() {
		props.fireConfetti();

		return (
			<div>{isLoaded ? renderCouponCode() : renderCouponLoading()}</div>
		)
	}
	return (
		<div className="my-5">
			{renderAward()}
			<style>{`
                    h4 {
                        color: white;;
                    }
            `}</style>
		</div>
	);
}
export default Award;
