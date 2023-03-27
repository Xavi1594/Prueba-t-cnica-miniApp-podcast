<script>
import { ref, onMounted } from 'vue';
import usePodcastService from '../services/PodcastService';

export default {
  setup($route) {
    const { getPodcastById } = usePodcastService();
    const podcast = ref(null);
    
    onMounted(async () => {
      const id = $route.params.id;
      podcast.value = await getPodcastById(id);
    });
    
    return {
      podcast,
    };
  },
};
</script>