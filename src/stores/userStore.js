import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'


export const useUserStore = defineStore('userStore', () => {

  //variable that contains if the user is loged in (with its info) or its not
  const user = ref(null)

  //function to manipulate the state of the user variable
  function setUser(dataUser) {
    //if there is datauser, then assing it to user varibale, if not then set user variable to null
    user.value = dataUser ? dataUser : null
  }

  return { user, setUser}
})
