import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';
import { FormData } from '../../type';
import { logInAppAction } from '../../actions/authorizationActions';
const Login: React.FC = () => {
	const dispatch = useDispatch();
	const [wrongData, setWrongData] = useState(false);
	const [formData, setFormData] = useState<FormData>({ username: '', password: '' });
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setFormData({ ...formData, [event.target.id]: event.target.value });
	};
	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault();
		dispatch(logInAppAction(formData));
		setFormData({ username: '', password: '' });
		setWrongData(true);
	};

	const authorizaton: boolean = useSelector((state: AppState) => state.authorization);
	if (authorizaton) return <Redirect to="/profile" />;
	return (
		<div className="container">
			<form className="form" action="post">
                <h4 className="form__title">Вход в систему</h4>
				<ul className="form__list">
					<li className="form__item">
						<input
							type="text"
							id="username"
							onChange={handleChange}
							value={formData.username}
							className="form__input"
							placeholder="Username"
						/>
					</li>
					<li className="form__item">
						<input
							type="text"
							id="password"
							onChange={handleChange}
							value={formData.password}
							className="form__input"
							placeholder="Password"
						/>
					</li>
					<li className="form__item">
						<button onClick={handleSubmit} className="form__btn">
							Войти
						</button>
					</li>
				</ul>
				{wrongData ? <div className='form__error'>Имя пользователя или пароль введены неверно </div> : null}
			</form>
		</div>
	);
};
export default Login;
