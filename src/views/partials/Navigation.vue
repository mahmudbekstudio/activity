<template>
	<md-list>
		<md-list-item>
			<md-icon>move_to_inbox</md-icon>
			<Icon type="activities"></Icon>
			<span class="md-list-item-text"><router-link to="/">Home</router-link></span>
		</md-list-item>

		<md-list-item>
			<md-icon>send</md-icon>
			<span class="md-list-item-text"><router-link to="/about">About</router-link></span>
		</md-list-item>

		<md-list-item>
			<md-icon>delete</md-icon>
			<span class="md-list-item-text">Trash</span>
		</md-list-item>

		<md-list-item>
			<md-icon>error</md-icon>
			<span class="md-list-item-text">Spam</span>
		</md-list-item>
	</md-list>
</template>
<script>
	import Icon from './Icon.vue'

	export default {
		name: 'Navigation',
		components: {
			Icon
		}
	}
</script>
<style scoped lang="scss">
	#nav {
		padding: 30px;
		a {
			font-weight: bold;
			color: #2c3e50;
		&.router-link-exact-active {
			 color: #42b983;
		 }
		}
	}
</style>