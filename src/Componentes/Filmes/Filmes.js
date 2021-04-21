import React from 'react';
import styled from './Filmes.module.css';

function Filmes(){

	return(
		<section className="container mt-5">
			<div className="row" >

			  <div className="col-3 mt-2">
			    <div className="card bg-muted p-1 border-dark">
			      <img className="card-img-top" src="https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"  alt="..." />
			      <div className="card-body">
			        <h5 className="font-weight-bold text-center">Matrix</h5>
			        <div className="dropdown-divider"></div>
			        <p className="card-text"><b>Ano de lançamento:</b> 1999</p>
			        <div className="dropdown-divider"></div>
			        <p className="card-text d-flex flex-row">
				        <i class="material-icons text-warning border-secondary">star_rate</i>
				        8.7
			        </p>
			      </div>
			      <div className="card-footer">
			      	<a href="#" className="btn btn-warning btn-sm w-100 border-dark">Detalhes</a>
			      </div>
			    </div>
			  </div>



			</div>
		</section>

	);

}

export default Filmes;