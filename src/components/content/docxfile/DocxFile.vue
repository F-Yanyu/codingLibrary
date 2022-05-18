<template>
  <div class='inquirycause-box'>
    <el-dialog title='检 查（勘 验）笔 录' :visible.sync='visible'>
      <div class='inquirycause-form-box'>
        <el-form v-if='isShow' :model='dataForm' :rules='dataRule' ref='dataForm' label-width='120px'>
          <el-form-item>
            <div class='anjian-box'>
              <el-input v-model='dataForm.name'></el-input>
            </div>
          </el-form-item>
          <div class='inquirycause-line'>
            <el-form-item label='时间：'>
              <div class='active'>
                <el-date-picker
                  v-model='dataForm.startTime'
                  type='datetime'
                  placeholder='选择开始时间'
                  align='right'
                  :value-format='`yyyy-MM-dd HH:mm:ss`'
                >
                </el-date-picker>
                <h4>至</h4>
                <el-date-picker
                  v-model='dataForm.endTime'
                  type='datetime'
                  placeholder='选择结束时间'
                  align='right'
                  :value-format='`yyyy-MM-dd HH:mm:ss`'
                >
                </el-date-picker>
              </div>
            </el-form-item>
          </div>
          <el-form-item label='地点：' prop='site'>
            <el-input v-model='dataForm.site'></el-input>
          </el-form-item>
          <div v-if="caseType == 1 || caseType ==''">
            <div class='inquirycause-line'>
              <el-form-item label='被检查（勘验）人名称：' label-width='180px' prop='inquestName'>
                <el-input v-model='dataForm.inquestName'></el-input>
              </el-form-item>
              <el-form-item label='法定代表人（负责人）：' label-width='180px' prop='principalName'>
                <el-input v-model='dataForm.principalName'></el-input>
              </el-form-item>
            </div>
            <div class='inquirycause-line'>
              <div class='inquirycause-line'>
                <el-form-item label='地址:' prop='inquestAddress'>
                  <el-input v-model='dataForm.inquestAddress' placeholder='被检查（勘验）人地址'></el-input>
                </el-form-item>
                <el-form-item label='联系方式:' prop='inquestPhone'>
                  <el-input v-model='dataForm.inquestPhone' placeholder='被检查（勘验）人联系方式'></el-input>
                </el-form-item>
              </div>
            </div>
          </div>
          <div v-if="caseType == 0 || caseType ==''">
            <div class='inquirycause-line'>
              <el-form-item label='被检查（勘验）人姓名：' label-width='180px' prop='reviewedName'>
                <el-input v-model='dataForm.reviewedName'></el-input>
              </el-form-item>
              <el-form-item label='性别：' prop='reviewedSex'>
                <el-select v-model='dataForm.reviewedSex' placeholder='请选择被询问人性别' size='medium'
                           style='width: 60%'>
                  <el-option label='男' :value='0'></el-option>
                  <el-option label='女' :value='1'></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label='身份证号码：' prop='reviewedCardNo'>
                <el-input v-model='dataForm.reviewedCardNo'></el-input>
              </el-form-item>
            </div>
            <div class='inquirycause-line'>
              <el-form-item label='工作单位：' prop='reviewedUnit'>
                <el-input v-model='dataForm.reviewedUnit'></el-input>
              </el-form-item>
              <el-form-item label='联系方式：' prop='reviewedPhone'>
                <el-input v-model='dataForm.reviewedPhone'></el-input>
              </el-form-item>
            </div>
            <div class='inquirycause-line'>
              <el-form-item label='住址：' prop='reviewedAddress'>
                <el-input v-model='dataForm.reviewedAddress'></el-input>
              </el-form-item>
              <el-form-item label='邮编：' prop='reviewedPostcode'>
                <el-input v-model='dataForm.reviewedPostcode'></el-input>
              </el-form-item>
            </div>
          </div>
          <div class='inquirycause-line'>
            <el-form-item label='见证人：' prop='eyewitnessName'>
              <el-input v-model='dataForm.eyewitnessName'></el-input>
            </el-form-item>
            <el-form-item label='联系方式：' prop='eyewitnessPhone'>
              <el-input v-model='dataForm.eyewitnessPhone'></el-input>
            </el-form-item>
            <el-form-item label='单位或住址：' prop='eyewitnessUnit'>
              <el-input v-model='dataForm.eyewitnessUnit'></el-input>
            </el-form-item>
          </div>
          <div class='inquirycause-line'>
            <el-form-item label='检查（勘验）人：' label-width='140px' prop='inquisitorial'>
              <el-input v-model='dataForm.inquisitorialNameOne'></el-input>
            </el-form-item>
            <el-form-item label='工作单位：' label-width='140px' prop='inquisitorial'>
              <el-input v-model='dataForm.inquisitorialUnitOne'></el-input>
            </el-form-item>
          </div>
          <div class='inquirycause-line'>
            <el-form-item label-width='140px'>
              <el-input v-model='dataForm.inquisitorialNameTwo'></el-input>
            </el-form-item>
            <el-form-item label='工作单位：' label-width='140px' prop='inquisitorial'>
              <el-input v-model='dataForm.inquisitorialUnitTwo'></el-input>
            </el-form-item>
          </div>
          <div class='inquirycause-line'>
            <el-form-item label='记录人：' label-width='140px' prop='recorderName'>
              <el-input v-model='dataForm.recorderName'></el-input>
            </el-form-item>
            <el-form-item label='工作单位：' label-width='140px' prop='recorderUnit'>
              <el-input v-model='dataForm.recorderUnit'></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item label='告知事项：'>
              <div class='ask-box'>
                <el-input v-model='dataForm.notificationMatters' type='textarea'
                          :autosize='{ minRows: 2}'></el-input>
              </div>
            </el-form-item>
            <el-form-item label='问：' label-width='100px'>
              <div class='ask-box'>
                <el-input v-model='dataForm.wen' type='textarea' :autosize='{ minRows: 2}'></el-input>
              </div>
            </el-form-item>
            <el-form-item label='答：' label-width='100px'>
              <div class='ask-box'>
                <el-input v-model='dataForm.da' type='textarea' :autosize='{ minRows: 2}'></el-input>
              </div>
            </el-form-item>
          </div>
          <el-form-item label='现场情况：' prop='currentSituation'>
            <el-input v-model='dataForm.currentSituation'></el-input>
          </el-form-item>
          <div>
            <el-form-item label='问：' label-width='100px'>
              <div class='ask-box'>
                <el-input v-model='dataForm.wen1' type='textarea'
                          :autosize='{ minRows: 2}'></el-input>
              </div>
            </el-form-item>
            <el-form-item label='答：' label-width='100px'>
              <div class='ask-box'>
                <el-input v-model='dataForm.da1' type='textarea'
                          :autosize='{ minRows: 2}'></el-input>
              </div>
            </el-form-item>
          </div>
          <div id='mount-point'></div>
          <div class='inquirycause-line'>
            <el-form-item label='被检查（勘验）人或现场负责人签字：' label-width='140px' prop='signChagerImg'>
              <el-input v-model='dataForm.signChagerImg'></el-input>
            </el-form-item>
            <el-form-item prop='signChagerTime'>
              <el-date-picker
                v-model='dataForm.signChagerTime'
                type='date'
                placeholder='选择日期'
                align='right'
                :value-format='`yyyy-MM-dd`'
              >
              </el-date-picker>
            </el-form-item>
          </div>
          <div class='active'>
            <el-form-item label-width='157px' label='检查（勘验）人签字：' prop='signInquisitorialImg'>
              <div class='active1'>
                <el-input v-model='dataForm.signInquisitorialImgOne'></el-input>
                <span>、</span>
                <el-input v-model='dataForm.signInquisitorialImgTwo'></el-input>
              </div>
            </el-form-item>
            <el-form-item label='记录人签字：' prop='signRecorderImg'>
              <el-input v-model='dataForm.signRecorderImg'></el-input>
            </el-form-item>
          </div>
        </el-form>
        <div ref='file' v-if='isShowYulan'></div>
        <div class='addLawBtn'>
          <el-button @click='openfile' class='submitBtn' size='medium' type='primary' v-show='isShow'>预览文件
          </el-button>
          <el-button @click='dataFormSubmit' class='submitBtn' size='medium' type='primary' v-show='isShow'>提交文件
          </el-button>
        </div>
      </div>
    </el-dialog>
    <el-button @click='visible=true'>docx文件下载与预览</el-button>
  </div>
