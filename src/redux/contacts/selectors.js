import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.status;

export const selectVisibleTasks = createSelector(
    [selectContacts, selectFilter ],
    (contacts, statusFilter) => {
        const filter = statusFilter;
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));  
    }
); 