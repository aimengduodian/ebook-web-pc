<template>
    <div>
        <h1>登陆测试</h1>
        <div class="example">
            <form ref="form" :model="form" label-width="80px">
                <ul>
                    <li>
                        <label>账号</label>
                        <input v-model="form.name"/>
                    </li>

                    <li>
                        <label>密码</label>
                        <input v-model="form.pass"/>
                    </li>
                    <li>
                        <button type="primary" @click="onSubmit">立即创建</button>
                        <button>取消</button>
                    </li>
                </ul>

            </form>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    //import getpk from '../encrypt/getPassKey' // 获取密码加密函数
    // console.log(getpk)

    export default {
        components: {},
        name: "example",
        data() {
            return {
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
            console.log('first step')
        },
        mounted() {
            console.log('second step')
        }
    };
</script>

<style lang="scss">
    @import '../../styles/scss/variables';
    @import '../../styles/scss/mixins';

    .example {
        width: 100%;
        height: 200px;
    }
</style>
