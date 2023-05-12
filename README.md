# mern_setting_up_mern_reading


## list and detail


- update [person.controller.js](./myNewProject/server/controllers/person.controller.js)
```ecmascript 6
module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}


```

- create [PersonList](./myNewProject/client/src/components/PersonList.js) component:

```ecmascript 6
import React from 'react'
import axios from 'axios';
    
const PersonList = (props) => {
    return (
        <div>
            {props.people.map( (person, i) =>
                <p key={i}>{person.lastName}, {person.firstName}</p>
            )}
        </div>
    )
}
    
export default PersonList;


```