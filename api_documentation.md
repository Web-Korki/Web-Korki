# **Substitutions**
All methods require authentication token

## POST - Create substitution
**url: /api/substitutions/create/**<br>
Creates new substitution instance. On success sends notification email to all active teachers except the requesting one.

IMPORTANT: As for now email will be sent to requesting user as well for easier developement.

#### Body
    level: (string) id of level. Get level id from here: /api/levels/
    datetime: (string) date in one of following formats YYYY-MM-DDThh:mm[:ss[.uuuuuu]][+HH:MM|-HH:MM|Z]. Standard ISO format example: 2021-10-28T12:12:00
    subject: (int) id of subject. Get subject id from here: /api/subjects/
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
    Nothing
#### Params
    only_pending: (string)(optional) true or false. Returns only substitutions where teacher not found yet.
    Example: /api/substitutions/?only_pending=true
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