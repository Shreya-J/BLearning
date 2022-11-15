import React from 'react'
import axios from "axios";
import Button from '@mui/material/Button';

export default function Enroll({item}) {
    const initPayment = (data) => {
		const options = {
			key: "rzp_test_EVMis0D9Qiegv4",
			amount: data.amount,
			currency: data.currency,
			name: item.name,
			description: "Test Transaction",
			category: item.category,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:8080/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:8080/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: item.fee });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

  return (
    <><Button variant='contained' size="small" color="inherit" onClick={handlePayment}>Enroll</Button>
    <div><script src="https://checkout.razorpay.com/v1/checkout.js"></script></div></>
  )
}
