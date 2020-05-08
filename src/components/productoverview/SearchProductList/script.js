import store from '../../../store';

export default {
  computed: {
    searchResults: {
      get() {
        const masterProductSearchResults = [];

        store.state.searchResults.map((result) => {
          if (result.productType === 'main') {
            masterProductSearchResults.push(result);
          }
          return result;
        });

        return masterProductSearchResults;
      },
    },
  },
};
