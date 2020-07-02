<template>
  <el-container>
    <el-header height="40px" class="caption-container">
      <el-divider class="group-divider" content-position="left">{{group.name}}</el-divider>
    </el-header>
    <el-main class="knowledge-container">
      <knowledge-card v-for="knowledge in group.contents" :key="knowledge.id" :knowledge="knowledge"></knowledge-card>
    </el-main>
  </el-container>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {IGroup} from '@/model';
  import KnowledgeCard from '@/components/KnowledgeCard.vue';

  @Component({
    components: {KnowledgeCard}
  })
  export default class GroupPanel extends Vue {
    @Prop({required: true})
    private group!: IGroup;
  }
</script>

<style lang="less" scoped>
  .group-divider {
    margin: 12px 0;

    /deep/ .el-divider__text {
      color: #FFF;
      background-color: #393939;
      font-size: 20px;
    }
  }

  .knowledge-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 32px;
    justify-items: center;
    list-style: none;
  }
</style>
