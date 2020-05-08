<script>
import { connectHits } from 'instantsearch.js/es/connectors';
import { createWidgetMixin } from 'vue-instantsearch';
import SearchResults from './searchResults.vue';
import store from '../../store';

export default {
  components: {
    SearchResults,
  },
  mixins: [createWidgetMixin({ connector: connectHits })],
  watch: {
    'state.hits': function (current) {
      store.dispatch('setSearchResults', current);
    },
  },
  render() {
    return null;
  },
};
</script>
