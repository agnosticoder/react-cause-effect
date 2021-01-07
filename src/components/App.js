import React, {useReducer, useEffect } from 'react';
import faker from 'faker';
import { getpeople } from '../data/people';
import Person from './Person';

const initialState = {
    people: [
        {
            name: faker.name.findName(),
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            country: faker.address.country(),
            telephone: faker.phone.phoneNumber(),
            birthday: faker.date.past().toDateString()
        },
    ],
    isLoading: false,
    personSelected: '',
};

const actions = {
    SET_PEOPLE: 'SET_PEOPLE',
    SET_LOADING: 'SET_LOADING',
    SET_NOT_LOADING: 'SET_NOT_LOADING',
    PERSON_SELECTED: 'PERSON_SELECTED',
};

const reducer = (state, action) => {

    switch (action.type) {
        case actions.SET_PEOPLE:
            return {
                people: [ ...state.people, ...action.payload]
            }
        
        case actions.SET_LOADING:
            return {...state, isLoading: false}
    

        case actions.SET_NOT_LOADING:
            return {...state, isLoading: true}

        case actions.PERSON_SELECTED:
            return {...state, personSelected: action.payload}

        default:
            return state;
    }
}




const App = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState);



    useEffect(() => {
        const fetch = async  () => {
        try {
           dispatch({type: actions.SET_LOADING})
           const people = await getpeople(false); 
           dispatch({type: actions.SET_PEOPLE, payload: people});
           dispatch({type: actions.PERSON_SELECTED, payload: state.people[0].name})
           dispatch({type: actions.SET_NOT_LOADING})
        } catch (e) {
           console.error(e);
        }
        }
        fetch();
    }, []);




    return (
        <div>
            <h1>This is going to be our "Cause Effect App"</h1>
            {!state.isLoading && <h3>Loading...</h3>}
            {state.isLoading && <div className="flex-container">
                <div className="persons-name">
                    {state.people.map((person, index) => {
                        return (<li 
                        onClick={() => dispatch({type: actions.PERSON_SELECTED, payload: person.name})} 
                        className={`list-item ${person.name === state.personSelected && 'person-selected'}`}
                        key={index}>{person.name}</li>)
                    })}
                </div>
                <div className="people-details">
                    <div className="person-details">
                        {state.people.filter(person => {
                            return person.name === state.personSelected
                        }).map((person, index) => {
                            return (
                                <Person {...person} key={index}/>
                            );
                        })}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default App
