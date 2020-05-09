<template>
  <ais-instant-search
    :search-client="searchClient"
    index-name="products"
    :search-function="searchFunction"
  >
    <ais-configure
      v-if="haveRouteParam === true"
      :hits-per-page.camel="8"
      :distinct="true"
      :analytics="true"
      :facetFilters="['categories:' + currentRouteParamsForFilter]"
    />
    <ais-configure
      v-else
      :hits-per-page.camel="8"
      :distinct="true"
      :analytics="true"
    />
    <ais-search-box>
      <div slot-scope="{ currentRefinement, isSearchStalled, refine }">
        <input
          type="search"
          v-bind:value="currentRefinement"
          v-on:input="currentRefinement = $event.currentTarget.value"
          @input="refine($event.currentTarget.value)"
        />
        <span :hidden="!isSearchStalled">Loading...</span>
      </div>
    </ais-search-box>
    <HitsInjector />
  </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import HitsInjector from './HitsInjector.vue';

export default {
  name: 'Search',
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
  },
  components: {
    HitsInjector,
  },
  data(component) {
    return {
      searchClient: algoliasearch(
        'ZW1HH57FVV',
        '947407f7668bd8373e8f5ce8ec66c7bc',
      ),
      searchFunction(helper) {
        if (
          (component.$router.currentRoute.name === 'home'
            || component.$router.currentRoute.name === 'products')
          && helper.state.query === ''
        ) {
          helper.search();
        } else if (
          component.$router.currentRoute.name === 'home'
          && helper.state.query !== ''
        ) {
          helper.search();
          component.$router.push({ path: 'products', params: { locale: 'en' } });
        } else {
          helper.search();
        }
      },
    };
  },
};
</script>
