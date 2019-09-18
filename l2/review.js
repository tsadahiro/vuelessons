app=new Vue({
    el: "#app",
    
    data:{
	col: "red",
	//conf: [[1,1,0,0],[1,1,0,0],[1,0,0,1]],
	conf: [[1,1,0],[1,1,0],[1,0,1]],
    },

    methods:{
	toggle: function(i,j){
	    if (this.conf[i][j]==0){
		this.conf[i].splice(j,1,1);
	    }
	    else{
		this.conf[i].splice(j,1,0);
	    }
	},
	change: function(i,j){
	    this.toggle(i,j);
	    if (i>0){
		this.toggle(i-1,j);
	    }
	    if (i<this.conf.length-1){
		this.toggle(i+1,j);
	    }
	    if (j>0){
		this.toggle(i,j-1);
	    }
	    if (j<this.conf[0].length-1){
		this.toggle(i,j+1);
	    }
	}
    }
})
