import React, { Component } from 'react';

import TwitterLogo from '../twitter.svg';
import './Login.css';

export default class Login extends Component {
	
	// Acessar um estado
	state = {
		username: '',
	};

	// Assim o this é sempre referenciado a classe
	handleInputChange = (e) => {
		this.setState({
			username: e.target.value
		});
	}

	// Submit formulário
	handleSubmit = (e) => {
		e.preventDefault(); // Evita o redirecionamento para outra página

		const { username } = this.state;

		if(!username.length) return;

		// @GoTwitter Prefixo
		localStorage.setItem('@GoTwitter:username', username);

		this.props.history.push('/timeline');
	}

	render() {
		return (
			<div className="login-wrapper">
				<img src={TwitterLogo} alt="Go Twitter" />
			
				<form onSubmit={this.handleSubmit}>
					<input
						placeholder="Identificação de Usuário"
						value={this.state.username}
						onChange={this.handleInputChange}
					/>
					<button type="submit">Entrar</button>
				</form>
			</div>
		);
	}
}
