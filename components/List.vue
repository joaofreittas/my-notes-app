<template>
  <div>
    <b-row no-gutters class="content">
      <b-col cols="12">
        <span v-if="notes.length > 0" style="color: #999">Minhas Notas</span>
        <b-list-group class="notes">
          <b-list-group-item style="display:flex; flex-direction: column;" v-for="(note, index) in notes" :key="index">
            <b-row>
              <span style="margin-left:15px; flex:8">
                <h6>{{note.title}}</h6>
              </span>
              <span style="margin-right:15px; flex:0">
                <button 
                  v-b-toggle="'view' + index" 
                  class="action"
                  @click="() => isView = !isView" 
                  :disabled="isEditing"
                  v-b-tooltip.hover title="Visualizar"
                >
                  <font-awesome-icon :icon="['fas', 'eye']" class="icon-toggle"/>
                </button>
              </span>
              <span style="margin-right:15px; flex:0">
                <button 
                  v-b-toggle="'view' + index" 
                  @click="editNote(index)" 
                  class="action"
                  :disabled="isView"
                  v-b-tooltip.hover :title="tooltipEdit[index]"
                >
                  <font-awesome-icon :icon="iconEdit[index]" class="icon-toggle"/>
                </button>
              </span>
              <span style="margin-right:15px; flex:0">
                <button 
                  @click="removeNote(index)" 
                  class="action"
                  :disabled="(isEditing || isView)"
                  v-b-tooltip.hover title="Excluir"
                >
                  <font-awesome-icon :icon="['fas', 'trash']" class="icon-toggle"/>
                </button>
              </span>
            </b-row>
            <b-collapse class="mt-2" style="flex-direction: column;" :id="`view${index}`">
              <b-form-textarea
                class="textarea mt-2"
                id="textarea-large"
                size="sm"
                v-model="note.text"
                :disabled="!isEditing"
                placeholder="..."
              ></b-form-textarea>
            </b-collapse>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data(){
    return {
      notes:[],
      isEditing: false,
      isView: false,
      indexEditing: 0,
      tooltipEdit: ['Editar'],
      iconEdit:[['fas', 'pen']],
    }
  },
  methods:{
    addNote(note){
      this.notes.push(note)
      this.iconEdit.push(['fas', 'pen'])
      this.tooltipEdit.push(['Editar'])
    },
    editNote(index){
      this.indexEditing = index
      this.isEditing = !this.isEditing
      if(this.isEditing){
        this.tooltipEdit[index] = 'Salvar'
        this.iconEdit[index] = ['fas', 'save']
      }else {
        this.tooltipEdit[index] = 'Editar'
        this.iconEdit[index] = ['fas', 'pen']
      }
    },
    removeNote(index){
      this.notes.splice(index, 1)
      this.iconEdit.splice(index, 1)
      this.tooltipEdit.splice(index, 1)
    }
  }
}
</script>