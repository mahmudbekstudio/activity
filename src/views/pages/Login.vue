<template>
	<Empty>
		Login page{{ $t("message.hello") }} {{ test }}=={{ appTest }}==
		<md-button class="md-fab md-mini">
			<md-icon>menu</md-icon>
		</md-button>
	</Empty>
</template>
<script>
	import Empty from '@/views/layout/Empty'
	import Store from '@/store'
    import App from '@/services/App'

	export default {
		name: 'Login',
		data: () => {
		    return {
                test: Store.state.testing,
                appTest: App.test
			}
		},
        created() {
		    console.log(this.$store.state.testing)
            console.log(this.$http.test())
        },
		components: {
			Empty
		}
	}
</script>
<style scoped lang="scss"></style>