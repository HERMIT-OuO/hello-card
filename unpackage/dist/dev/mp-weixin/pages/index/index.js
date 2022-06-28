"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../common/vendor.js");
const Card = () => "../../components/card.js";
const _sfc_main = {
  name: "",
  components: {
    Card
  },
  setup() {
    const data = common_vendor.reactive({
      simpleCardList: [
        {
          imgUrl: "",
          scale: "4:3"
        },
        {
          imgUrl: "",
          scale: "1:1"
        },
        {
          imgUrl: "",
          scale: "1:1"
        }
      ],
      classicCardList: [],
      textCardList: []
    });
    common_vendor.onBeforeMount(() => {
    });
    common_vendor.onMounted(() => {
    });
    const refData = common_vendor.toRefs(data);
    return __spreadValues({}, refData);
  }
};
if (!Array) {
  const _component_Card = common_vendor.resolveComponent("Card");
  _component_Card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.simpleCardList, (item, index, i0) => {
      return {
        a: "0dd5b10a-0-" + i0,
        b: common_vendor.p({
          imgUrl: item.imgUrl,
          scale: item.scale
        }),
        c: index
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Files/Code/card-generator/card-generator/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
