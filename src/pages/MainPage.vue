<template>
  <el-container class="container">
    <el-header class="page-header" height="80px">
      <img src="../assets/memster-mini.png" class="logo-picture"/>
      <div class="profile-container">
        <el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
        <span class="username">Dummy User</span>
      </div>
    </el-header>
    <el-container class="inner-container">
      <el-header class="sub-header" height="120px">
        <i class="el-icon-collection"></i>
        <span style="margin-left: 16px">知识库</span>
      </el-header>
      <el-main>
        <group-panel v-for="group in groups" :group="group"></group-panel>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {IGroup} from '@/model';
  import GroupPanel from '@/components/GroupPanel.vue';

  @Component({
    components: {GroupPanel}
  })
  export default class MainPage extends Vue {
    private groups: Array<IGroup> = [
      {
        id: '001',
        name: '语言',
        contents: [
          {
            id: '1-1',
            name: '英语',
            groupId: '001'
          }, {
            id: '1-2',
            name: '日语',
            groupId: '001'
          }
        ]
      }, {
        id: '002',
        name: '计算机',
        contents: [
          {
            id: '2-1',
            name: '算法的知识',
            groupId: '002'
          }, {
            id: '2-2',
            name: 'JAVA',
            groupId: '002'
          }
        ]
      }, {
        id: '003',
        name: '奇怪的知识',
        contents: [
          {
            id: '3-1',
            name: '猫猫meomeomeo',
            groupId: '002'
          }
        ]
      },
    ];
  }
</script>

<style lang="less" scoped>
  .logo-picture {
    height: 100%;
  }

  .container {
    background-color: #393939;
    min-height: 100%;
    width: 100%
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    background-color: #57354D;
    padding: 0 120px;
    box-shadow: 0 2px 12px 0 rgba(255, 255, 255, 0.1);
  }

  .profile-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-self: flex-end;

    .username {
      margin-left: 16px;
    }
  }

  .inner-container {
    padding: 0 180px;

    .sub-header {
      display: flex;
      align-items: center;
      font-size: 36px;
      font-weight: bold;
    }
  }
</style>
