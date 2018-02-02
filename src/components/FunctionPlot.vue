<template>
	<div>Func plot</div>
</template>

<script>

export default {
	name: 'FunctionPlot',
	data: () => {return {
		canvas: null,
	}},
	mounted: function(a, b, c, d, e) {
		this.canvas = document.createElement('canvas');
		this.$el.appendChild(this.canvas);
	},
}
</script>

