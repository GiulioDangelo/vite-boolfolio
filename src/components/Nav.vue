<script>
export default {
    data() {
		return {
			searchString: '',
		}
	},

	// created() {
	// 	this.searchString = new URLSearchParams(window.location.search).get('q')
	// },
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<router-link :to="{ name: 'home' }" class="navbar-brand">Boolpress</router-link>

			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link :to="{ name: 'projects' }" class="nav-link active">Projects</router-link
						>
					</li>
					<li class="nav-item">
						<router-link :to="{ name: 'about' }" class="nav-link active">About</router-link
						>
					</li>
					<li class="nav-item">
						<router-link :to="{ name: 'contact' }" class="nav-link active">Contact us</router-link
						>
					</li>
				</ul>
				<form 
					class="d-flex" 
					role="search"
					@submit.prevent="$router.push({name: 'projects' , query: {q: searchString} })">

					<input 
						class="form-control me-2" 
						type="search" 
						placeholder="Search" 
						aria-label="Search" 
						v-model="searchString"
					>

					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</div>
	</nav>
</template>

<style lang="scss">
    
</style>