<template>
	<div>
		The App.vue component!
		<FunctionPlot/>
		<Distribution/>
	</div>
</template>

<script>
import Distribution from './components/Distribution';
import FunctionPlot from './components/FunctionPlot';

export default {
	name: 'App',
	components: {
		Distribution,
		FunctionPlot,
	},
}
</script>

