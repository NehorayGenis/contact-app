import { userService } from "../../services/userService"
const INITIAL_STATE = {
    contacts: [],
    favoriteContacts: [],
    filterBy: null,
}

// action = {type: SET_CONTACTS, contacts: [...]}
export function contactReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_CONTACTS":
            console.log(action.favoriteContacts)
            return {
                ...state,
                contacts: action.contacts,
                favoriteContacts: action.favoriteContacts,
            }

        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, action.contact],
            }

        case "REMOVE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact._id !== action.contactId),
            }

        case "UPDATE_CONTACT":
            if (action.contact.isFavorite) {
                return {
                    ...state,
                    favoriteContacts: [...state.favoriteContacts, action.contact],
                    contacts: state.contacts.map((contact) =>
                        contact._id === action.contact._id ? action.contact : contact
                    ),
                }
            } else {
                return {
                    ...state,
                    favoriteContacts: state.favoriteContacts.filter((contact) => contact._id !== action.contactId)
                }
            }

        case "SET_FILTER_BY":
            return {
                ...state,
                filterBy: { ...action.filterBy },
            }

        default:
            return state
    }
}
