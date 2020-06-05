/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/demo.js":
/*!**********************!*\
  !*** ./demo/demo.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//const audioUrl = 'test.mp3'\r\n//const cdgUrl = 'test.cdg'\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const audio = document.getElementById('audio')\r\n  const canvas = document.getElementById('canvas')\r\n\r\n  const CDGPlayer = __webpack_require__(/*! ../index.js */ \"./index.js\")\r\n  const cdg = new CDGPlayer(canvas, {\r\n    onBackgroundChange: color => {\r\n      console.log('onBackgroundChange', color)\r\n    }\r\n  })\r\n\r\n  // link to audio events\r\n  audio.addEventListener('play', () => { cdg.play() })\r\n  audio.addEventListener('pause', () => { cdg.stop() })\r\n  audio.addEventListener('timeupdate', () => {\r\n    cdg.sync(audio.currentTime * 1000) // convert to ms\r\n  })\r\n\r\n  // checkbox for forceTransparent\r\n  //const checkbox = document.getElementById('force_transparent')\r\n\r\n  //checkbox.addEventListener('change', (e) => {\r\n  //  cdg.forceTransparent(e.target.checked)\r\n  //})\r\n\r\n  // download and load cdg file\r\n  fetch(window.cdgUrl)\r\n    .then(response => response.arrayBuffer())\r\n    .then(buffer => {\r\n      // arrayBuffer to Uint8Array\r\n      cdg.load(new Uint8Array(buffer))\r\n\r\n      // start loading audio\r\n      audio.src = window.audioUrl\r\n    })\r\n})\r\n\n\n//# sourceURL=webpack:///./demo/demo.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const CDG_NOOP = 0 // eslint-disable-line no-unused-vars\r\nconst CDG_MEMORY_PRESET = 1\r\nconst CDG_BORDER_PRESET = 2\r\nconst CDG_TILE_BLOCK = 6\r\nconst CDG_SCROLL_PRESET = 20\r\nconst CDG_SCROLL_COPY = 24\r\nconst CDG_SET_KEY_COLOR = 28\r\nconst CDG_LOAD_CLUT_LOW = 30\r\nconst CDG_LOAD_CLUT_HI = 31\r\nconst CDG_TILE_BLOCK_XOR = 38\r\n\r\nconst CDG_SCROLL_NONE = 0 // eslint-disable-line no-unused-vars\r\nconst CDG_SCROLL_LEFT = 1\r\nconst CDG_SCROLL_RIGHT = 2\r\nconst CDG_SCROLL_UP = 1\r\nconst CDG_SCROLL_DOWN = 2\r\n\r\nconst CDG_DATA = 4\r\nconst PACKET_SIZE = 24\r\n\r\n/************************************************\r\n*\r\n* CDGContext represents a specific state of\r\n* the screen, clut and other CDG variables.\r\n*\r\n************************************************/\r\nclass CDGContext {\r\n  constructor (userCanvas, { forceTransparent = false } = {}) {\r\n    // visible canvas\r\n    this.userCanvas = userCanvas\r\n    this.userCanvasCtx = userCanvas.getContext('2d')\r\n\r\n    // offscreen canvas\r\n    this.canvas = document.createElement('canvas')\r\n    this.canvas.width = this.WIDTH\r\n    this.canvas.height = this.HEIGHT\r\n    this.ctx = this.canvas.getContext('2d')\r\n    this.imageData = this.ctx.createImageData(this.WIDTH, this.HEIGHT)\r\n    this.forceTransparent = !!forceTransparent\r\n\r\n    this.init()\r\n  }\r\n\r\n  init () {\r\n    this.hOffset = 0\r\n    this.vOffset = 0\r\n    this.keyColor = null // clut index\r\n    this.bgColor = null // clut index\r\n    this.clut = new Array(16).fill([0, 0, 0]) // color lookup table\r\n    this.pixels = new Array(this.WIDTH * this.HEIGHT).fill(0)\r\n    this.buffer = new Array(this.WIDTH * this.HEIGHT).fill(0)\r\n  }\r\n\r\n  setCLUTEntry (index, r, g, b) {\r\n    this.clut[index] = [r, g, b].map(c => c * 17)\r\n  }\r\n\r\n  get backgroundRGBA () {\r\n    if (this.bgColor === null) {\r\n      return [0, 0, 0, this.forceTransparent ? 0 : 1]\r\n    }\r\n\r\n    return [\r\n      ...this.clut[this.bgColor], // rgb\r\n      this.bgColor === this.keyColor || this.forceTransparent ? 0 : 1, // a\r\n    ]\r\n  }\r\n\r\n  renderFrame () {\r\n    const [left, top, right, bottom] = [0, 0, this.WIDTH, this.HEIGHT]\r\n    const scale = Math.min(\r\n      this.userCanvas.clientWidth / this.WIDTH,\r\n      this.userCanvas.clientHeight / this.HEIGHT,\r\n    )\r\n\r\n    for (let x = left; x < right; x++) {\r\n      for (let y = top; y < bottom; y++) {\r\n        // The offset is where we draw the pixel in the raster data\r\n        const offset = 4 * (x + (y * this.WIDTH))\r\n        // Respect the horizontal and vertical offsets for grabbing the pixel color\r\n        const px = ((x - this.hOffset) + this.WIDTH) % this.WIDTH\r\n        const py = ((y - this.vOffset) + this.HEIGHT) % this.HEIGHT\r\n        const pixelIndex = px + (py * this.WIDTH)\r\n        const colorIndex = this.pixels[pixelIndex]\r\n        const [r, g, b] = this.clut[colorIndex]\r\n        const isTransparent = colorIndex === this.keyColor ||\r\n          (this.forceTransparent && (colorIndex === this.bgColor || this.bgColor == null))\r\n\r\n        // Set the rgba values in the image data\r\n        this.imageData.data[offset] = r\r\n        this.imageData.data[offset + 1] = g\r\n        this.imageData.data[offset + 2] = b\r\n        this.imageData.data[offset + 3] = isTransparent ? 0x00 : 0xff\r\n      }\r\n    }\r\n\r\n    this.ctx.putImageData(this.imageData, 0, 0)\r\n\r\n    // clear destination canvas first if there's transparency\r\n    if (this.keyColor >= 0) {\r\n      this.userCanvasCtx.clearRect(0, 0, this.WIDTH * scale, this.HEIGHT * scale)\r\n    }\r\n\r\n    // In at least Chrome and Firefox, this gets re-enabled each time the\r\n    // canvas width or height gets set, even if set to the same value, so\r\n    // rather than trying to detect a resize, just disable on each frame\r\n    this.userCanvasCtx.imageSmoothingEnabled = false\r\n\r\n    // copy to destination canvas and scale\r\n    this.userCanvasCtx.drawImage(this.canvas, 0, 0, this.WIDTH * scale, this.HEIGHT * scale)\r\n  }\r\n}\r\n\r\nCDGContext.prototype.WIDTH = 300\r\nCDGContext.prototype.HEIGHT = 216\r\nCDGContext.prototype.DISPLAY_WIDTH = 288\r\nCDGContext.prototype.DISPLAY_HEIGHT = 192\r\nCDGContext.prototype.DISPLAY_BOUNDS = [6, 12, 294, 204]\r\nCDGContext.prototype.TILE_WIDTH = 6\r\nCDGContext.prototype.TILE_HEIGHT = 12\r\n\r\nclass CDGInstruction {\r\n  constructor (bytes = [], offset = 0) {\r\n    this.bytes = bytes.slice(offset, offset + PACKET_SIZE)\r\n  }\r\n\r\n  execute (context) { }\r\n}\r\n\r\n/************************************************\r\n*\r\n* NOOP\r\n*\r\n************************************************/\r\nclass CDGNoopInstruction extends CDGInstruction { }\r\n\r\n/************************************************\r\n*\r\n* MEMORY_PRESET\r\n*\r\n************************************************/\r\nclass CDGMemoryPresetInstruction extends CDGInstruction {\r\n  constructor (bytes, offset) {\r\n    super(bytes, offset)\r\n\r\n    const doff = offset + CDG_DATA\r\n    this.color = bytes[doff] & 0x0F\r\n    this.repeat = bytes[doff + 1] & 0x0F\r\n  }\r\n\r\n  execute (context) {\r\n    context.pixels.fill(this.color)\r\n    context.bgColor = this.color\r\n  }\r\n}\r\n\r\n/************************************************\r\n*\r\n* BORDER_PRESET\r\n*\r\n************************************************/\r\nclass CDGBorderPresetInstruction extends CDGInstruction {\r\n  constructor (bytes, offset) {\r\n    super(bytes, offset)\r\n\r\n    this.color = bytes[offset + CDG_DATA] & 0x0F\r\n  }\r\n\r\n  execute ({ DISPLAY_BOUNDS, WIDTH, pixels, HEIGHT }) {\r\n    const b = DISPLAY_BOUNDS\r\n    for (let x = 0; x < WIDTH; x++) {\r\n      for (let y = 0; y < b[1]; y++) {\r\n        pixels[x + y * WIDTH] = this.color\r\n      }\r\n      for (let y = b[3] + 1; y < HEIGHT; y++) {\r\n        pixels[x + y * WIDTH] = this.color\r\n      }\r\n    }\r\n    for (let y = b[1]; y <= b[3]; y++) {\r\n      for (let x = 0; x < b[0]; x++) {\r\n        pixels[x + y * WIDTH] = this.color\r\n      }\r\n      for (let x = b[2] + 1; x < WIDTH; x++) {\r\n        pixels[x + y * WIDTH] = this.color\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/************************************************\r\n*\r\n* TILE_BLOCK\r\n*\r\n************************************************/\r\nclass CDGTileBlockInstruction extends CDGInstruction {\r\n  constructor (bytes, offset) {\r\n    super(bytes, offset)\r\n\r\n    const doff = offset + CDG_DATA\r\n    // some players check bytes[doff+1] & 0x20 and ignores if it is set (?)\r\n    this.colors = [bytes[doff] & 0x0F, bytes[doff + 1] & 0x0F]\r\n    this.row = bytes[doff + 2] & 0x1F\r\n    this.column = bytes[doff + 3] & 0x3F\r\n    this.pixels = bytes.slice(doff + 4, doff + 16)\r\n  }\r\n\r\n  execute (context) {\r\n    /* blit a tile */\r\n    const x = this.column * context.TILE_WIDTH\r\n    const y = this.row * context.TILE_HEIGHT\r\n\r\n    if (x + 6 > context.WIDTH || y + 12 > context.HEIGHT) {\r\n      console.log(`TileBlock out of bounds (${this.row},${this.column})`)\r\n      return\r\n    }\r\n\r\n    for (let i = 0; i < 12; i++) {\r\n      const curbyte = this.pixels[i]\r\n      for (let j = 0; j < 6; j++) {\r\n        const color = this.colors[((curbyte >> (5 - j)) & 0x1)]\r\n        const offset = x + j + (y + i) * context.WIDTH\r\n        this.op(context, offset, color)\r\n      }\r\n    }\r\n  }\r\n\r\n  op ({ pixels }, offset, color) {\r\n    pixels[offset] = color\r\n  }\r\n}\r\n\r\n/************************************************\r\n*\r\n* TILE_BLOCK_XOR\r\n*\r\n************************************************/\r\nclass CDGTileBlockXORInstruction extends CDGTileBlockInstruction {\r\n  op ({ pixels }, offset, color) {\r\n    pixels[offset] = pixels[offset] ^ color\r\n  }\r\n}\r\n\r\n/************************************************\r\n*\r\n* SCROLL_PRESET\r\n*\r\n************************************************/\r\nclass CDGScrollPresetInstruction extends CDGInstruction {\r\n  constructor (bytes, offset) {\r\n    super(bytes, offset)\r\n\r\n    const doff = offset + CDG_DATA\r\n    this.color = bytes[doff] & 0x0F\r\n\r\n    const hScroll = bytes[doff + 1] & 0x3F\r\n    this.hCmd = (hScroll & 0x30) >> 4\r\n    this.hOffset = (hScroll & 0x07)\r\n\r\n    const vScroll = bytes[doff + 2] & 0x3F\r\n    this.vCmd = (vScroll & 0x30) >> 4\r\n    this.vOffset = (vScroll & 0x07)\r\n  }\r\n\r\n  execute (context) {\r\n    context.hOffset = Math.min(this.hOffset, 5)\r\n    context.vOffset = Math.min(this.vOffset, 11)\r\n\r\n    let hmove = 0\r\n    if (this.hCmd === CDG_SCROLL_RIGHT) {\r\n      hmove = context.TILE_WIDTH\r\n    } else if (this.hCmd === CDG_SCROLL_LEFT) {\r\n      hmove = -context.TILE_WIDTH\r\n    }\r\n\r\n    let vmove = 0\r\n    if (this.vCmd === CDG_SCROLL_DOWN) {\r\n      vmove = context.TILE_HEIGHT\r\n    } else if (this.vCmd === CDG_SCROLL_UP) {\r\n      vmove = -context.TILE_HEIGHT\r\n    }\r\n\r\n    if (hmove === 0 && vmove === 0) {\r\n      return\r\n    }\r\n\r\n    let offx\r\n    let offy\r\n    for (let x = 0; x < context.WIDTH; x++) {\r\n      for (let y = 0; y < context.HEIGHT; y++) {\r\n        offx = x + hmove\r\n        offy = y + vmove\r\n        context.buffer[x + y * context.WIDTH] = this.getPixel(context, offx, offy)\r\n      }\r\n    }\r\n    const tmp = context.pixels\r\n    context.pixels = context.buffer\r\n    context.buffer = tmp\r\n  }\r\n\r\n  getPixel ({ WIDTH, HEIGHT, pixels }, offx, offy) {\r\n    if (offx > 0 && offx < WIDTH && offy > 0 && offy < HEIGHT) {\r\n      return pixels[offx + offy * WIDTH]\r\n    } else {\r\n      return this.color\r\n    }\r\n  }\r\n}\r\n\r\n/************************************************\r\n*\r\n* SCROLL_COPY\r\n*\r\n************************************************/\r\nclass CDGScrollCopyInstruction extends CDGScrollPresetInstruction {\r\n  getPixel ({ WIDTH, HEIGHT, pixels }, offx, offy) {\r\n    offx = (offx + WIDTH) % WIDTH\r\n    offy = (offy + HEIGHT) % HEIGHT\r\n    return pixels[offx + offy * WIDTH]\r\n  }\r\n}\r\n\r\n/************************************************\r\n*\r\n* SET_KEY_COLOR\r\n*\r\n************************************************/\r\nclass CDGSetKeyColorInstruction extends CDGInstruction {\r\n  constructor (bytes, offset) {\r\n    super(bytes, offset)\r\n    this.index = bytes[offset + CDG_DATA] & 0x0F\r\n  }\r\n\r\n  execute (context) {\r\n    context.keyColor = this.index\r\n  }\r\n}\r\n\r\n/************************************************\r\n*\r\n* LOAD_CLUT_LOW\r\n*\r\n************************************************/\r\nclass CDGLoadCLUTLowInstruction extends CDGInstruction {\r\n  constructor (bytes, offset) {\r\n    super(bytes, offset)\r\n\r\n    const doff = offset + CDG_DATA\r\n    this.colors = Array(8)\r\n\r\n    for (let i = 0; i < 8; i++) {\r\n      const cur = doff + 2 * i\r\n\r\n      let color = (bytes[cur] & 0x3F) << 6\r\n      color += bytes[cur + 1] & 0x3F\r\n\r\n      const rgb = Array(3)\r\n      rgb[0] = color >> 8 // red\r\n      rgb[1] = (color & 0xF0) >> 4 // green\r\n      rgb[2] = color & 0xF // blue\r\n      this.colors[i] = rgb\r\n    }\r\n  }\r\n\r\n  execute (context) {\r\n    for (let i = 0; i < 8; i++) {\r\n      context.setCLUTEntry(i + this.clutOffset,\r\n        this.colors[i][0],\r\n        this.colors[i][1],\r\n        this.colors[i][2])\r\n    }\r\n  }\r\n\r\n  get clutOffset () { return 0 }\r\n}\r\n\r\n/************************************************\r\n*\r\n* LOAD_CLUT_HI\r\n*\r\n************************************************/\r\nclass CDGLoadCLUTHighInstruction extends CDGLoadCLUTLowInstruction {\r\n  get clutOffset () { return 8 }\r\n}\r\n\r\n/************************************************\r\n*\r\n* CDGParser\r\n*\r\n************************************************/\r\nclass CDGParser {\r\n  static parseOne (bytes, offset) {\r\n    const command = bytes[offset] & this.COMMAND_MASK\r\n\r\n    /* if this packet is a cdg command */\r\n    if (command === this.CDG_COMMAND) {\r\n      const opcode = bytes[offset + 1] & this.COMMAND_MASK\r\n      const InstructionType = this.BY_TYPE[opcode]\r\n\r\n      if (typeof (InstructionType) !== 'undefined') {\r\n        return new InstructionType(bytes, offset)\r\n      } else {\r\n        console.log(`Unknown CDG instruction (instruction = ${opcode})`)\r\n        return new CDGNoopInstruction()\r\n      }\r\n    }\r\n\r\n    return new CDGNoopInstruction()\r\n  }\r\n\r\n  static parseData (bytes) {\r\n    const instructions = []\r\n\r\n    for (let offset = 0; offset < bytes.length; offset += PACKET_SIZE) {\r\n      const instruction = this.parseOne(bytes, offset)\r\n\r\n      if (instruction != null) {\r\n        instructions.push(instruction)\r\n      }\r\n    }\r\n\r\n    return instructions\r\n  }\r\n}\r\n\r\nCDGParser.COMMAND_MASK = 0x3F\r\nCDGParser.CDG_COMMAND = 0x9\r\n\r\nCDGParser.BY_TYPE = {}\r\nCDGParser.BY_TYPE[CDG_MEMORY_PRESET] = CDGMemoryPresetInstruction\r\nCDGParser.BY_TYPE[CDG_BORDER_PRESET] = CDGBorderPresetInstruction\r\nCDGParser.BY_TYPE[CDG_TILE_BLOCK] = CDGTileBlockInstruction\r\nCDGParser.BY_TYPE[CDG_SCROLL_PRESET] = CDGScrollPresetInstruction\r\nCDGParser.BY_TYPE[CDG_SCROLL_COPY] = CDGScrollCopyInstruction\r\nCDGParser.BY_TYPE[CDG_SET_KEY_COLOR] = CDGSetKeyColorInstruction\r\nCDGParser.BY_TYPE[CDG_LOAD_CLUT_LOW] = CDGLoadCLUTLowInstruction\r\nCDGParser.BY_TYPE[CDG_LOAD_CLUT_HI] = CDGLoadCLUTHighInstruction\r\nCDGParser.BY_TYPE[CDG_TILE_BLOCK_XOR] = CDGTileBlockXORInstruction\r\n\r\n/************************************************\r\n*\r\n* CDGPlayer\r\n*\r\n************************************************/\r\nclass CDGPlayer {\r\n  constructor (canvas, opts = {}) {\r\n    if (!(canvas instanceof HTMLCanvasElement)) {\r\n      throw new Error('Must be instantiated with a canvas element')\r\n    }\r\n\r\n    if (opts.onBackgroundChange && typeof opts.onBackgroundChange !== 'function') {\r\n      throw new Error(`'onBackgroundChange' option must be a function`)\r\n    }\r\n\r\n    this.canvas = canvas\r\n    this.opts = opts\r\n    this.init()\r\n  }\r\n\r\n  forceTransparent (val) {\r\n    this.context.forceTransparent = val\r\n    this.context.renderFrame()\r\n  }\r\n\r\n  init () {\r\n    this.instructions = []\r\n    this.pc = -1 // packet counter\r\n    this.frameId = null\r\n    this.pos = 0 // current position in ms\r\n    this.lastSyncPos = null // ms\r\n    this.lastTimestamp = null // DOMHighResTimeStamp\r\n    this.lastBackground = null\r\n  }\r\n\r\n  load (data) {\r\n    this.stop()\r\n    this.init()\r\n\r\n    this.instructions = CDGParser.parseData(data)\r\n    this.context = new CDGContext(this.canvas, this.opts)\r\n    this.pc = 0\r\n  }\r\n\r\n  step () {\r\n    if (this.pc >= 0 && this.pc < this.instructions.length) {\r\n      this.instructions[this.pc].execute(this.context)\r\n      this.pc += 1\r\n    } else {\r\n      this.stop()\r\n      this.pc = -1\r\n      console.log('No more instructions.')\r\n    }\r\n  }\r\n\r\n  fastForward (count) {\r\n    const max = this.pc + count\r\n    while (this.pc >= 0 && this.pc < max) {\r\n      this.step()\r\n    }\r\n  }\r\n\r\n  play () {\r\n    if (!this.frameId && this.instructions.length) {\r\n      this.frameId = requestAnimationFrame(this.update.bind(this))\r\n      this.lastTimestamp = performance.now()\r\n    }\r\n  }\r\n\r\n  stop () {\r\n    cancelAnimationFrame(this.frameId)\r\n    this.frameId = null\r\n  }\r\n\r\n  sync (ms) {\r\n    this.lastSyncPos = ms\r\n    this.lastTimestamp = performance.now()\r\n  }\r\n\r\n  update (timestamp) {\r\n    if (this.pc === -1) return\r\n\r\n    // go ahead and request the next frame\r\n    this.frameId = requestAnimationFrame(this.update.bind(this))\r\n\r\n    if (this.lastSyncPos) {\r\n      // last known audio position + time delta\r\n      this.pos = this.lastSyncPos + (timestamp - this.lastTimestamp)\r\n    } else {\r\n      // time delta only (unsynced)\r\n      this.pos += timestamp - this.lastTimestamp\r\n      this.lastTimestamp = timestamp\r\n    }\r\n\r\n    // determine packet we should be at, based on spec\r\n    // of 4 packets per sector @ 75 sectors per second\r\n    const newPc = Math.floor(4 * 75 * (this.pos / 1000))\r\n    const ffAmt = newPc - this.pc\r\n\r\n    if (ffAmt <= 0) return\r\n\r\n    this.fastForward(ffAmt)\r\n    this.context.renderFrame()\r\n\r\n    if (this.opts.onBackgroundChange) {\r\n      const cur = this.context.backgroundRGBA\r\n      const last = this.lastBackground\r\n\r\n      if (cur && !(last && cur.every((val, i) => val === last[i]))) {\r\n        this.lastBackground = cur\r\n        this.opts.onBackgroundChange(cur)\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nmodule.exports = CDGPlayer\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./index.js ./demo/demo.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Matt\\Downloads\\CDG\\cdgraphics\\cdgraphics\\index.js */\"./index.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\Matt\\Downloads\\CDG\\cdgraphics\\cdgraphics\\demo\\demo.js */\"./demo/demo.js\");\n\n\n//# sourceURL=webpack:///multi_./index.js_./demo/demo.js?");

/***/ })

/******/ });