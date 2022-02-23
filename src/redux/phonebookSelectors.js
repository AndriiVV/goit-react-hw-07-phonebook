// import { createSelector } from "@reduxjs/toolkit";

export const getPhonebookItems = (state) => state.phonebook.items;
export const getPhonebookFilter = (state) => state.phonebook.filter;

export const getPhonebookIsLoading = (state) => state.phonebook.isLoading;

// export const getFilteredPhonebookItems = createSelector(
//   [getPhonebookItems, getPhonebookFilter],
//   (filter, items) => { 
//     return items.filter((item) => {
//       return item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
//     });
//   }
// );
