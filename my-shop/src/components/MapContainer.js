import React from "react";

const MapContainer = () => {
	return (
		<div className="box">
			<div className="map">
				<iframe
					title="location"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9534028933376!2d106.69489631488536!3d10.814877992295452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528eb0a2e938b%3A0x97e70c6180138049!2zMjEzLzI4IE7GoSBUcmFuZyBMb25nLCBQaMaw4budbmcgMTEsIELDrG5oIFRo4bqhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1604679972451!5m2!1svi!2sus"
					frameBorder={0}
					style={{ border: 0, height: '30rem', width: '60%'}}
					allowFullScreen
					aria-hidden="false"
					tabIndex={0}
				/>
			</div>
		</div>
	);
};

export default MapContainer;
