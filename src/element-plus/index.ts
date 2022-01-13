import { ElButton, ElUpload, ElProgress, ElScrollbar, ElRadio, ElInput, ElMessage, ElMessageBox, ElMenu, ElMenuItem, ElMenuItemGroup, ElIcon, ElDropdown, ElDropdownMenu, ElDropdownItem, ElBreadcrumb, ElBreadcrumbItem, ElRow, ElCol, ElCard, ElTableColumn, ElTable, ElPagination, ElFormItem, ElForm, ElDialog, ElTabPane, ElTabs, ElTree, ElCheckbox, ElCheckboxGroup, ElCheckboxButton, ElOption, ElSelect, ElSwitch, ElTag, ElCascader, ElDatePicker, ElAffix, ElRadioGroup, ElRadioButton, ElContainer, ElHeader, ElAside, ElMain, ElStep, ElSteps, ElTimePicker, ElTimeline, ElTimelineItem } from 'element-plus'
import { Edit, Expand, FullScreen, ArrowDown, Search, HomeFilled, Fold } from '@element-plus/icons-vue'

const components: any[] = [
    ElMessage, ElMessageBox, ElScrollbar, ElButton, ElUpload, ElProgress, ElInput, ElRadio, ElMenu, ElMenuItem, ElMenuItemGroup, ElIcon, ElDropdown, ElDropdownMenu, ElDropdownItem, ElBreadcrumb, ElBreadcrumbItem, ElRow, ElCol, ElCard, ElTableColumn, ElTable, ElPagination, ElFormItem, ElForm, ElDialog, ElTabPane, ElTabs, ElTree, ElCheckbox, ElCheckboxGroup, ElCheckboxButton, ElOption, ElSelect, ElSwitch, ElTag, ElCascader, ElDatePicker, ElAffix, ElRadioGroup, ElRadioButton, ElContainer, ElHeader, ElAside, ElMain, ElStep, ElSteps, ElTimePicker, ElTimeline, ElTimelineItem
]
const iconComponent: any[] = [Edit, FullScreen, ArrowDown, Expand, Fold, Search, HomeFilled]

export const componentIcon = (app: any) => iconComponent.forEach(item => { app.component(item.name, item) })

export const componentsPlugin = (app: any) => components.forEach(app.use, app)
