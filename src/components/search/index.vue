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
      store.dispatch('setShouldShowSearchResults', true);

      if (
        this.$router.currentRoute.name === 'home'
        && event.target.value !== ''
      ) {
        this.$router.push({ path: 'products', params: { locale: 'en' } });
      }
    },
  },
};
</script>
