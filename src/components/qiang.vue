<template>
  <el-container style="height: 800px; border: 2px solid red">
      <el-main style="padding:10px!important">
        <h2>参数:{{$route.params.username}}</h2>
        <el-table :data="tableData">
          <el-table-column prop="date" label="Date" width="140">
          </el-table-column>
          <el-table-column prop="name" label="Name" width="120">
          </el-table-column>
          <el-table-column prop="address" label="Address">
          </el-table-column>
        </el-table>
      </el-main>
  </el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    name:"qiang",
    data() {
      const item = {
        date: '2016-05-02',
        name: 'QIANG',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(5).fill(item)
      }
    }
  };
</script>