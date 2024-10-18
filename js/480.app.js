(self["webpackChunkfls_start"] = self["webpackChunkfls_start"] || []).push([ [ 480 ], {
    574: () => {},
    748: () => {},
    246: () => {},
    645: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var cropperjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(643);
        var fabric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(676);
        const dropArea = document.querySelector(".js-gen-front");
        const canvasElement = document.getElementById("canvas");
        const fileElem = document.getElementById("js-file");
        const uploadImageButtons = document.querySelectorAll(".js-upload-image");
        const genBack = document.querySelector(".js-gen-back");
        const body = document.querySelector("body");
        const linesList = document.querySelector(".lines-list");
        const cropperContainer = document.getElementById("cropper-container");
        const generateButton = document.querySelector(".js-generate");
        let cropper;
        let fabricCanvas = new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Canvas(canvasElement);
        let imgObject;
        const textBoxes = [];
        const CANVAS_WIDTH = 652;
        const CANVAS_HEIGHT = 667;
        fabricCanvas.setWidth(CANVAS_WIDTH);
        fabricCanvas.setHeight(CANVAS_HEIGHT);
        function addText(text, index) {
            if (text) if (textBoxes[index]) {
                textBoxes[index].set({
                    text
                });
                fabricCanvas.renderAll();
            } else {
                const textBox = new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Textbox(text, {
                    left: 150,
                    top: 150 + index * 40,
                    fontSize: 30,
                    fill: "black",
                    selectable: true
                });
                textBoxes[index] = textBox;
                fabricCanvas.add(textBox);
                textBox.bringToFront();
            }
        }
        function addTextLine(initialText = "") {
            const textLineDiv = document.createElement("div");
            textLineDiv.classList.add("step-3-text-line");
            textLineDiv.innerHTML = `\n    <div class="line-top">\n      <div class="line-top-left">\n        <div class="line-name">Text Line #${linesList.children.length + 1}</div>\n        <div class="line-remove">\n          <button class="line-remove-button js-remove-line">\n            <svg style="width: 0.875rem; height: 1rem; fill: #6C757D;">\n              <use xlink:href="img/icons/icons.svg#remove"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n      <div class="line-top-right">\n        <div class="settings-config">\n          <span class="settings-text">Settings <span class="js-settings-on-off">Off</span></span>\n          <button class="settings-switch">\n            <svg style="width: 1.5rem; height: 0.9375rem; fill: #F5487F;">\n              <use xlink:href="img/icons/icons.svg#switch"></use>\n            </svg>\n          </button>\n        </div>\n        <div class="line-colors">\n          <button class="color-button color-1" style="background-color: #fff;"></button>\n          <button class="color-button color-2" style="background-color: #000;"></button>\n        </div>\n      </div>\n    </div>\n    <textarea class="step-text" placeholder="Enter top text" name="step_text">${initialText}</textarea>\n  `;
            linesList.appendChild(textLineDiv);
            const index = linesList.children.length - 1;
            const textarea = textLineDiv.querySelector(".step-text");
            textarea.addEventListener("input", (event => {
                addText(event.target.value, index);
            }));
            const removeButton = textLineDiv.querySelector(".js-remove-line");
            removeButton.addEventListener("click", (() => {
                linesList.removeChild(textLineDiv);
                fabricCanvas.remove(textBoxes[index]);
                textBoxes.splice(index, 1);
                for (let i = index; i < textBoxes.length; i++) {
                    textBoxes[i].set({
                        top: 150 + i * 40
                    });
                    linesList.children[i].querySelector(".line-name").textContent = `Text Line #${i + 1}`;
                }
                fabricCanvas.renderAll();
            }));
            addText(initialText, index);
        }
        fileElem.addEventListener("change", (event => {
            handleFiles(event.target.files);
        }));
        uploadImageButtons.forEach((button => {
            button.addEventListener("click", (() => {
                fileElem.click();
            }));
        }));
        function handleFiles(files) {
            [ ...files ].forEach(previewFile);
        }
        function previewFile(file) {
            const reader = new FileReader;
            reader.readAsDataURL(file);
            reader.onloadend = function() {
                const imgElement = document.createElement("img");
                imgElement.src = reader.result;
                imgElement.style.maxWidth = "100%";
                cropperContainer.innerHTML = "";
                cropperContainer.appendChild(imgElement);
                const cropButton = document.createElement("button");
                cropButton.textContent = "Обрезать";
                cropButton.classList.add("crop-button");
                cropperContainer.appendChild(cropButton);
                dropArea.style.display = "none";
                genBack.style.display = "block";
                body.classList.add("generator-active");
                if (cropper) cropper.destroy();
                cropperContainer.classList.add("is-active");
                cropper = new cropperjs__WEBPACK_IMPORTED_MODULE_0__(imgElement, {
                    viewMode: 1,
                    aspectRatio: 1,
                    autoCropArea: 1
                });
                cropButton.addEventListener("click", (() => {
                    const croppedCanvas = cropper.getCroppedCanvas({
                        width: CANVAS_WIDTH,
                        height: CANVAS_HEIGHT
                    });
                    fabricCanvas.clear();
                    const rect = new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Rect({
                        left: 0,
                        top: 0,
                        fill: "white",
                        width: CANVAS_WIDTH,
                        height: CANVAS_HEIGHT,
                        selectable: false
                    });
                    fabricCanvas.add(rect);
                    fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Image.fromURL(croppedCanvas.toDataURL(), (img => {
                        img.set({
                            left: (CANVAS_WIDTH - img.width) / 2,
                            top: (CANVAS_HEIGHT - img.height) / 2,
                            selectable: false
                        });
                        fabricCanvas.add(img);
                        imgObject = img;
                    }));
                    cropperContainer.innerHTML = "";
                    cropperContainer.classList.remove("is-active");
                }));
            };
        }
        const createBlankButtons = document.querySelectorAll(".js-create-blank");
        createBlankButtons.forEach((button => {
            button.addEventListener("click", (() => {
                fabricCanvas.clear();
                const rect = new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Rect({
                    left: 0,
                    top: 0,
                    fill: "white",
                    width: CANVAS_WIDTH,
                    height: CANVAS_HEIGHT,
                    selectable: false
                });
                fabricCanvas.add(rect);
                dropArea.style.display = "none";
                genBack.style.display = "block";
                body.classList.add("generator-active");
            }));
        }));
        const addTextLineButton = document.querySelector(".js-add-line");
        addTextLineButton.addEventListener("click", (() => {
            addTextLine();
        }));
        function initCanvas() {
            fabricCanvas.clear();
            const rect = new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Rect({
                left: 0,
                top: 0,
                fill: "white",
                width: CANVAS_WIDTH,
                height: CANVAS_HEIGHT,
                selectable: false
            });
            fabricCanvas.add(rect);
        }
        initCanvas();
        function downloadCanvasAsImage() {
            const dataURL = fabricCanvas.toDataURL({
                format: "png",
                quality: 1
            });
            const link = document.createElement("a");
            link.href = dataURL;
            link.download = "canvas-image.png";
            link.click();
        }
        generateButton.addEventListener("click", downloadCanvasAsImage);
    }
} ]);