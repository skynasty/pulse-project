//импорт модулей
const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require("jsonwebtoken");


// Назначение пользователей переменной User

const User = db.users;

//регистрируем пользователя
//хеширование пароля пользователя перед его сохранением в базе данных с помощью bcrypt

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const data = {
            name,
            email,
            password: await bcrypt.hash(password, 10),
        };
        //сохраняем пользователя
        const user = await User.create(data);

        //если данные пользователя фиксируются
        //генерируем токен с идентификатором пользователя и секретным ключом в файле env
        //устанавливаем cookie с сгенерированным токеном
        if (user) {
            let token = jwt.sign({ id: user.id }, process.env.secretKey, {
                expiresIn: 1 * 24 * 60 * 60 * 1000,
            });

            res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
            console.log("user", JSON.stringify(user, null, 2));
            console.log(token);
            //отправляем данные пользователя
            return res.status(201).send(user);
        } else {
            return res.status(409).send("Данные некорректны");
        }
    } catch (error) {
        console.log(error);
    }
};

//аутентификация входа в систему
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        //находим пользователя по электронной почте
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        //если адрес электронной почты пользователя найден, сравниваем пароль с bcrypt

        if (user) {
            const isSame = await bcrypt.compare(password, user.password);
            //если пароль тот же
            //генерируем токен с идентификатором пользователя и секретным ключом в файле env
            if (isSame) {
                let token = jwt.sign({ id: user.id }, process.env.secretKey, {
                    expiresIn: 1 * 24 * 60 * 60 * 1000,
                });
                //если пароль совпадает с тем, что есть в базе данных
                //продолжаем и создаем файл cookie для пользователя   
                res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
                console.log("user", JSON.stringify(user, null, 2));
                console.log(token);
                //отправка данных пользователя
                return res.status(201).send(user);
            } else {
                return res.status(401).send("Ошибка аутентификации");
            }
        } else {
            return res.status(401).send("Ошибка аутетификации")
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    signup,
    login,
};