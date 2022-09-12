## Описание
Проект создан для отображений данных, которые поступают с сервера. Посмотреть эти данные можно только авторизованный пользователь.
Проект создает на React-native. 

Декстопная версия: https://github.com/IrinRer/Kanalservis

1. Логин: react
2. Пароль. Password: qwerty

## Технологии
1. React-native
2. Redux (thunk, redux-toolkit)
3. Styled components
4. Axious

## Что было сделано
1. Приватные роуты. 

Есть страница на которой отображаются данные, но эти данные может посмотреть только авторизованный пользователь, если он не авторизован, то его перебрасывает на страницу с авторизацией.

Навигация сделана через stack (StackNavigator). 

``<Stack.Screen
          name="Home"
          component={() => (
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          )}
        />``

В данном примере я оборачиваю компонент Home (является страницей) в компонент PrivateRoute, который внутри себя проверяет авторизацию и если ее нет, то на страницу Home вход не происходит.

2. Запрсы к серверу JSONPlaceholder совершаются в middleware - thunk. Store создавала с помощью Redux-toolkit.

## Как запустить
1. Клонируете репозиторий

```
git clone https://github.com/IrinRer/Kanalservis_native.git
```
2. Устанавливаете зависимости

```
npm i
```
3. Запускаете проект на Android

```
npm run android
```

Я использовала Android Studio и Expo Go. 
