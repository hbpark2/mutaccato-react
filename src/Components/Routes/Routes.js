import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../../Pages/Main";

const Routes = () => {
	return (
		<>
			<Route exact path="/" component={Main} />
		</>
	);
};

export default Routes;
