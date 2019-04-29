<template lang="html">
    <section class="cropper-js-dialog" v-if="panelShow">
        <div class="cropper-js-panel">
            <ul class="cropper-js-content">
                <li>
                    <ul class="cropper-js-preview">
                        <li>
                            <div class="cropper-js-small"></div>
                        </li>
                        <li>
                            <button  @click="rotate(true)" style="margin:15%; display: block">反旋转</button>
                            <button  @click="rotate(false)" style="margin:15%; display: block">正旋转</button>
                            <button  @click="reset" style="margin:15%; display: block">重置</button>
                            <button @click="down" style="margin:15%; display: block">提交</button>
                        </li>
                    </ul>
                </li>
                <li>
                    <div>
                        <img id="image" src="../../../public/static/assets/logo.png">
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import Cropper from 'cropperjs'

    export default {
        data() {
            return {
                panelShow: true,
            }
        },
        mounted() {
            //初始化这个裁剪框
            const image = document.getElementById('image');
            this.cropper = new Cropper(image, {
                aspectRatio: 16 / 9, //裁剪框宽高比
                viewMode: 0,
                dragMode: 'move',
                preview: ".cropper-js-small",
                minCropBoxHeight: 50,//裁剪层
                minCropBoxWidth: 50,
            });
        },
        methods: {
            reset() {
                this.cropper.reset();
            },
            rotate(flag) {
                if(flag)
                    this.cropper.rotate(-10);
                else
                    this.cropper.rotate(10);
            },
            down() {
                let cas = this.cropper.getCroppedCanvas({
                    maxWidth: 4096,
                    maxHeight: 4096,
                    fillColor: '#fffbff',
                    imageSmoothingEnabled: false,
                    imageSmoothingQuality: 'high',
                });
                let base64url = cas.toDataURL('image/jpeg');

                this.imgurl = base64url.toString();
                alert("保存成功");
                this.panelShow = false;
            }
        }
    }
</script>

<style lang="css">
    @import "../../../node_modules/cropperjs/dist/cropper.css";
    .cropper-js-dialog {
        z-index: 1000;
        position: fixed;
        width: 100%;
        height: 100vh;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.1);
    }

    .cropper-js-dialog::after {
        content: '';
        height: 100vh;
        display: inline-block;
        vertical-align: middle;
    }

    .cropper-js-dialog .cropper-js-panel {
        display: inline-block;
        vertical-align: middle;
        position: relative;
        width: 90%;
        height: 70vh;
        background: #fff;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, .14);
        box-shadow: 0 0 50px rgba(0, 0, 0, .5);
    }

    .cropper-js-content {
        overflow: hidden;
        width: 100%;
        height: 100%;
        background-color: #69f78f;
    }

    .cropper-js-content li {
        display: block;
        width: 100%;
        box-sizing: border-box;
    }

    .cropper-js-content li:first-child {
        content: "";
        overflow: hidden;
    }

    .cropper-js-preview li {
        display: inline-block;
        background-color: #6c6c6c;
        height: 30vh;
        border: 1px solid #ffffff;
    }

    .cropper-js-preview li:first-child {
        width: 60%;
        float: left;
    }

    .cropper-js-preview li:last-child {
        width: 40%;
        float: right;
    }

    .cropper-js-small{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>
