import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './Form/Form';
import FilmeDetalhe from './FilmeDetalhe/FilmeDetalhe';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function Routes(){

	return(
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact component={ Form } />
				<Route path="/:id" component={ FilmeDetalhe } />
			</Switch>
			<Footer />
		</BrowserRouter>

	);

}

export default Routes;