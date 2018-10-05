<template>
	<Empty>
		<div class="page-container">
			<md-app md-mode="reveal">
				<md-app-toolbar class="md-primary">
					<md-button class="md-icon-button" @click="menuVisible = !menuVisible">
						<md-icon>menu</md-icon>
					</md-button>
					<span class="md-title">My Title</span>
				</md-app-toolbar>

				<md-app-drawer :md-active.sync="menuVisible">
					<md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

					<Navigation></Navigation>
				</md-app-drawer>

				<md-app-content>
					<slot></slot>
				</md-app-content>
			</md-app>
		</div>
	</Empty>
</template>
<script>
	import Empty from '@/views/layout/Empty.vue'
	import Navigation from '@/views/partials/Navigation.vue'

	export default {
		name: 'Main',
		data: function() {
			return {
				menuVisible: false
			}
		},
		components: {
			Empty,
			Navigation
		}
	}
</script>
<style scoped lang="scss">
	.md-app {
		max-height: 400px;
		border: 1px solid rgba(#000, .12);
	}

	// Demo purposes only
	   .md-drawer {
		   width: 230px;
		   max-width: calc(100vw - 125px);
	   }
</style>