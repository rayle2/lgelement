import LgInput from '../src/input'

export default {
  title: 'LgInput',
  component: LgInput,
  argTypes: {},
}

export const Text = () => ({
  components: { LgInput },
  template: '<lg-input v-model="value" />',
  data () {
    return {
      value: 'admin',
    }
  },
})

export const Password = () => ({
  components: { LgInput },
  template: '<lg-input v-model="value" type="password" />',
  data () {
    return {
      value: '',
    }
  },
})
