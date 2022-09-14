import { Component } from 'react'
import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts, onRemoveContact, history, favoriteContacts, onToggleFavorite}) {
    
    return (
        <section>

        <div className='contact-list simple-cards-grid'>
            <h1>Your Favorite Contacts</h1>
            {favoriteContacts.map(contact => <ContactPreview key={contact._id} contact={contact} onRemoveContact={onRemoveContact} onToggleFavorite={onToggleFavorite}  />)}
        </div>
        <div className='contact-list simple-cards-grid'>
            <h1>Contacts</h1>
            {contacts.map(contact => <ContactPreview key={contact._id} contact={contact} onRemoveContact={onRemoveContact} onToggleFavorite={onToggleFavorite}  />)}
        </div>
        </section>
    )
}
