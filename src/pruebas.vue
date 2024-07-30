<template>
    <div>       
        <button @click.prevent="insert">
            insert
        </button>
        <button @click.prevent="upsert">
            upsert
        </button>
        <button @click.prevent="select">
            select
        </button>
        <button @click.prevent="update">
            update
        </button>
        <button @click.prevent="deletee">
            deletee
        </button>
    </div>
</template>

<script setup>

import { supabase } from '@/supabase'

// function to insert a new row
const insert = async () => {
    const { data, error } = await supabase
        .from('turno')
        .insert({ 
            nombreTurno: 'Julian', 
            apellidoTurno: 'Manera',  
            fechaTurno: '2024-08-15', //este es el formato para date
            horaTurno: '15:00', //este es el formato para time
            dniTurno: 43428302 // este es el formato para dni pq es number
        })
    ;
    

    try {
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// function to upsert a new row
const upsert = async () => {

    //upsert es un insert que si coincide el primary key (osea que ya existe)
    //le hace un update en vez de agregarlo dos veces.
    const { data, error } = await supabase
        .from('turno')
        .upsert({ 
            nombreTurno: 'Julian', 
            apellidoTurno: 'Manera',  
            fechaTurno: '2024-08-15', //este es el formato para date
            horaTurno: '15:00', //este es el formato para time
            dniTurno: 43428303 // si se repite este numero, no lo agrega y me da un error por conflico
        })
    ;

    try {
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// function to select a new row
const select = async () => {
    const { data, error } = await supabase
        .from('turno')
        .select() // esto nos trae todo de la tabla turno
    ;

    try {
        console.log(data) // aca vuelve mi select
    } catch (error) {
        console.log(error)
    }
}

// function to update a new row
const update = async () => {
    const { error } = await supabase
        .from('turno')
        .update({ nombreTurno: 'Matias' })
        .eq('id', 11)
    ;

    try {
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// function to deletee a new row
const deletee = async () => {
    const response = await supabase
        .from('turno')
        .delete('')
        .eq('id', 42)
        // .eq('id', 11) // borra el row q tenga el id 1 en este caso
    ;    

    try {
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

//function to update in real time
const subscribe = async () => {

    const turnoChannel = supabase
        .channel('custom-insert-channel')
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'turno',
          },
          (payload) => {
            console.log('Nuevo turno:', payload.new)
            // Agregar el nuevo turno a la lista
            turnos.value.push(payload.new)
          }
        )
        .subscribe()

    onUnmounted(() => {
        // Limpiar la suscripción cuando el componente se desmonta
        supabase.removeChannel(turnoChannel)
    })

}
</script>

<style lang="scss" scoped>

</style>