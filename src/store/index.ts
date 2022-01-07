import { createStore } from 'vuex'
// import { allOrganization } from '@/api/mange/postSet'
// import personnelManage from './modules/personnelManage'
import local from '@/utils/Local'

// 部门重组
const translateDataToTree = (list) => {
  //第一层数据
  let parents = list.filter((item) => item.parentId === null);
  //有父节点的数据
  let childrens = list.filter((item) => item.parentId !== null);
  function translate(parents, childrens) {
    parents.forEach((parent) => {
      childrens.forEach((children, index) => {
        if (children.parentId === parent.id) {
          let temp = JSON.parse(JSON.stringify(childrens))
          temp.splice(index, 1)
          //判断是否有children属性  有就直接push  没有就新增children
          parent.children
            ? parent.children.push(children)
            : (parent.children = [children]);
          translate([children], temp);
        }
      })
    })
  }
  translate(parents, childrens);
  //返回最终的结果
  return parents;
};

export default createStore({
  state: {
    isRosterSet: false,
    departmentList: local.get('departmentList') ? local.get('departmentList') : [], // 老的部门列表
    newDepartmentList: local.get('newDepartmentList') ? local.get('newDepartmentList') : [], // 老的部门列表
  },
  mutations: {
    changeRosterT(state) {
      state.isRosterSet = true
    },
    changeRosterF(state) {
      state.isRosterSet = false
    },
    // 修改部门列表
    changeDepartment(state, num) {
      state.departmentList = num
      state.newDepartmentList = translateDataToTree(num)[0].children
      local.set('departmentList', num)
      local.set('newDepartmentList', state.newDepartmentList)
    }
  },
  actions: {
    // 获取部门列表
    changeDepartment({ commit, state }) {
      return new Promise((reslove, reject) => {
        // allOrganization('', '')
        //   .then(res => {
        //     commit('changeDepartment', res.items)
        //     reslove(1)
        //   })
      })
    }
  },
  modules: {

  }
})
