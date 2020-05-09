import productMixin from '@/mixins/productMixin';
import store from '../../../store';

export default {
  mixins: [productMixin],
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
