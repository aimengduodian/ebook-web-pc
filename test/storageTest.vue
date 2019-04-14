<template lang="html">
    <div :class="$style.content">
        <div>
            <h1>H5本地缓存测试</h1>
        </div>
        <div>
            <h2>输入</h2>
            <input type="text" v-model="todo" title="hhh"/>
            <button @click="doAdd($event)">提交</button>
        </div>
        <div>
            <h2>进行中</h2>
            <ul>
                <li v-for="(item,key) in list" :key="key">
                    <div  v-if="!item.checked">
                        <label>
                            <input type="checkbox" v-model="item.checked" @change="saveList()"/>
                            {{item.title}}
                        </label>
                        <button @click="removeData(key)">删除</button>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <h2>已完成</h2>
            <ul>
                <li v-for="(item,key) in list" :key="key">
                    <div v-if="item.checked">
                        <label>
                            <input type="checkbox" v-model="item.checked" @change="saveList()"/>
                            {{item.title}}
                        </label>
                        <button @click="removeData(key)">删除</button>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <button @click="clearAll('list')">删除list</button>
        </div>
    </div>
</template>

<script>
    import storage from '../src/common/browserCaching/storage.js'

    export default {
        data() {
            return {
                todo: '',
                list: []
            }
        },
        methods: {
            doAdd(e) {
                if (this.todo.trim() === ""){
                    return;
                }
                this.list.push({
                    title: this.todo,
                    checked: false
                });
                // 添加数据要缓存
                storage.set('list', this.list);
                e.preventDefault();
            },
            removeData(key) {
                this.list.splice(key, 1);
                // 删除数据要缓存
                storage.set('list', this.list)
            },
            saveList() {
                // change事件要缓存
                storage.set('list', this.list)
            },
            clearAll(aList){
                // 删除数据要缓存
                storage.remove(aList, this.list)
            }
        },
        mounted() {
            /* 生命周期函数 vue页面刷新就会触发的方法 */
            // mounted生命周期在载入之后就加载数据
            // 获取缓存数据
            let list = storage.get('list');
            if (list) {
                /* 注意判断 */
                // 建议先判断缓存的数据存不存在
                this.list = list
                // 或者：this.list=storage.get('list')
            }
        }
    }
</script>

<style lang="scss" module>
    .content {
        width: 100%;
        text-align: center;
        div{
            margin: 20px 0;
            h1{
                font-size: 22px;
            }
            h2{
                color: cornflowerblue;
            }
        }
    }
</style>
