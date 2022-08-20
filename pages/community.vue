<template>
    Hello
</template>

<script setup>
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';

const rest = new REST({ version: '10' }).setToken('Qo8WI-sXRQmuXMafy3GIPs3dNdHgFxTm');
console.log(rest)

// 
// MTAxMDU4MjEzNTE2MzMzODkxMw.GmBNLm.6k_z4nTEP4wQ1NLnxT1atL8xxY4-Hx6HIcd6GI
// try {
//     await rest.post(Routes.channelMessages(CHANNEL_ID), {
//         body: {
//             content: 'A message via REST!',
//         },
//     });
// } catch (error) {
//     console.error(error);
// }
</script>