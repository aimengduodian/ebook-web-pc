# 使用cropper.js，前端对图片进行处理

### 软件源码地址
    https://github.com/fengyuanchen/cropperjs
##
###1.安装  
    npm install cropperjs
###2.引入 
    <link  href="/path/to/cropper.css" rel="stylesheet">
    <script src="/path/to/cropper.js"></script>
    或者使用CDN
    The cdnjs provides CDN support for Cropper.js's CSS and JavaScript. 
    You can find the links here.https://cdnjs.com/libraries/cropperjs
###3.应用
    语法：
        new Cropper(element[, options])
    element
        类型: HTMLImageElement or HTMLCanvasElement
        The target image or canvas element for cropping.
    options (optional)
        类型: Object
        The options for cropping. Check out the available options.

###4.demo
    <!-- Wrap the image or canvas element with a block element (container) -->
    <div>
      <img id="image" src="picture.jpg">
    </div>
###

    /* Limit image width to avoid overflow the container */
    img {
      max-width: 100%; /* This rule is very important, please do not ignore this! */
    }
### 
    // import 'cropperjs/dist/cropper.css';
    import Cropper from 'cropperjs';
    
    const image = document.getElementById('image');
    const cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      },
    });
