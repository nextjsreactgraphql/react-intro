import {memo} from "react";

const Hallo = memo(function Hallo() {
	console.log("Render!")
	return <h1>Hallo</h1>
})

export default Hallo;