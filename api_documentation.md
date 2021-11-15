# **Substitutions**
All methods require authentication token

## POST - Create substitution
**url: /api/substitutions/create/**<br>
Creates new substitution instance. On success sends notification email to all active teachers except the requesting one.

IMPORTANT: As for now email will be sent to requesting user as well for easier developement.

#### Body
    level: (string) shortcut of student level. See LEVEL_CHOICES in values map part of this docs.
    datetime: (string) date in one of following formats YYYY-MM-DDThh:mm[:ss[.uuuuuu]][+HH:MM|-HH:MM|Z]. Standard ISO format example: 2021-10-28T12:12:00
    subject: (string) shortcut of subject name. SEE SUBJECT_CHOICES in values map part of this docs.
    last_topics: (string)(optional)
    planned_topics: (string)(optional)
    methodology_and_platform: (string)(optional)

#### Returns
    body fields + 
    id: (int or None) None or id of created substitution
    reason: Verbal description of this response
    old_teacher: currently logged-in user is set in old_teacher field
    new_teacher_found: false
    new_teacher: null

## PATCH - Assign Teacher
**url: /api/substitutions/assign_teacher/{substitution_id}**<br>
Assigns currently logged-in user as new_teacher.
Sets new_teacher_found field in substitution to True.
Sends email to the creator of this substitution with facebook name.
If there is already teacher assigned returns failure.

#### Body
    Nothing

#### Returns
    ON SUCCES:
        Substitution object (See POST)
    ON FAILURE:
        reason: (string) Verbal description of this response
        success: (bool)
        new_teacher_found: (bool)

## GET - List all substitutions
**url: /api/substitutions/**

#### Body
    only_pending: (bool)(optional) returns only substitutions where teacher not found yet
#### Returns
    List of all (or only pending) substitutions

## GET - get substitution
**url: /api/substitutions/{substitution_id}**
#### Body
    Nothing
#### Returns
    Substitution object for given substitution_id

# PUT - Modify substitution
**url: /api/substitutions/{substitution_id}**
#### Body
    All substitution object fields are optional (See POST fields)
#### Returns
    Substitution object for given substitution_id
#### Permissions
    Only substitution creator or admin can edit

# DELETE
**url: /api/substitutions/{substitution_id}**<br>
#### Body
    Nothing
#### Returns
    Nothing
#### Permissions
    Only substitution creator or admin can delete
# Values map
```
SUBJECT_CHOICES = (
    ("pol", "j. polski"),
    ("eng", "j. angielski"),
    ("ger", "j. niemiecki"),
    ("math", "matematyka"),
    ("phi", "fizyka"),
    ("bio", "biologia"),
)

LEVEL_CHOICES = (
    ("1sp", "1. klasa s.p."),
    ("2sp", "2. klasa s.p."),
    ("3sp", "3. klasa s.p."),
    ("4sp", "4. klasa s.p."),
    ("5sp", "5. klasa s.p."),
    ("6sp", "6. klasa s.p."),
    ("7sp", "7. klasa s.p."),
    ("8sp", "8. klasa s.p."),
    ("1lic", "1. klasa lic/tech"),
    ("2lic", "2. klasa lic/tech"),
    ("3lic", "3. klasa lic/tech"),
    ("4lic", "4. klasa lic/tech"),
    ("5tech", "1. klasa tech"),
)
```