export const selectRoster = {
  EmployeeType: [
    {
      value: 0,
      label: '无类型'
    }, {
      value: 1,
      label: '全职'
    }, {
      value: 2,
      label: '兼职'
    }, {
      value: 3,
      label: '实习'
    }, {
      value: 4,
      label: '劳务派遣'
    }, {
      value: 5,
      label: '退休返聘'
    }, {
      value: 6,
      label: '劳务外包'
    }
  ], // 员工类型
  EmployeeStatus: [{
    value: 0,
    label: '试用'
  }, {
    value: 1,
    label: '正式'
  }], // 员工状态
  Sex: [{
    value: 1,
    label: '男'
  }, {
    value: 0,
    label: '女'
  }],  // 性别
  MaritalStatus: [ // 婚姻状况
    {
      value: 0,
      label: '未婚'
    }, {
      value: 1,
      label: '已婚'
    }, {
      value: 2,
      label: '离异'
    }],
    RegisteredResidenceType: [ // 户籍类型
    {
      value: 0,
      label: '本地城镇'
    }, {
      value: 1,
      label: '本地农村'
    }, {
      value: 2,
      label: '外地城镇（省内）'
    }, {
      value: 3,
      label: '外地农村（省内）'
    }, {
      value: 4,
      label: '本地城镇（省外）'
    }, {
      value: 5,
      label: '外地农村（省外）'
    }],
  PoliticalStatus: [ // 政治面貌
    {
      value: 0,
      label: '团员'
    }, {
      value: 1,
      label: '党员'
    }, {
      value: 2,
      label: '群众'
    }, {
      value: 3,
      label: '其他'
    }],
  Educational: [ // 学历
    {
      value: 0,
      label: '小学'
    }, {
      value: 1,
      label: '初中'
    }, {
      value: 2,
      label: '高中'
    }, {
      value: 3,
      label: '中专'
    }, {
      value: 4,
      label: '大专'
    }, {
      value: 5,
      label: '本科'
    }, {
      value: 6,
      label: '硕士'
    }, {
      value: 7,
      label: '博士'
    }, {
      value: 8,
      label: '其他'
    }],
  ContractType: [ // 合同类型
    {
      value: 0,
      label: '固定期限劳动合同'
    }, {
      value: 1,
      label: '无固定期限劳动合同'
    }, {
      value: 2,
      label: '实习协议'
    }, {
      value: 3,
      label: '劳务协议'
    }, {
      value: 4,
      label: '劳务派遣合同'
    }, {
      value: 5,
      label: '返聘协议'
    }, {
      value: 6,
      label: '短期劳动合同'
    }, {
      value: 7,
      label: '其他'
    }],
  ContactRelationship: [ // 关系
    {
      value: 0,
      label: '父母'
    }, {
      value: 1,
      label: '配偶'
    }, {
      value: 2,
      label: '子女'
    }, {
      value: 3,
      label: '其他'
    }],
  Relationship: [ // 联系人关系
    {
      value: 0,
      label: '父母'
    }, {
      value: 1,
      label: '配偶'
    }, {
      value: 2,
      label: '子女'
    }, {
      value: 3,
      label: '兄弟姐妹'
    }, {
      value: 4,
      label: '祖/外祖父母'
    }, {
      value: 5,
      label: '其他亲属'
    }],
  Nation: [
    { value: 0, label: '无' },
    { value: 1, label: '汉族' },
    { value: 2, label: '蒙古族' },
    { value: 3, label: '回族' },
    { value: 4, label: '藏族' },
    { value: 5, label: '维吾尔族' },
    { value: 6, label: '苗族' },
    { value: 7, label: '彝族' },
    { value: 8, label: '壮族' },
    { value: 9, label: '布依族' },
    { value: 10, label: '朝鲜族' },
    { value: 11, label: '满族' },
    { value: 12, label: '侗族' },
    { value: 13, label: '瑶族' },
    { value: 14, label: '白族' },
    { value: 15, label: '土家族' },
    { value: 16, label: '哈尼族' },
    { value: 17, label: '哈萨克族' },
    { value: 18, label: '傣族' },
    { value: 19, label: '黎族' },
    { value: 20, label: '傈僳族' },
    { value: 21, label: '佤族' },
    { value: 22, label: '畲族' },
    { value: 23, label: '高山族' },
    { value: 24, label: '拉祜族' },
    { value: 25, label: '水族' },
    { value: 26, label: '东乡族' },
    { value: 27, label: '纳西族' },
    { value: 28, label: '景颇族' },
    { value: 29, label: '柯尔克孜族' },
    { value: 30, label: '土族' },
    { value: 31, label: '达翰尔族' },
    { value: 32, label: '么佬族' },
    { value: 33, label: '羌族' },
    { value: 34, label: '布朗族' },
    { value: 35, label: '撒拉族' },
    { value: 36, label: '毛南族' },
    { value: 37, label: '仡佬族' },
    { value: 38, label: '锡伯族' },
    { value: 39, label: '阿昌族' },
    { value: 40, label: '普米族' },
    { value: 41, label: '塔吉克族' },
    { value: 42, label: '怒族' },
    { value: 43, label: '乌孜别克族' },
    { value: 44, label: '俄罗斯族' },
    { value: 45, label: '鄂温克族' },
    { value: 46, label: '德昂族' },
    { value: 47, label: '保安族' },
    { value: 48, label: '裕固族' },
    { value: 49, label: '京族' },
    { value: 50, label: '塔塔尔族' },
    { value: 51, label: '独龙族' },
    { value: 52, label: '鄂伦春族' },
    { value: 53, label: '赫哲族' },
    { value: 54, label: '门巴族' },
    { value: 55, label: '珞巴族' },
    { value: 56, label: '基诺族' },
  ],
  Probation: [
    {
      value: 0,
      label: '无试用期'
    }, {
      value: 1,
      label: '1个月'
    }, {
      value: 2,
      label: '2个月'
    }, {
      value: 3,
      label: '3个月'
    }, {
      value: 4,
      label: '4个月'
    }, {
      value: 5,
      label: '5个月'
    }, {
      value: 6,
      label: '6个月'
    }, {
      value: 7,
      label: '其他'
    }
  ]
}