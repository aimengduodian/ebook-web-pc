<template>
    <div :class="$style.content">
        <span>network Test</span>

        <ul ref="form" :model="form">
            <li>
                <span>账号</span>
                <input type="text" v-model="form.name" title="账号">
            </li>
            <li>
                <span>密码</span>
                <input type="text" v-model="form.pass" title="密码">
            </li>
            <li>
                <button @click="onSubmit">立即创建</button>
            </li>
            <li>
                <span>author:{{author}}</span>
            </li>
            <li>
                <span>bookName:{{bookName}}</span>
            </li>
            <li>
                <button @click="onLoad">testApi</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    // import getpk from '../encrypt/getPassKey' // 获取密码加密函数
    // console.log(getpk)
    //import api from "../common/api/index";
    import api from '../common/request/api/index'
    export default {
        components: {},
        name: "example",
        data() {
            return {
                idBook: 'ce643ec922584fa7b750645072e51d79',
                author: '',
                bookName: '',

                input: '',
                password: '',
                form: {
                    name: '',
                    pass: ''
                },
            }
        },
        methods: {
            ...mapActions([
                'getLogin',
                'AgetCrf',
                'AgetCollection'
            ]),
            onLoad() {
                // 请求page1数据
                let that = this;
                api.page1.testDetail(this.idBook, {}).then(res => {
                    that.author = res.data.page.info.author;
                    that.bookName = res.data.page.info.bookName;
                });
            },
            onSubmit() {
                if (this.form.name && this.form.pass) {
                    let pasKey = JSON.stringify(this.keyEncrypt(this.form.pass, this.collection))
                    let url = {
                        _csrf: this.crfcode,
                        username: this.form.name,
                        password: pasKey,
                        responseType: 'json'
                    }
                    this.form.pass = pasKey
                    this.getLogin(url)
                } else {
                    alert('请输入账号密码')
                }
            },
            keyEncrypt(data, coll) {
                console.log(coll)
                const rsaEncrypt = new JSEncrypt();
                rsaEncrypt.setPublicKey(coll); // 加入公钥
                const passPhrase = this.generateEncryptPassword(32);
                //iv 是密钥偏移量
                const iv = CryptoJS.lib.WordArray.random(128 / 8).toString(
                    CryptoJS.enc.Hex
                );
                const salt = CryptoJS.lib.WordArray.random(128 / 8).toString(
                    CryptoJS.enc.Hex
                );
                const key = CryptoJS.PBKDF2(passPhrase, CryptoJS.enc.Hex.parse(salt), {
                    keySize: 128 / 32,
                    iterations: 1000
                });

                const aesEncrypted = CryptoJS.AES.encrypt(data, key, {
                    iv: CryptoJS.enc.Hex.parse(iv)
                });
                const aesKey = passPhrase + ":::" + salt + ":::" + aesEncrypted.iv;
                const encryptedMessage = aesEncrypted.ciphertext.toString(
                    CryptoJS.enc.Base64
                );
                const encryptedKey = rsaEncrypt.encrypt(aesKey);

                const encrypted = encryptedKey + ":::" + encryptedMessage;
                return encrypted;
            },
            //生成加密密码，返回length长的随机字符串
            generateEncryptPassword(length) {
                const encryptPassChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz*&-%/!?*+=()";
                let randomString = "";
                for (let i = 0; i < length; i++) {
                    //Math.random()[0,1),encryptPassChars.length = 78
                    const rnum = Math.floor(Math.random() * encryptPassChars.length);
                    randomString += encryptPassChars.substring(rnum, rnum + 1);
                }
                return randomString;
            }
        },
        watch: {
            allNumber(newVal) {
                console.log(newVal)
            }
        },
        computed: {
            ...mapGetters([
                'allNumber',
                'crfcode',
                'collection'
            ])
        },
        created() {
        },
        mounted() {
            this.AgetCrf()
            this.AgetCollection()
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" module>
    @import '../assets/scss/variables';
    @import '../assets/scss/mixins';

    .content {
        width: 100%;
        height: 200px;
    }
</style>
