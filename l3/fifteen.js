app = new Vue({
    el: "#app",
    data: {
	conf: [
	    [1,2,3],
	    [4,5,6],
	    [7,8," "]
	],
	vacant:{x:2,y:2}
    },
    methods:{
	neighbors: function(x,y){
	    let nei = [];
	    if (x >= 1){
		nei.push({x:x-1, y:y});
	    }
	    if (x <=1 ){
		nei.push({x:x+1, y:y});
	    }
	    if (y >= 1){
		nei.push({x:x, y:y-1});
	    }
	    if (y <= 1){
		nei.push({x:x, y:y+1});
	    }
	    return nei;
	},
	shuffle: function(){
	    for (let i=0; i<100; i++){
		let d = this.neighbors(this.vacant.x, this.vacant.y);
		let r = Math.floor(Math.random()*d.length);
		this.conf[this.vacant.x].splice(
		    this.vacant.y, 1, this.conf[d[r].x][d[r].y]);
		this.conf[d[r].x].splice(d[r].y, 1, " ");
		this.vacant.x = d[r].x;
		this.vacant.y = d[r].y;
	    }
	},
	move: function(i,j){
	    this.conf[this.vacant.x].splice(
		this.vacant.y, 1, this.conf[i][j]);
	    this.conf[i].splice(j,1," ");
	    this.vacant.x = i;
	    this.vacant.y = j;
	}
    }
})
