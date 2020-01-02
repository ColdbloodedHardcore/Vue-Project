<template>
  <div id="app">
    <h1>Math training. Level {{ level + 1 }}</h1>
    <hr>

    <div class="progress">
      <div class="progress-bar bg-success" :style="progressStyle"></div>
    </div>

    <div class="progress">
      <div class="progress-bar bg-danger" id="progressBar"></div>
    </div> 

    <div class="box">
      <transition name="flip" mode="out-in">           
        <start-screen v-if="state == 'start'"
                      @onStart="onStart"                    
        >
        </start-screen>

        <settings v-else-if="state == 'settings'" 
                  :disabled="disabled"                 
                  @changeMaxQuest="changeMaxQuest"
                  @toBegin="toBegin"
        >
        </settings>

        <question v-else-if="state == 'question'"
                  @success="onSuccess"
                  @error="onError"
                  :settings="levels[level]"
        >
        </question>

        <message v-else-if="state == 'message'"
                :type="message.type"
                :text="message.text"
                @onNext="onNext"
        >
        </message>

        <result-screen v-else-if="state == 'result'"
                      :stats="stats"
                      :level="level"
                      @repeat="toBegin"
                      @nextLevel="onNextLevel"
                      @finish="onFinish"
        >
        </result-screen> 

        <dashboard v-else-if="state == 'dashboard'"
                      :total="total"
                      @toStart="backToStart"                      
        >
        </dashboard>  

        <div v-else>Unknown State</div>
      </transition>
    </div> 
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        state: 'start',
        message: {
          type: '',
          text: ''
        },
        timer: {
          value: 0,
          max: 100
        },
        stats: {
          success: 0,
          error: 0
        },
        total: {
          totalSuccess: 0,
          totalError: 0
        },        
        disabled: true,
        timer: {
          counter: 0,
          progress: 0,
          shouldUpdate: true,
          timesUp: 'Times Up'
        },
        maxQuest: 0,
        level: 0,
        levels: [
          {
            variants: 2,
            from: 0,
            to: 50,
            range: 5
          },
          {
            variants: 3,
            from: 50,
            to: 100,
            range: 10
          },
          {
            variants: 4,
            from: 100,
            to: 200,
            range: 15
          },
          {
            variants: 5,
            from: 100,
            to: 500,
            range: 20
          },
          {
            variants: 6,
            from: 500,
            to: 1000,
            range: 25
          },
          {
            variants: 7,
            from: 1000,
            to: 2000,
            range: 30
          },
          {
            variants: 8,
            from: 2000,
            to: 5000,
            range: 35
          }
        ],
      }
    },
    computed: {
      questDone() {
        return this.stats.success + this.stats.error;
      },
      progressStyle() {
        return {
          width: (this.questDone / this.maxQuest * 100) + '%'
        }
      }
    },
    methods: {
      backToStart() {
        this.state = 'start';
        this.level = 0;
        this.total.totalSuccess = 0;
        this.total.totalError = 0;      
      },
      onStart() {
        this.state = 'settings';        
      },  
      changeMaxQuest(mxQ) {      
        this.maxQuest = mxQ;      
      },  
      toBegin() {
        this.state = 'question';
        this.stats.success = 0;
        this.stats.error = 0;
        this.startTimer();
      },
      onSuccess() {
        this.state = 'message';
        this.message.text = 'Good Job';
        this.message.type = 'success';      
        this.stats.success++;   
        this.total.totalSuccess++;
        this.stopTimer();
      },
      onError(msg) {
        this.state = 'message';
        this.message.text = msg;
        this.message.type = 'warning';      
        this.stats.error++; 
        this.total.totalError++;
        this.stopTimer();
      },
      onNext(){
        if(this.questDone < this.maxQuest) {
          this.state = 'question';
          this.startTimer();
        } else {
          this.state = 'result';
        }              
      },    
      onNextLevel() {
        if(this.level < 6){
          this.level++;
          this.toBegin();
        } else {
          this.state = 'dashboard';
        }            
      },
      onFinish() {
        this.state = 'dashboard';
      },
      startTimer() {
        let progressBar	=	document.getElementById("progressBar");
        progressBar.style.width = 0;

        this.timer.shouldUpdate = true;
        let that = this;
        let id = setInterval(time, 1000);


        function time() {          
          if (that.timer.shouldUpdate == false) {
            clearInterval(id);
            return;
          }

          if (that.timer.progress == 100 && that.timer.counter == 10) {
            that.onError(that.timer.timesUp);
            clearInterval(id);          
            return;  
          } else {
            that.timer.progress += 10;
            that.timer.counter++;
            progressBar.style.width = that.timer.progress + "%";
          }
        }  
      },
      stopTimer() {
        let progressBar	=	document.getElementById("progressBar");
        
        this.timer.shouldUpdate = false;
        this.timer.counter = 0;
        this.timer.progress = 0;
        progressBar.style.width = this.timer.progress + "%";
      }
    }
  } 
</script>

<style scoped>  
  #app {
    max-width: 900px;
    margin: 20px auto;
  }    

  .progress {
    margin: 10px 0;
  }

  .progress-bar {
    transition: 1.0s;
  }

  /* .flip-enter {} */

  .flip-enter-active {
    animation: flipInX 0.3s linear;
  }

  /* .flip-leave {} */

  .flip-leave-active {
    animation: flipOutX 0.3s linear;
  }

  @keyframes flipInX {
    from{transform: rotateX(90deg);}
    to{transform: rotateX(0deg);}
  }

  @keyframes flipOutX {
    from{transform: rotateX(0deg);}
    to{transform: rotateX(90deg);}
  }    
</style>
