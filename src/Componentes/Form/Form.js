import React from 'react';
import api from '../../services/api';
import axios from 'axios';
import Filmes from '../Filmes/Filmes';

function Form(){

	const [titulo, setTitulo] = React.useState('');
	const [filmes, setFilmes] = React.useState([]);
	const [resultado, setResultado] = React.useState(true);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		if(localStorage.getItem('filmes'))
			setFilmes(JSON.parse(localStorage.getItem('filmes')))
	}, []);

	React.useEffect(() => {
		localStorage.setItem('filmes', JSON.stringify(filmes))
	}, [filmes]);

	async function handleSubmit(e){
		e.preventDefault();
		setLoading(true);
		const url = `${api.baseUrl}?apikey=${api.apiKey}&t=${titulo.replace(' ', '+')}`;

		const filme = await axios.get(url)
		.then(response => response.data)
		.catch(error => console.log('Error: ', error));

		setLoading(false);

		if(filme.Response === 'False'){
			setResultado(false)
		} else{
			setFilmes([...filmes, filme]) 
			setResultado(true)
		}	

		setTitulo('')
	}

	function deleteStorage(imdbID){
		localStorage.removeItem('filmes')
		const filmesAtualizados = filmes.filter(f => f.imdbID !== imdbID)
		setFilmes(filmesAtualizados)
	}

	return(
		<>
		<div className="container" >
			{ resultado === false && <p className="alert alert-danger">Filme não encontrado</p>}
			<form onSubmit={handleSubmit}>
				<div className="row d-flex justify-content-center">
					{loading ? 
						<p className="text-warning " >Pesquisando...</p> : 
						<>
						<input 
							type="text" 
							placeholder="Pesquisar por um título..." 
							className="form-control w-25 border-dark"
							onChange={ (e) => setTitulo(e.target.value) }
							onClick={ (e) => setResultado(true) }
							value={titulo}
						/>
						<button className="btn btn-warning border-dark font-weight-bold text-black ml-1">
							Pesquisar
						</button>
						</>
					}

				</div>
			</form>
		</div>
		{filmes.length > 0 && <Filmes filmes={filmes} deleteStorage={deleteStorage}/>}
		</>
	);

}

export default Form;