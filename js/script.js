const inst={
    el: '#app',
    data(){
        return{
            gustaProgramar:'',
            aniosProgramando:'',
            experienciaProgramando:'',
            nuevoLenguaje:'',
            lenguajes:[],
            mostrarResultados:false
        };
    },
    methods:
    {
        agregarLenguaje() 
        {
            if (this.nuevoLenguaje!==''){
                this.lenguajes.push(this.nuevoLenguaje);
                this.nuevoLenguaje='';
            }
        }
    }
};
const app=Vue.createApp(inst).mount('#app');
