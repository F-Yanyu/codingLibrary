<template>
  <div class='PersonnelTalents_greenCard--warp'>
    <el-dialog custom-class='mergeTalbe_dialog' :visible.sync="dialogTableVisible" close-on-click-modal  :show-close='true' width='70%'>
    <h1 class='title'>人才绿卡购房、租房补贴情况统计表</h1>
    <div class='PT_greenCard--table'>
      <el-table
        :data='budgetList'
        border
        style='width: 100%' :cell-style='updataCellStyle' :span-method='objectSpanMethod'>
        <el-table-column
          prop='nianfen'
          label='年份'>
        </el-table-column>
        <el-table-column
          label='A卡'>
          <el-table-column
            prop='chikazongrenshu'
            label='持卡总人数 （人）'>
          </el-table-column>
          <el-table-column
            prop='butiezongfafang'
            label='补贴总发放 （万元）'>
          </el-table-column>
          <el-table-column
            label='购房'>
            <el-table-column
              prop='chikarenshu'
              label='持卡人数 （人）'>
            </el-table-column>
            <el-table-column
              prop='gourfangbutie'
              label='购房补贴 （万元）'>
            </el-table-column>
          </el-table-column>
          <el-table-column
            label='租房'>
            <el-table-column
              prop='chikfarenshu'
              label='持卡人数 （人）'>
            </el-table-column>
            <el-table-column
              prop='zufangbutie'
              label='租房补贴 （万元）'>
            </el-table-column>
          </el-table-column>
        </el-table-column>
        <el-table-column
          label='B卡'>
          <el-table-column
            prop='chikazongrenshu1'
            label='持卡总人数 （人）'>
          </el-table-column>
          <el-table-column
            prop='butiezongfafang1'
            label='补贴总发放 （万元）'>
          </el-table-column>
          <el-table-column
            label='购房'>
            <el-table-column
              prop='chikarenshu1'
              label='持卡人数 （人）'>
            </el-table-column>
            <el-table-column
              prop='gourfangbutie1'
              label='购房补贴 （万元）'>
            </el-table-column>
          </el-table-column>
          <el-table-column
            label='租房'>
            <el-table-column
              prop='chikfarenshu1'
              label='持卡人数 （人）'>
            </el-table-column>
            <el-table-column
              prop='zufangbutie1'
              label='租房补贴 （万元）'>
            </el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
    </el-dialog>
    <el-button @click='closeMergeTalbeDialog'>MergeELementUITable</el-button>
  </div>
</template>

