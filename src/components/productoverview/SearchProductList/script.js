import productMixin from '@/mixins/productMixin';
import algoliasearch from 'algoliasearch/lite';
import store from '../../../store';

export default {
  mixins: [productMixin],
  data() {
    return {
      searchClient: algoliasearch(
        'ZW1HH57FVV',
        '947407f7668bd8373e8f5ce8ec66c7bc',
      ),
    };
  },
  computed: {
    currentRouteParamsForFilter() {
      if (this.$route.params.categorySlug) {
        return this.$route.params.categorySlug
          .replace(/-/g, ' > ')
          .replace(/\s/g, '');
      }
      return this.$route.params.categorySlug;
    },
    haveRouteParam() {
      if (this.$route.params.categorySlug) {
        return true;
      }
      return false;
    },
    searchQuery() {
      return store.state.searchQuery;
    },
  },
};
