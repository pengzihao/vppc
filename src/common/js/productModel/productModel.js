var businessModel = {
  title: "业务模式介绍页",
  icoImg: "",
  list: [
    {
      type: 1,
      name: "车商贷",
      introduce: "车商贷是微品金融为解决车商企业日常运营或扩大业务时，资金不足而打造的汽车库存融资服务。车商借款人所借款项用于采购、储备汽车，车商借款人车辆销售所得用于偿还出借人借款。微品金融审核通过的车商借款人直接向出借人借贷，双方通过微品金融网络平台完成协议签订，明确双方债权债务关系，微品金融全程跟踪车商借款人借款用途。",
      riskControl:'车商借款人股东（若股东为自然人，则个人股东及其配偶）为车商贷提供无限连带责任担保。',
      banner: require("@/assets/product/productModel/car-banner.jpg"),
      illustration: require("@/assets/product/productModel/car-illustration.jpg"),
      tradePatterns: require("@/assets/product/productModel/car-flowchart.jpg"),
      linkId :1
    },
    {
      type: 10,
      name: "企业贷",
      introduce: "企业贷是微品金融平台推出的网络借贷撮合服务，服务于有良好实体经营、且有借款需求的企业借款人。微品金融审核通过的企业借款人直接向出借人借贷，双方通过微品金融网络平台完成协议签订，明确双方债权债务关系，微品金融全程跟踪企业借款人借款用途。",
      riskControl:'所有企业贷均由第三方企业担保（包括但不限于借款人上下游企业、借款人股东方等）承担无限连带责任担保。',
      banner: require("@/assets/product/productModel/flow-banner.jpg"),
      illustration: require("@/assets/product/productModel/flow-illustration.jpg"),
      tradePatterns: require("@/assets/product/productModel/flow-flowchart.jpg"),
      linkId :10
    },
    {
      type: 17,
      name: "个人贷",
      introduce: "个人贷是微品金融平台推出的个人消费类投融资服务，服务于有稳定收入来源，且有真实消费需求的个人借款人。微品金融审核通过的个人借款人直接向出借人借贷，双方通过微品金融网络平台完成协议签订，明确双方债权债务关系，微品金融全程跟踪个人借款人借款用途。",
      riskControl:'结合运用大数据构建模型，制定大数据风控，模型审核加人工审核双管齐下，降低借款人违约风险。',
      banner: require("@/assets/product/productModel/house-banner.jpg"),
      illustration: require("@/assets/product/productModel/house-illustration.jpg"),
      tradePatterns: require("@/assets/product/productModel/house-flowchart.jpg"),
      linkId :13
    }
  ]
};
export default businessModel;





