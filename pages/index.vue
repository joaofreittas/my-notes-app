<template>
  <div class="page">
    <Note @save="save"/>
    <List ref="list"/>
  </div>
</template>

<script>
export default {
  methods: {
    save(note){
      this.$refs.list.addNote(note)
    }
  },
}
</script>
<style>
  .content{
    margin:0 auto;
    margin-top: 12px;
    width: 85%;
    max-width: 700px;
  }
  .note{
    font-size: 1.3rem;
    text-align: left;
    color: #eee;
    background-color: #905DBE;
    border-radius: 6px;
  }
  #textarea-large{
    font-size: 1.2rem;
    outline: none !important;
    padding:15px;
    border-radius: 0;
  }
  #label{
    margin-top: 8px;
    margin-left: 10px;
  }
  .controls{
    margin-top: 10px;
    text-align: right;
  }
  .controls button{
    font-size: 1.2rem;
    color: #eee;
    border:none;
    background-color: #905DBE;
  }
  .controls button:hover, .controls button:focus{
    color: #eee;
    outline-color:#eee;
    background-color: #905DBE;
  }
  .notes{
    text-align: left;
  }
  .title{
    font-size: 1.3rem;
    border-radius: 0;
  }
  .action{
    border:1px solid #905DBE;
    background-color: #905DBE;
    color:#eee;
    border-radius: 5px;
  }
</style>