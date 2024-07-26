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
        .select()
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
            dniTurno: 43428302 // este es el formato para dni pq es number
        })
        .select()
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
        .select() // esto nos trae todo
    ;

    try {
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// function to update a new row
const update = async () => {
    const { error } = await supabase
        .from('turno')
        .update({ nombreTurno: 'Matias' })
        .eq('id', 4)
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
        .delete()
        .eq('id', 2) // borra el row q tenga el id 1 en este caso
    ;    

    try {
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

</script>

<style lang="scss" scoped>

</style>