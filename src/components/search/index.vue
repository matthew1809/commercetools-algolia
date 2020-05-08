<template>
  <ais-instant-search :search-client="searchClient" index-name="products">
    <ais-configure
      :hits-per-page.camel="8"
      :distinct="true"
      :analytics="true"
      :facetFilters="['categories:' + currentRouteParamsForFilter]"
    />
    <ais-search-box placeholder="Search Here" />
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
  },
  components: {
    HitsInjector,
  },
  data() {
    return {
      searchClient: algoliasearch(
        'ZW1HH57FVV',
        '947407f7668bd8373e8f5ce8ec66c7bc',
      ),
    };
  },
};
</script>

<style scoped>
.hits-item {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.hits-image {
  width: 100px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.hits-desc {
  margin-left: 25px;
}
</style>