<script>
export default {
  name: 'PersonnelTalents_GreenCard',
  data() {
    return {
      budgetList: [
        {
          nianfen: '2021年 1——3月',
          chikazongrenshu: '——',
          butiezongfafang: '——',
          chikarenshu: '——',
          gourfangbutie: '——',
          chikfarenshu: '——',
          zufangbutie: '——',
          chikazongrenshu1: '9938',
          butiezongfafang1: '2914.8',
          chikarenshu1: '——',
          gourfangbutie1: '——',
          chikfarenshu1: '6321',
          zufangbutie1: '2914.8'
        },
        {
          nianfen: '2021年 4——6月',
          chikazongrenshu: '——',
          butiezongfafang: '——',
          chikarenshu: '——',
          gourfangbutie: '——',
          chikfarenshu: '——',
          zufangbutie: '——',
          chikazongrenshu1: '9938',
          butiezongfafang1: '9456.7',
          chikarenshu1: '754',
          gourfangbutie1: '6654.5',
          chikfarenshu1: '6072',
          zufangbutie1: '2802.2'
        },
        {
          nianfen: '2021年 7——9月',
          chikazongrenshu: '——',
          butiezongfafang: '——',
          chikarenshu: '——',
          gourfangbutie: '——',
          chikfarenshu: '——',
          zufangbutie: '——',
          chikazongrenshu1: '9938',
          butiezongfafang1: '9456.7',
          chikarenshu1: '754',
          gourfangbutie1: '6654.5',
          chikfarenshu1: '6072',
          zufangbutie1: '2802.2'
        },
        {
          nianfen: '2021年 10——12月',
          chikazongrenshu: '915',
          butiezongfafang: '72.56',
          chikarenshu: '5',
          gourfangbutie: '68',
          chikfarenshu: '3',
          zufangbutie: '4.56',
          chikazongrenshu1: '10600',
          butiezongfafang1: '9456.7',
          chikarenshu1: '754',
          gourfangbutie1: '6654.5',
          chikfarenshu1: '6072',
          zufangbutie1: '2802.2'
        }
      ],
      spanArr: [],//二维数组，用于存放单元格合并规则
      position: 0,//用于存储相同项的开始index,
      dialogTableVisible:false   // 控制dialog弹框的显示
    }
  },
  mounted() {
    this.tableInit()
    this.rowspan()
  },
  methods: {
    // 需要把第8列合并
    tableInit(){
      this.rowspan(0,'nianfen');
      this.rowspan(1,'chikazongrenshu');
      this.rowspan(2,'butiezongfafang');
      this.rowspan(3,'chikarenshu');
      this.rowspan(4,'gourfangbutie');
      this.rowspan(5,'chikfarenshu');
      this.rowspan(6,'zufangbutie');
      this.rowspan(7,'chikazongrenshu1');
    },
    // 修改单个表格样式
    updataCellStyle({ rowIndex, columnIndex }) {
      if (rowIndex === 0 && columnIndex === 0) {
        return { background: '#51D2FF' }
      } else if (rowIndex === 1 && columnIndex === 0) {
        return { background: '#51D2FF' }
      } else if (rowIndex === 2 && columnIndex === 0) {
        return { background: '#51D2FF' }
      } else if (rowIndex === 3 && columnIndex === 0) {
        return { background: '#51D2FF' }
      }
    },
    // 普通静态数据合并单元格
    // mergeColumnTableCell({rowIndex,columnIndex}){
    //   if(columnIndex === 7){
    //     if(rowIndex === 0){
    //       return {
    //         rowspan:3,
    //         colspan:1
    //       }
    //     }
    //   }
    // },
    rowspan(idx, prop) {
      this.spanArr[idx] = []
      this.position = 0
      this.budgetList.forEach((item, index) => {
        if (index === 0) {
          this.spanArr[idx].push(1)
          this.position = 0
        } else {
          if (this.budgetList[index][prop] === this.budgetList[index - 1][prop]) {
            this.spanArr[idx][this.position] += 1//有相同项
            this.spanArr[idx].push(0) // 名称相同后往数组里面加一项0
          } else {
            this.spanArr[idx].push(1)//同列的前后两行单元格不相同
            this.position = index
          }
        }
      })
    },
    //表格单元格合并
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      for (let i = 0; i < 8; i++) {
        if (columnIndex === i) {
          const _row = this.spanArr[i][rowIndex]
          const _col = _row > 0 ? 1 : 0
          // console.log('第'+rowIndex+'行','第'+i+'列','rowspan:'+_row,'colspan:'+_col)
          return {
            rowspan: _row,
            colspan: _col
          }
        }
      }
    },
    closeMergeTalbeDialog(){
      this.dialogTableVisible = !this.dialogTableVisible
    }

  }

}
</script>

<style lang='scss'>

.PT_greenCard--table {
  .mergeTalbe_dialog{
    .dialog_body {
      box-sizing: border-box;
    }
  }
  .el-table tr {
    background-color: #CEF2FF;
  }

  .el-table th.el-table__cell {
    background-color: #51D2FF;
  }

  .el-table__fixed, .el-table__fixed-right, .el-table__fixed-right::before, .el-table__fixed::before {
    background-color: #51D2FF;
  }

  .el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell {
    background-color: #A8E9FF;
  }

  .el-table thead {
    color: #111111;
  }

  .el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf {
    border-bottom: 1Px solid #8E8E8E;
  }

  .el-table--border .el-table__cell, .el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
    border-right: 1Px solid #8E8E8E;
  }

  .el-table .el-table__cell {
    padding: 16px 0;
    //padding:0;
  }

  .el-table__body tr.hover-row.current-row > td.el-table__cell, .el-table__body tr.hover-row.el-table__row--striped.current-row > td.el-table__cell, .el-table__body tr.hover-row.el-table__row--striped > td.el-table__cell, .el-table__body tr.hover-row > td.el-table__cell {
    background: transparent;
    height: 0.390625rem;
  }

  .el-table .cell {
    font-size: 14px;
    color: black;
    font-weight: 300;
    //height:0.625rem;
    line-height: 16px;
    text-align: center;
  }

  // 头部团体背景颜色
  .el-table thead.is-group th.el-table__cell {
    background-color: #51D2FF;
  }

  // 头部团体单元格下边框颜色
  .el-table--border th.el-table__cell, .el-table__fixed-right-patch {
    border-bottom: 1px solid #8E8E8E;
  }

}
</style>
<style lang='scss' scoped>

.PersonnelTalents_greenCard--warp {
  //width: 70%;
  //height: 90%;
  margin:0 auto;

  h1 {
    font-size: 30px;
    font-weight: 400;
    color: #1d2382;
    text-align: center;
    margin:0;
  }

  .PT_greenCard--table {
    width: 100%;
    height: 100%;
  }
}
</style>
