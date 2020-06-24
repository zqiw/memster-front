<template>
  <div class="login-page-container">
    <el-form :model="form">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({})
  export default class Login extends Vue {
    private form: {
      name: string;
      password: string;
    } = {
      name: '',
      password: ''
    };
  }
</script>

<style lang="css" scoped>
  .login-page-container {
    background-image: url("../assets/oogwayascends.jpg");
    height: 100%;
    width: 100%;
    background-size: 100% 100%;
    /*opacity: 0.8;*/
  }
</style>
