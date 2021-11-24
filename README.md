##README

[![codecov](https://codecov.io/gh/Web-Korki/Web-Korki/branch/master/graph/badge.svg?token=OEHMSAP5T3)](https://codecov.io/gh/Web-Korki/Web-Korki)

## GIT FLOW:
1. Create Issue from GitHub perspective
2. `git pull`
3. `npm i`
4. `git checkout -b '#10_mockUps'`
5. `git add .` 
6. `git commit -m '[commit message]'` alernatively `git commit -a -m '[commit message]'`
7. `git push`
8. pull request
9. assign reviewer
10. after cr merge either on github or locally (and push the changes afterwards).

### After each pull from repo:

`npm install`

and
 
`pip install -r requirements.txt`

## Pagination
As of 24 November, all API responses are paginated. **Pagination** is a process of dividing API responses, (which at some point of time may contain dozens or hundreds of items) into smaller portions that are easier to browse through.<br>

Please consult the following chunk of code:
```
{
    "count": 13,
    "next": "http://127.0.0.1:8000/api/subjects/?limit=10&offset=10",
    "previous": null,
    "results": [
        {
            "id": 1,
            "name": "j.polski"
        },
        {
            "id": 2,
            "name": "j.angielski"
        },
        {
            "id": 3,
            "name": "j.polski"
        },
        {
            "id": 4,
            "name": "matematyka"
        },
        {
            "id": 5,
            "name": "fizyka"
        },
        {
            "id": 6,
            "name": "geografia"
        },
        {
            "id": 7,
            "name": "historia"
        },
        {
            "id": 8,
            "name": "biologia"
        },
        {
            "id": 9,
            "name": "chemia"
        },
        {
            "id": 10,
            "name": "informatyka"
        }
    ]
}
``` 

This is an exemplary API response returning 13 items. With PAGE_SIZE=10, the response was split into two pages. The first one contains only 10 results of 13. The remaining 3 one may be accessed under the link provided under `next`.
