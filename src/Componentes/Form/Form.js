import React from 'react';

function Form(){

	return(
		<div className="container" >
			<form >
				<div className="row d-flex justify-content-center">
					<input type="text" placeholder="Pesquisar por um título..." className="form-control w-25 border-dark"/>
					<button className="btn btn-warning border-dark font-weight-bold text-black ml-1" >Buscar</button>
				</div>
			</form>
		</div>
	);

}

export default Form;