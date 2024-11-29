const logoutButton = new LogoutButton();
logoutButton.action = () => {
	ApiConnector.logout((data) => {
		if (data.success) {
			location.reload();
		}
	});
};

ApiConnector.current((data) => {
	if (data.success) {
		ProfileWidget.showProfile(data.data);
	}
});

const ratesBoard = new RatesBoard();
ratesBoard.updateRates = () => {
	ApiConnector.getStocks((data) => {
		if (data.success) {
			ratesBoard.clearTable();
			ratesBoard.fillTable(data.data);
		}
	});
};
ratesBoard.updateRates();
setInterval(ratesBoard.updateRates, 60000);

const moneyManager = new MoneyManager();
moneyManager.addMoneyCallback = (data) => {
	ApiConnector.addMoney(data, (response) => {
		if (response.success) {
			ProfileWidget.showProfile(response.data);
			moneyManager.setMessage(true, "Пополнение баланса успешно");
		} else {
			moneyManager.setMessage(false, `Ошибка при пополнении баланса: ${response.error}`);
		}
	});
};

moneyManager.conversionMoneyCallback = (data) => {
	ApiConnector.convertMoney(data, (response) => {
		if (response.success) {
			ProfileWidget.showProfile(response.data);
			moneyManager.setMessage(true, "Конвертация валюты успешна");
		} else {
			moneyManager.setMessage(false, `Ошибка при конвертации валюты: ${response.error}`);
		}
	});
};

moneyManager.sendMoneyCallback = (data) => {
	ApiConnector.transferMoney(data, (response) => {
		if (response.success) {
			moneyManager.setMessage(true, "Перевод валюты успешен");
		} else {
			moneyManager.setMessage(false, `Ошибка при переводе валюты: ${response.error}`);
		}
	});
};
 



 
 

 


 

 
 




 
 







 
    


 

 
