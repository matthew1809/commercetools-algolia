<template src="./template.html"></template>

<script>
import store from '../../store';

export default {
  name: 'Search',
  data() {
    return {
      searchInput: '',
    };
  },
  methods: {
    onChange(event) {
      store.dispatch('setSearchQuery', event.target.value);
      if (
        (this.$router.currentRoute.name === 'home'
          || this.$router.currentRoute.name === 'products')
        && event.target.value === ''
      ) {
        store.dispatch('setShouldShowSearchResults', true);
      } else if (
        this.$router.currentRoute.name === 'home'
        && event.target.value !== ''
      ) {
        store.dispatch('setShouldShowSearchResults', true);
        this.$router.push({ path: 'products', params: { locale: 'en' } });
      } else {
        store.dispatch('setShouldShowSearchResults', true);
      }
    },
  },
};
</script>
