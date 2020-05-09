<template>
  <div>
    <div v-if="searchResults.length > 0">
      <ul class="hits-list">
        <li
          v-for="item in searchResults"
          :key="item.objectID"
          class="hits-item"
        >
          <div
            class="hits-image"
            style="background-image: url(item.image);"
            @click="$click('clickedSku=item.sku')"
          ></div>

          <div class="hits-desc">
            <p>
              <span>{{ item.name }} </span>
            </p>
            <p>{{ clickedSku }}</p>
            <p>{{ item.rating }}</p>
            <p>{{ item.price }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <div class="empty-results-container">
        <span class="empty-results">
          No results
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store';

export default {
  name: 'SearchResults',
  computed: {
    searchResults: {
      get() {
        return store.state.searchResults;
      },
    },
  },
  methods: {
    productRoute(productSlug, sku) {
      return {
        name: 'product',
        params: { productSlug, sku },
      };
    },
  },
};
</script>

<style scoped>
.hits-list {
  list-style: none;
}

.hits-item {
  display: inline;
}

.ais-Hits {
  width: 100%;
}
</style>
