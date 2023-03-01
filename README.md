# rs-clone
[Repo for final task RS-Clone](https://petsi-rs-clone.netlify.app/)

## 1. Состав команды
- https://github.com/MikhailStn
- https://github.com/LisaDobruk
- https://github.com/hannarim-23

## 2. Описание проекта
RS-Clone это клон существующего сайта https://petsy.pl/ оказания услуг по передержке, выгулу, и приходу на дом к питомцу. Тут реализован почти весь функционал оригинального сайта.

- Регистрация двух видов пользователей (Pet Owner и Petsitter)
с полями (город, имя, фамилия, телефон, e-mail, пароль, дублирование пароля)
- Боковое меню (отличается у Pet Owner и Petsitter) с отображением информации о зарегистированном пользователе ( фото, имя, e-mail), доступными страницами и кнопкой выхода
- Главная страница ( общая информация и базовый фильтр для поиска Petsitter-а)
- Страница поиска ( более потробный фильтр для выбора Petsitter-а, отображение подходящих вариантов и их краткое описание и карта где отмечены города в которых можно найти услугу)
- Страница Petsitter-а. Отображается вся нескрытая информация о Petsitter-е, которая может повлиять на выбор ( информация об оказываемых услугах, ценах, календарем с доступными датами, отзывами, рейтинге), если вы залогинены как Pet Owner, то предоставляется доступ к оформлению заказа (обязательно наличие в вашем профиле питомца)
- Страница заказа. Отображение информации о заказе и чат со строной предоставляющей услугу / бронирующей услугу (в зависимости как вы зарегистрированы)

* Воможности Petsitter 
    - Страница заказов (My orders) (отображаются заказы оформленные Pet Owner-ом)
    - Страница календарь (My calendar) (отображаются календарь с текущим месяцем, на котром можно отмечать дни когда Petsitter хочет взять выходной)
    - Страница Профиля (My profile) с полями
        - Базовая Информация ( добавление фото, информации о себе, квалификация)
        - Сервис ( выбор услуг которые Petsitter хочет оказать, выбор животных, и цена за услугу)
        - Мой дом ( выбор пунктов условий которые может предложить Petsitter, в которых будет находиться питомец)
        - Мой питомец ( наличие домашнего питомца у Petsitter-а)
    - Настройки аккаунта (Account settings), где можно изменить текущий пароль, Имя и Фамилию, выбрать пол, дату рождения, сменить номер телефона, город и адрес на актуальный,  установить / заменить фото профиля, удалить аккаунт
    - Отзывы ( отображение реальных отзывов, только тех пользователей, которые воспользовались услугами данного Petsitter-а)
    
* Возможности Pet Owner
    - Страница заказов (My orders)
    - Страница питомца и добавления питомца, с полями для заполения характеристик питомца ( кличка, вид, пол, порода, вес, возраст, особенности питомца, фото, доп. информация)
    -  Настройки аккаунта (Account settings), где можно изменить текущий пароль, Имя и Фамилию, выбрать пол, дату рождения, сменить номер телефона, город и адрес на актуальный,  установить / заменить фото профиля, удалить аккаунт

## 3. Backend
https://github.com/MikhailStn/rs-clone-api

## 4. Стек технологий
* Frontend
    - HTML, CSS, TypeScript
    - БЭМ
    - Webpack ( ESLinter  )
    - Роутинг
    - SPA приложение
    - Modules
    - Deploy на netlify.com
* Backend
    - TypeScript
    - ...
