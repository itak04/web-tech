<template>
    <div>
        <h1>从零构建Vue项目</h1>
        <button class="my-button" @click="handleClick">{{ buttonText }}</button>
        <input :value="count"/>
        <input v-model="count"/>
        <ul>
            <li v-for="post in data" :key="post.id">
            {{ post.title }}
            </li>
        </ul>
    </div>
</template>
    
<script>
import axios from 'axios';

export default {
    created() {
    axios({
        method: "get",
        url: "http://jsonplaceholder.typicode.com/posts",
    }).then((response) => {
        this.data = response.data;
        console.log(this.data);  // 在这里打印数据
    });
    },

    data() {
        return {
        buttonText: "功德",
        count: 0,  // 初始化计数器
        data: []   // 用来存储从 API 加载的数据
        };
    },
    methods: {
        handleClick() {
            this.count += 1;
            this.count = Number(this.count) + 1;
        },
    },
    
}
</script>
    
<style>
    .my-button {
    background-color: rgb(248, 248, 6);
    }
</style>
