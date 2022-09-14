import { contactService } from "../../services/contactService"


export function loadContacts() {
    return async (dispatch, getState) => {
        try {
            const { filterBy } = getState().contactModule
            let contacts = await contactService.getContacts(filterBy)
            const favoriteContacts=contacts.filter((contact)=> contact.isFavorite)
            dispatch({ type: 'SET_CONTACTS', contacts,favoriteContacts })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function removeContact(contactId) {
    return async (dispatch, getState) => {
        try {
            const contact = await contactService.deleteContact(contactId)
            dispatch({ type: 'REMOVE_CONTACT', contactId })
            return contact
        } catch (err) {
            console.log('err:', err)
        }
    }
}
export function toggleFavorite(contactId) {
    return async (dispatch, getState) => {
        try {
            const contact = await contactService.toggleFavorite(contactId)
            dispatch({ type: 'UPDATE_CONTACT', contact })
            return contact
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}