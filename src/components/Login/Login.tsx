import React, { useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../reducers/rootReducer';
import { FormData } from '../../type';
import { logInAppAction } from '../../actions/authorizationActions';
const Login: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	// состояние отслеживает корректно ли были введены данные (ставит состояние в true в любом случае отправки данных, но если введены корректные данные, мы не увидим сообщения о неверных данных, т. к. нас перекинет на profile)
	const [wrongData, setWrongData] = useState(false);
	// состояние для хранения данных из инпутов
	const [formData, setFormData] = useState<FormData>({ username: '', password: '' });
	// функция слушает инпуты для ввода логина и пароля
	const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
		setFormData({ ...formData, [event.target.id]: event.target.value });
	}, [formData]);
	// функция при нажатии на "отправить" берет состояние formData и отправляет action
	const handleSubmit = useCallback((event: React.MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault();
		// отправка данных
		dispatch(logInAppAction(formData))
		// очистка состояния
		setFormData({ username: '', password: '' })
		// ставим wrongData в true
		setWrongData(true)
	}, [formData, dispatch]);
	const authorizaton: boolean = useSelector((state: AppState) => state.authorization);
	// если пользователь авторизован перебрасываем на профиль
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
				{wrongData ? <div className="form__error">Имя пользователя или пароль введены неверно </div> : null}
			</form>
		</div>
	);
};
export default Login;
