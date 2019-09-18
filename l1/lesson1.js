new Vue({
    el: "#app",
    data:{
	msg: "AIUEO",
	pos: [{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0}],
	color: "red"
    },
    computed:{
	cx: function(){
	    return 400+this.x*100;
	},
	cy: function(){
	    return 400-this.y*100;
	}
    },
    methods:{
	extend: function(){
	    this.msg += "A";
	},
	move: function(i){
	    this.pos[i].x += 1;
	    if (this.color=="red"){
		this.color = "blue"
	    }else{
		this.color = "red"
	    }
	}
    }
})
