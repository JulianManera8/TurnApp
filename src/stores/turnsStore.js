import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/supabase.js'


export const useTurnsStore = defineStore('turnsStore', () => {

  //array that contains the turns 
  const turns = ref([])

  //function tu update any changes to the array
  function updateArray(array) {
    turns.value = array ? array : []
    console.table(turns.value)
  }

  const checkUser = async () => {

    try {
      const { error, data } = await supabase.auth.getUser()
  
      if (error) throw error
      
      const userId = data ? data.user.id : null
      loadTurns(userId)
  
    } catch (error) {
      console.log(error.message)
    }

  }

  async function loadTurns(userId) {

    try {
      const { data, error} = await supabase
        .from('turno')
        .select('*')
        .eq('id', userId)

      if(error) throw error

      console.log(data)
      turns.value = data
    } catch (error) {
      console.log(error)
    }
  }


  return { turns, updateArray, checkUser}
})
