<script>
	import axios from "axios";
	import ProjectCard from "./ProjectCard.vue";
	import PostFilter from "./PostFilter.vue";

	export default {
		components: {
			ProjectCard,
			PostFilter,
		},

		data() {
			return {
				arrProj: [],
				arrTypes: [],
				typeId : null,
				currentPage: 1,
				nPages: 0,
			};
		},

		methods: {
			changePage(page) {
				this.currentPage = page;
				this.getProjects();
			},

			getProjects() {
				axios
					.get("http://127.0.0.1:8000/api/projects", {
						params: {
							page: this.currentPage,
							q: new URLSearchParams(window.location.search).get("q"),
						},
					})
					.then((response) => {
						this.arrProj = response.data.data;
						this.nPages = response.data.last_page;
					});
			},

			getTypes() {
				axios.get("http://localhost:8000/api/types").then((response) => {
					this.arrTypes = response.data;
				});
			},

			next() {
				if (this.currentPage < this.nPages) {
					this.currentPage = this.currentPage + 1;
					this.getProjects();
				}
			},

			prev() {
				if (this.currentPage != 1) {
					this.currentPage = this.currentPage - 1;
					this.getProjects();
				}
			},

			menageTypeChange(typeId){
				this.typeId = typeId
				this.getProjects
			}
		},

		created() {
			this.getProjects();
			this.getTypes();
		},
	};
</script>

<template>
	<h2>progetti</h2>

	<div class="container-fluid d-flex justify-content-center flex-wrap">
		
		<PostFilter 
		:arrTypes="arrTypes" 
		@changeType="menageTypeChange($event)"/>

		<ProjectCard
			v-for="project in arrProj"
			:key="project.id"
			:project="project"
		/>

		<!-- <div
      class="card mt-4"
      style="width: 18rem"
      v-for="project in arrProj"
      :key="project.id"
    >
      <img :src="project.url_image" class="card-img-top" :alt="project.id" />
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.content }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> -->

	</div>
	<ul class="pagination">
		<li class="page-item" :class="currentPage == 1 ? 'disabled' : ''">
			<span class="page-link" @click="prev()">Previous</span>
		</li>

		<li
			v-for="page in nPages"
			:key="page"
			class="page-item"
			:class="{active: page == currentPage}"
		>
			<span class="page-link" @click="changePage(page)">
				{{ page }}
			</span>
		</li>

		<li class="page-item">
			<span class="page-link" @click="next()">Next</span>
		</li>
	</ul>
</template>

<style lang="scss" scoped>
	.page-link:hover {
		cursor: pointer;
	}
</style>
