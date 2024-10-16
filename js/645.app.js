"use strict";

(self["webpackChunkfls_start"] = self["webpackChunkfls_start"] || []).push([ [ 645 ], {
    645: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        const dropArea = document.querySelector(".js-gen-front");
        const canvas = document.getElementById("canvas");
        const fileElem = document.getElementById("js-file");
        const uploadImageButtons = document.querySelectorAll(".js-upload-image");
        const genBack = document.querySelector(".js-gen-back");
        const body = document.querySelector("body");
        const textarea = document.querySelector(".step-text");
        let img;
        let text = "";
        let isDragging = false;
        let dragOffset = {
            x: 0,
            y: 0
        };
        let textPosition = {
            x: 150,
            y: 150
        };
        if (canvas) {
            const ctx = canvas.getContext("2d");
            function drawText() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                if (img) ctx.drawImage(img, 0, 0, img.width, img.height);
                ctx.fillStyle = "black";
                ctx.font = "20px Arial";
                ctx.fillText(text, textPosition.x, textPosition.y);
            }
            textarea.addEventListener("input", (event => {
                text = event.target.value;
                drawText();
            }));
            window.updateImage = function(newImg) {
                img = newImg;
                drawText();
            };
            fileElem.addEventListener("change", (event => {
                handleFiles(event.target.files);
            }));
            uploadImageButtons.forEach((button => {
                button.addEventListener("click", (() => {
                    fileElem.click();
                }));
            }));
            if (dropArea) {
                [ "dragenter", "dragover", "dragleave", "drop" ].forEach((eventName => {
                    dropArea.addEventListener(eventName, preventDefaults, false);
                }));
                [ "dragenter", "dragover" ].forEach((eventName => {
                    dropArea.addEventListener(eventName, (() => dropArea.classList.add("highlight")), false);
                }));
                [ "dragleave", "drop" ].forEach((eventName => {
                    dropArea.addEventListener(eventName, (() => dropArea.classList.remove("highlight")), false);
                }));
                dropArea.addEventListener("drop", (e => {
                    const dt = e.dataTransfer;
                    const files = dt.files;
                    if (!dt.types.includes("text/html")) handleFiles(files);
                }));
            }
            function preventDefaults(e) {
                e.preventDefault();
                e.stopPropagation();
            }
            function handleFiles(files) {
                [ ...files ].forEach(previewFile);
            }
            function previewFile(file) {
                const reader = new FileReader;
                reader.readAsDataURL(file);
                reader.onloadend = function() {
                    const img = new Image;
                    img.src = reader.result;
                    img.onload = function() {
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0, img.width, img.height);
                        window.updateImage(img);
                        dropArea.style.display = "none";
                        genBack.style.display = "block";
                        body.classList.add("generator-active");
                    };
                };
            }
            const createBlankButtons = document.querySelectorAll(".js-create-blank");
            createBlankButtons.forEach((button => {
                button.addEventListener("click", (() => {
                    canvas.width = 652;
                    canvas.height = 667;
                    ctx.fillStyle = "white";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    dropArea.style.display = "none";
                    genBack.style.display = "block";
                    body.classList.add("generator-active");
                }));
            }));
            canvas.addEventListener("mousedown", (event => {
                const {offsetX, offsetY} = event;
                if (offsetX >= textPosition.x && offsetX <= textPosition.x + ctx.measureText(text).width && offsetY >= textPosition.y - 20 && offsetY <= textPosition.y) {
                    isDragging = true;
                    dragOffset.x = offsetX - textPosition.x;
                    dragOffset.y = offsetY - textPosition.y;
                }
            }));
            canvas.addEventListener("mousemove", (event => {
                if (isDragging) {
                    textPosition.x = event.offsetX - dragOffset.x;
                    textPosition.y = event.offsetY - dragOffset.y;
                    drawText();
                }
            }));
            canvas.addEventListener("mouseup", (() => {
                isDragging = false;
            }));
            canvas.addEventListener("mouseout", (() => {
                isDragging = false;
            }));
        }
    }
} ]);