##Backend How-To:
1. auth/users (POST): rejestracja nowego usera - wymaga podania DZIALAJACEGO maila
2. activate/{uid}/{token}: aktywacja konta
 - przyjmuje dwa parametry: uid (3 litery) oraz token (wiecej liter) - znajdziesz je w linku aktywacyjnym otrzymanym w mailu
 - aktywacja dokonuje sie poprzez klikniecie linka, ale na upartego postmanem tez mozna
3. auth/jwt/create - logowanie usera - parametry email i password - daje 2 tokeny - access i refresh
4. !!! napisać testy, min. na auth/users/id
5. przemyśleć users/me
6. 


auth/users/activation - to nie jest endpoint, chuj z nim