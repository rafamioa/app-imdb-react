import React from 'react';
import axios from 'axios';
import api from '../../services/api';
import { Link } from 'react-router-dom'

function FilmeDetalhe(props){

	const [filme, setFilme] = React.useState(null);

	React.useEffect(async () => {
		const { id } = props.match.params;
		const url = `${api.baseUrl}?apikey=${api.apiKey}&i=${id}`;

		const filme = await axios.get(url)
		.then(response => response.data)
		.catch(error => console.log(error))

		setFilme(filme)

	}, []);

	return (
		<>
		{ filme != null &&
			<div className="container mt-5 border p-5 bg-white" >
				<div className="row" >
					<div className="col-4" >
						<img src={filme.Poster} alt={filme.Title} className="border border-secondary"/>
					</div>
					<div className="col-8" >
						<ul className="list-group list-group-flush">
						  <li className="list-group-item"><strong>Título: </strong> {filme.Title} </li>
						  <li className="list-group-item "><strong>País de origem: </strong>{filme.Country}</li>
						  <li className="list-group-item"><strong>Ano de lançamento: </strong> {filme.Year} </li>
						  <li className="list-group-item"><strong>Duração: </strong> {filme.Runtime} </li>
						  <li className="list-group-item "><strong>Gêneros: </strong>{filme.Genre}</li>
						  <li className="list-group-item"><strong>Nota do público: </strong> {filme.imdbRating} </li>
						  <li className="list-group-item"><strong>Total de votos: </strong> {filme.imdbVotes.replaceAll(',', '.')} </li>
						  <li className="list-group-item"><strong>Escritores: </strong>{filme.Writer}</li>
						  <li className="list-group-item"><strong>Produtores: </strong>{filme.Production}</li>
						  <li className="list-group-item "><strong>Atores: </strong>{filme.Actors}</li>
						</ul>
					</div>
				</div>
				<a href={`https://www.imdb.com/title/${filme.imdbID}`} 
					className="badge badge-warning border border-dark p-3 "
					target="_blank">
					Ir para o IMDB
				</a>
				<Link to="/" className="badge badge-secondary border border-dark p-3 ml-2">Voltar</Link>
			</div>
		}
		</>
	);

}

export default FilmeDetalhe;