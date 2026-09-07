import { addCollection } from '@iconify/svelte';
import collections from 'virtual:iconify-collections';

for (const collection of collections) {
  addCollection(collection);
}
