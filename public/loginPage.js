'use strict'

const userForm = new UserForm();

userForm.loginFormCallback = function(data) {
	ApiConnector.login(data, function(response) {
		if (response.success) {
			location.reload();
		} else {
			alert(`Ошибка авторизации: ${response.error}`);
		}
	});
}
userForm.registerFormCallback = function(form) {
	ApiConnector.register(form, function(response) {
		if (response.success) {
			location.reload();
		} else {
      		alert(`Ошибка регистрации: ${response.error}`);			
		}
	});
}






  




/*Присвойте свойству loginFormCallback созданного объекта значение
 функции, которая в качестве аргумента принимает объект data (объект,
который содержит логин и пароль, введённые в форму, и который будет
передаваться внутри loginFormAction). 
Функция должна выполнять запрос на сервер для попытки авторизации пользователя (авторизацию пользователя выполняйте с помощью ApiConnector.login).
Передайте в запрос авторизации функцию, которая будет выполняться при попытке авторизации.
Посмотрите в консоли, какой объект возвращает сервер.
Проверьте успешность запроса.
В случае успеха запроса обновите страницу (с помощью location.reload();).
В случае провала запроса выведите ошибку в окно для ошибок.*/


  

    
