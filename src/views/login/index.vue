<template>
  <div class="container">
    <el-card>
      <img src="../../assets/logo_index.png" />
      <!-- 表单 -->
      <el-form :model="LoginForm" :rules="LoginRule" ref="loginForm">
        <el-form-item prop="mobile">
          <el-input v-model="LoginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="LoginForm.code"
            placeholder="请输入验证码"
            style="width:240px;margin-right:8px;"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" style="width:100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// 导入封装好的local
import local from '@/utils/local'
export default {
  data () {
    //   手机号校验规则
    const checkMobile = (rule, value, callback) => {
      // 1开头，3-9第二位数字，后面规定9位数字长度
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式错误'))
      }
    }
    return {
      LoginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      LoginRule: {
        //   trigger:blur是失去焦点
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '验证码是6位数字', trigger: 'blur' }
        ]
      }
    }
  },
  //   函数
  methods: {
    //   对整个表单进行校验
    login () {
      this.$refs['loginForm'].validate(async valid => {
        if (valid) {
          try {
            const { data: { data } } = await this.$http.post('authorizations,this.LoginForm')
            local.steUser(data)
            this.$router.push('/')
          } catch (e) {
            this.$message.error('手机号或验证码错误')
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url("../../assets/login_bg.jpg") no-repeat center / cover;
  .el-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 200px;
      display: block;
      margin: 0 auto 30px;
    }
  }
}
</style>
