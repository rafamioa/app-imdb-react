import React from 'react';
import FilmeCard from '../FilmeCard/FilmeCard';

function Filmes({filmes}){

	return(
		
		<section className="container mt-5">
			<div className="row" >
				 {filmes.map(filme => (<FilmeCard filme={filme} key={filme.imdbID}/>))}
			 </div>
		</section>

	);

}

export default Filmes;