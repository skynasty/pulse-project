const express = require("express");
const db = require("../models");

const User = db.users;


//Функция проверки наличия имени пользователя или адреса электронной почты в базе данных.
//это делается для того, чтобы избежать появления двух пользователей с одинаковым именем пользователя и адресом электронной почты.
const saveUser = async (req, res, next) => {
    try {
        const username = await User.findOne({
            where: {
                name: req.body.name,
            },
        });
        //если имя пользователя существует в базе данных, ответим статусом 409
        if(username) {
            return res.json(409).send('Данноe имя пользователя уже занято');
        }
        //проверяем, существует ли уже адрес электронной почты
        const emailcheck = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        //если адрес электронной почты существует в базе данных, ответьте со статусом 409
        if(emailcheck) {
            return res.json(409).send("Аутентификация не удалась");
        }
        next();
    } catch(error) {
        console.log(error);
    }
};

//эскспорт модуля
module.exports = {
    saveUser,
};
