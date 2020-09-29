const ContactSelectionction = state => state.contacts;
const AlertSelection = state => state.alert;
const FilterSelection = state => state.filter;
const ContactFilterSelection =
  ([ContactSelectionction],
  state =>
    state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase()),
    ));
export default {
  ContactSelectionction,
  AlertSelection,
  FilterSelection,
  ContactFilterSelection,
};
