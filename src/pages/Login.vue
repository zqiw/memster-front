<template>
  <el-container class="login-page-container">
    <el-card class="box-card login-panel" :body-style="cardBodyStyle">
      <el-row type="flex" class="inner-container">
        <el-col class="login-left">
          <img src="../assets/memster.png" class="logo-picture"/>
        </el-col>
        <el-col class="login-right">
          <el-form :model="form" class="login-form" ref="loginForm" :rules="validationRules">
            <el-row>
              <el-form-item prop="name">
                <el-input class="input-underline" v-model="form.name" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input class="input-underline" v-model="form.password" placeholder="请输入密码"
                          show-password></el-input>
              </el-form-item>
            </el-row>
            <el-form-item>
              <el-row type="flex" justify="space-between">
                <el-button class="control-button" @click="login">登 录</el-button>
                <el-button class="control-button">注 册</el-button>
              </el-row>
            </el-form-item>
            <el-link class="forget-password-link" href="www.baidu.com" target="_blank" :underline="false">忘记密码？
            </el-link>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </el-container>
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

    protected get cardBodyStyle() {
      return {
        padding: '0px',
        width: '100%',
        height: '100%'
      };
    }

    protected get validationRules() {
      return {
        name: [
          {
            required: true,
            message: '用户名不能为空！',
            trigger: 'change'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空！',
            trigger: 'change'
          }
        ]
      }
    }

    protected login() {
      this.$refs.loginForm && (this.$refs.loginForm as Vue).validate((valid: boolean) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
</script>

<style lang="less" scoped>
  .login-page-container {
    background: linear-gradient(to right, #57354D, #B35857);
    height: 100%;
    width: 100%;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-panel {
      width: 1200px;
      height: 600px;
      padding: 0;
      border: none;
      border-radius: 30px;

      .inner-container {
        width: 100%;
        height: 100%;

        .login-left, .login-right {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-left {
          flex-basis: 60%;
          background: linear-gradient(to top right, #231435, #6A3046);

          .logo-picture {
            width: 100%;
          }
        }

        .login-right {
          flex-basis: 0;
          flex-grow: 1;
          padding: 108px 60px;
          background: linear-gradient(to top right, #893F50, #CF5959);

          .login-form {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: transparent;

            /deep/ .el-form-item__error {
              font-size: 16px;
            }

            .input-underline {
              /deep/ .el-input__inner {
                background-color: transparent;
                border: none;
                border-bottom: 1px solid #FFF;
                border-radius: 0;
                color: #FFF;
                margin: 16px 0 8px 0;
                font-size: 18px;
              }
            }

            .control-button {
              background: none !important;
              color: #FFF !important;
              padding: 12px 48px;
              font-size: 18px;
            }

            .forget-password-link /deep/ .el-link--inner {
              color: #FFF;
              font-size: 18px;
            }
          }
        }
      }
    }
  }


</style>
