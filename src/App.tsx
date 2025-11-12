import React from "react";
import SelectComp from "./components/SelectComp";

const App: React.FC = () => {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="p-4" style={{ width: "500px" }}>
				<h1 className="text-2xl mb-4">Select example</h1>
				<SelectComp />
			</div>
		</div>
	);
};

export default App;