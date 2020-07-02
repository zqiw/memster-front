<template>
  <el-card class="knowledge-card" :body-style="bodyStyle">
    <el-image class="image-container">
      <div slot="error" class="image-default">
        {{knowledge.name.substring(0, Math.min(knowledge.name.length, 5))}}
      </div>
    </el-image>
    <div class="caption-bar">{{knowledge.name}}</div>
  </el-card>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {IKnowledge} from '@/model';

  @Component({})
  export default class KnowledgeCard extends Vue {
    @Prop({required: true})
    private knowledge!: IKnowledge;

    protected get bodyStyle() {
      return {
        'padding': '0px',
        'height': '100%',
        'display': 'flex',
        'flex-direction': 'column'
      };
    }
  }
</script>

<style lang="less" scoped>
  .knowledge-card {
    width: 250px;
    height: 300px;
    box-shadow: 0 2px 12px 0 rgba(255, 255, 255, 0.1);

    .image-container {
      flex-grow: 1;
    }

    .caption-bar {
      height: 48px;
      line-height: 48px;
      font-size: 18px;
      text-align: left;
      padding: 0 16px;
    }
  }

  /deep/ .image-default {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6E6E6E;
    color: #FF9900;
    font-size: 40px;
    font-weight: bold;
  }
</style>