</template>

<script>
// import {saveObj, getOne} from "../../../api/chechCause";
// import {saveObj1} from "../../../api/causeCourse";
// import word from "libs/word.js";
import axios from 'axios'

let docx = require('docx-preview')

export default {
  name: 'jcbl',
  data() {
    return {
      name: 'n',
      visible: false,
      isShow: true,
      isShowYulan: false,
      caseType: '',
      dataForm: {},
      dataRule: {
        // name: [
        //     { required: true, message: '案件名称不能为空', trigger: 'blur' }
        // ],
        // startTime: [
        //     { required: true, message: '开始时间不能为空', trigger: 'blur' }
        // ],
        // endTime: [
        //     { required: true, message: '结束时间不能为空', trigger: 'blur' }
        // ],
        // site: [
        //     { required: true, message: '地点不能为空', trigger: 'blur' }
        // ],
        // inquestName: [
        //     { required: true, message: '被检查（勘验）人名称不能为空', trigger: 'blur' }
        // ],
        // principalName: [
        //     { required: true, message: '法定代表人（负责人）不能为空', trigger: 'blur' }
        // ],
        // inquestAddress: [
        //     { required: true, message: '被检查（勘验）人地址不能为空', trigger: 'blur' }
        // ],
        // inquestPhone: [
        //     { required: true, message: '被检查（勘验）人联系方式不能为空', trigger: 'blur' }
        // ],
        // reviewedName: [
        //     { required: true, message: '被检查（勘验）人姓名不能为空', trigger: 'blur' }
        // ],
        // reviewedSex: [
        //     { required: true, message: '被检查（勘验）人性别（0男 1女）不能为空', trigger: 'blur' }
        // ],
        // reviewedAge: [
        //     { required: true, message: '被检查（勘验）人年龄不能为空', trigger: 'blur' }
        // ],
        // reviewedCardNo: [
        //     { required: true, message: '被检查（勘验）人身份证号码不能为空', trigger: 'blur' }
        // ],
        // reviewedUnit: [
        //     { required: true, message: '被检查（勘验）人工作单位不能为空', trigger: 'blur' }
        // ],
        // reviewedDuty: [
        //     { required: true, message: '被检查（勘验）人职务不能为空', trigger: 'blur' }
        // ],
        // reviewedPhone: [
        //     { required: true, message: '被检查（勘验）人电话不能为空', trigger: 'blur' }
        // ],
        // reviewedAddress: [
        //     { required: true, message: '被检查（勘验）人住址不能为空', trigger: 'blur' }
        // ],
        // reviewedPostcode: [
        //     { required: true, message: '被检查（勘验）人邮编不能为空', trigger: 'blur' }
        // ],
        // eyewitnessName: [
        //     { required: true, message: '见证人姓名不能为空', trigger: 'blur' }
        // ],
        // eyewitnessPhone: [
        //     { required: true, message: '见证人联系电话不能为空', trigger: 'blur' }
        // ],
        // eyewitnessUnit: [
        //     { required: true, message: '见证人工作单位不能为空', trigger: 'blur' }
        // ],
        // inquisitorial: [
        //     { required: true, message: '检查（勘验）人执法证号，工作单位：字符串类型json数组不能为空', trigger: 'blur' }
        // ],
        // recorderName: [
        //     { required: true, message: '记录人执法证号不能为空', trigger: 'blur' }
        // ],
        // recorderUnit: [
        //     { required: true, message: '记录人工作单位不能为空', trigger: 'blur' }
        // ],
        // currentSituation: [
        //     { required: true, message: '现场情况不能为空', trigger: 'blur' }
        // ],
        // delFlag: [
        //     { required: true, message: '删除类别:0未删除 1已删除不能为空', trigger: 'blur' }
        // ],
        // processAjApprovalId: [
        //     { required: true, message: '立案审批表id不能为空', trigger: 'blur' }
        // ]
      },
      masterId: ''
    }
  },
  created() {
    this.masterId = this.$route.query.masterId
    if (this.masterId) {
      getOne({ processAjApprovalId: this.masterId }).then(data => {
        if (data.success) {
          if (data.result) {
            let row = data.result
            for (let attr in row) {
              if (row[attr] == null) {
                row[attr] = ''
              }
            }
            this.dataForm = row
            if (this.dataForm.causeCourseList.length > 0) {
              this.list2 = this.dataForm.causeCourseList
              for (let i = 0; i < this.list2.length; i++) {
                for (let attr2 in this.list2[i]) {
                  if (this.list2[i][attr2] == null) {
                    this.list2[i][attr2] = ''
                  }
                }
              }
            }
          }
          this.createWord(this.dataForm)
        }
      })
    }
  },
  methods: {
    createWord(data) {
      //导出doc
      // word.exportDoc(data, "/jcbl.docx", "检查（勘察）笔录.docx");
    },
    // 表单提交
    dataFormSubmit() {
      let arr = this.list2
      this.$delete(this.dataForm, 'causeCourseList')
      this.$delete(this.dataForm, 'xunWenpersonList')
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.dataForm.processAjApprovalId = this.masterId
          saveObj(this.dataForm).then(data => {

            this.$message.success('操作成功')
            //this.addOrUpdateVisible = false;
            if (data.success) {
              if (arr.length > 0) {
                for (let i = 0; i < arr.length; i++) {
                  console.log(arr[i])
                  this.$set(arr[i], 'inquiryId', data.result.id)
                  console.log(arr[i])
                  saveObj1(arr[i]).then(data => {
                  })
                }
              }
            }
          })
        }
      })
    },
    openfile() {
      this.isShow = false
      this.isShowYulan = true
      axios({
        method: 'get',
        responseType: 'blob', // 设置响应文件格式
        url: 'http://fuimg.fuyanyu.cn/Docx%E6%96%87%E4%BB%B6%E9%A2%84%E8%A7%88%E6%B5%8B%E8%AF%95%E6%95%B0%E6%8D%AE.docx' //对应文件路径
      }).then(({ data }) => {
        docx.renderAsync(data, this.$refs.file) // 渲染到页面预览
      })
    }
  },
  watch: {
    visible: function(newname, oldname) {
      console.log(oldname, newname)
      if (this.visible === false) {
        // console.log(监听visible)
        this.isShow = true
        this.isShowYulan = false
      }
    }
  },
  mounted() {

  }

}
</script>


<style>
.active {
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.inquirycause-box .el-dialog__header {
  text-align: center;
  font-weight: 700;
}

.inquirycause-form-box .el-input__inner {
  border: none;
  border-bottom: 1px solid #E4E7ED;
  background-color: transparent !important;
  border-radius: 0px;
}

.anjian-box .el-select {
  width: 60%;
}

.inquirycause-form-box .el-form-item__label {
  font-weight: 700;
}

.inquirycause-form-box .el-textarea__inner {
  border: none;
  border-bottom: 1px solid #DCDFE6;
}

.ask-box .el-input {
  width: 150px;
}

.el-scrollbar .el-select-dropdown__item {
  padding: 0 20px !important;
}

</style>

<style scoped>
.inquirycause-form-box {
  padding: 0 20px;
}

.inquirycause-line {
  display: flex;
}

.ask-box {
  display: flex;
  flex-wrap: wrap;
}

.ask-box h1:first-child {
  text-indent: 2em;
}

.footer-box {
  display: flex;
  justify-content: center;
}

.addLawBtn {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
  position: relative;
}

.addLawBtn img {
  width: 40px;
  height: 40px;
}

.active1 {
  display: flex;
}
</style>
