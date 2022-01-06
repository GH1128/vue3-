import { ref } from 'vue'

export default function useHomeHeader(){
  let searchForm = ref({})

  return {
    searchForm
  }
}