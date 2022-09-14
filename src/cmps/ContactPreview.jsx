import { Component } from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onSelectContactId, onRemoveContact, onToggleFavorite }) {
    return (
        <div className='contact-preview'>
            <Link to={`/contact/${contact._id}`} className='info'>
                <img src={`https://robohash.org/${contact._id}`} className="member-avatar" alt="" />
                <h2>{contact.name}</h2>
            </Link>
            <section className='actions' >
                <a onClick={() => onToggleFavorite(contact._id)}><i className={"fa-regular fa-star"}></i></a>
                <a onClick={() => onRemoveContact(contact._id)}>Delete</a>
                <Link to={`/contact/edit/${contact._id}`} >Edit</Link>
            </section>

        </div>
    )
}
