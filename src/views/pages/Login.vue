<template>
	<Empty>
		Login page{{ $t("message.hello") }}
	</Empty>
</template>
<script>
	import Empty from '@/views/layout/Empty';
	export default {
		name: 'Login',
		components: {
			Empty
		}
	}
</script>
<style scoped lang="scss"></style>