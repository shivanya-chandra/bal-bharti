import React from "react";

export const Buy = () => {
	return (
		<div className="form__main" id="donate">
			<div className="form__main-heading">
				<h1>Buy Now!</h1>
			</div>
			<div className="form__main-container">
				<form>
					<div className="form-name">
						<label htmlFor="fname">First Name</label>
						<input
							type="text"
							id="fname"
							name="firstname"
							placeholder="Your name.."></input>
						<br />
					</div>
					<div className="phone">
						<label htmlFor="lname">Phone Number</label>
						<input
							type="text"
							id="lname"
							name="lastname"
							placeholder="Phone Number"></input>
					</div>
					<div className="amount">
						<label htmlFor="">Card Number</label>
						<input type="text" name="" id="" placeholder="Enter the Amount" />
					</div>
				</form>
				<div className="textarea">
					<label htmlFor="">Enter your email</label>
					<input type="email" placeholder="Enter your email" />
				</div>
				<div className="btn-div">
					<span className="btn-2">Buy</span>
				</div>
			</div>
		</div>
	);
};
