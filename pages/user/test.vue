<template>

<div class="test">
<div class="container-fluid p-0">
	<div class="img-upload">
 		<input type="file" class="img-upload-input" id="img-upload-input">
		<label class="img-upload-label text-center p-4 position-absolute" id="img-upload-label" for="img-upload-input">
			<i class="fas fa-cloud-upload-alt fa-2x"></i>
		</label>
	</div>
</div>
</div>
</template>

<style>

.img-upload {
	position: relative;
	display: inline-block;
	width: 100%;
	margin-bottom: 0;
	height: calc(3.5rem + 28px);
}

.img-upload-input {
	position: relative;
	z-index: 2;
	width: 100%;
	height: calc(3rem + 28px);
	margin: 0;
	opacity: 0;
}

.img-upload-label {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	background: #f0f0f0;
	text-align: center;
	padding: 1.5rem;
}

.a-upload {
    padding: 4px 10px;
    height: 20px;
    line-height: 20px;
    position: relative;
    cursor: pointer;
    color: #888;
    background: #fafafa;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    display: inline-block;
    *display: inline;
    *zoom: 1
}

.a-upload  input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer
}

.a-upload:hover {
    color: #444;
    background: #eee;
    border-color: #ccc;
    text-decoration: none
}
</style>