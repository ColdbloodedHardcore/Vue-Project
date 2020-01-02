<template>
  <div class="alert">
    <h2>Please, choose the desired number of questions in each level (1 - 10):</h2>      
    <hr>
    <div>
      <span v-for="num in quantity"
          :key="num" 
          >{{ num }}
    </span>
    </div>
    
    <div>
      <input type="radio" name="quest" 
                        v-model.number="mxQ"
                        v-for="number in quantity"
                        :key="number"                        
                        :value="number"
                        @change="onDisabled"
                        >
    </div>
    
    <hr>
    <button class="btn btn-success" @click="$emit('toBegin'), onChange(mxQ)" 
                                    :disabled="disabled"
    >
      To Begin
    </button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mxQ: 0,
        quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        disabled: true
      }
    },
    methods: {
      onChange(mxQ) {
        this.$emit('changeMaxQuest', mxQ);        
      },
      onDisabled() {
        let that = this;

        if(that.mxQ !== 0) {
          that.disabled = false;
        }           
      } 
    }
  }
</script>

<style scoped>
  .alert {
    text-align: center;
  }

  h2, .btn {
    margin: 20px 0;
  }
  
  input {
    width: 5%;
    height: 1.5em;
    margin: 10px 0;
  }

  span {
    margin: 0 14.5px;
    font-weight: bold;
  }
</style>
