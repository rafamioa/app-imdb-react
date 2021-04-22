import React from 'react';

function FilmeCard({filme}){

	return (
			<div className="col-3 mt-2 ">
			    <div className="card bg-muted p-1 border-dark animate__pulse" >
			      <img className="card-img-top" src={filme.Poster}  alt={filme.Title} />
			      <div className="card-body">
			        <h5 className="font-weight-bold text-center">
			        	{filme.Title}
			        </h5>
			        <div className="dropdown-divider"></div>
			        <p className="card-text"><b>Ano:</b> {filme.Year}</p>
			        <div className="dropdown-divider"></div>
			        <p className="card-text d-flex flex-row">
				        <i className="material-icons text-warning border-secondary">
				        	star_rate
				        </i>
				        {filme.imdbRating}
			        </p>
			      </div>
			      <div className="card-footer">
			      	<a href="#" className="btn btn-warning btn-sm w-100 border-dark">
			      		Detalhes
			      	</a>
			     	</div>
				</div>
			</div>
	);
}

export default FilmeCard;