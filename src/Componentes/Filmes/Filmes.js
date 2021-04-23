import React from 'react';
import FilmeCard from '../FilmeCard/FilmeCard';

function Filmes({filmes, deleteStorage}){

	return(
		
		<section className="container mt-5">
			<div className="row" >
				 {filmes.map(filme => (
				 		<FilmeCard filme={filme} key={filme.imdbID} deleteStorage={deleteStorage}/> 	
				 	)
				 )}
			 </div>
		</section>

	);

}

export default Filmes;