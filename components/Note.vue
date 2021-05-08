<template>
  <div>
    <b-row no-gutters class="content mt-5">
      <h3 class="mb-3" style="color:#905DBE">Minhas Notas</h3>

      <b-col cols="12">
        <b-alert
          class="progresss"
          dismissible
          :show="dismissCountDown"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
        >
          <p>Título não preenchido</p>
          <b-progress
            variant="secondary"
            :max="dismissSecs"
            :value="dismissCountDown"
            height="4px"
          ></b-progress>
        </b-alert>
      </b-col>


      <b-col cols="12" class="note mt-1">
        <label for="textarea-large" id="label">Nota</label>
        <b-form-input
          type="text"
          placeholder="Título"
          v-model="note.title"
          class="title"
        ></b-form-input>
        <b-form-textarea
          class="textarea"
          id="textarea-large"
          size="sm"
          rows="8"
          v-model="note.text"
          placeholder="..."
        ></b-form-textarea>
      </b-col>
      <b-col cols="12" class="controls">
        <b-button @click="save" v-b-tooltip.hover title="Salvar">
          <font-awesome-icon :icon="['fas', 'save']" class="icon-toggle"/>
        </b-button>
        <b-button @click="clear" v-b-tooltip.hover title="Limpar">
          <font-awesome-icon :icon="['fas', 'eraser']" class="icon-toggle"/>
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data(){
    return {
      note: {
        title: '',
        text: ''
      },
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    save(){
      if(this.handleNote()){
        this.$emit('save', {...this.note})
        this.clear()
      }else this.showAlert()
    },
    clear(){
      this.note = {text: '', title: ''}
    },
    handleNote(){
      return this.note.title !== ''
    },

    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
<style>
  .progresss{
    font-size: 16px;
    color: #eee;
    background-color: #905DBE;
    /* padding: 25px 10px; */
    border:none;
  }
</style>