<script>
	import axios from "axios";

	export default {
		data() {
			return {
				axios,
				name: "",
				email: "",
				message: "",
				newsletter: true,
				isSending: false,
			};
		},

		methods: {
			sendLead() {
				axios
					.post("http://localhost:8000/api/leads", {
						name: this.name,
						email: this.email,
						message: this.message,
						newsletter: this.newsletter,
					})
					.then((response) => {
						this.isSending = false;

						if (response.data.success) {
							this.showSuccess = true;
							this.resetForm();
						} else {
							this.hasError = true;
						}

						console.log(response.data)
					});
			},

			resetForm() {
			this.name = '';
			this.email = '';
			this.message = '';
			this.newsletter = true;
		},

		},
	};
</script>

<template>
	<div class="container">

		<h1>Contact us</h1>
	
		<form @submit.prevent="sendLead" novalidate>
			<div class="mb-3">
				<label for="name" class="form-label">Name</label>
				<input type="text" class="form-control" id="name" v-model="name" />
			</div>
	
			<div class="mb-3">
				<label for="email" class="form-label">Email address</label>
				<input type="email" class="form-control" id="email" v-model="email" />
			</div>
	
			<div class="mb-3">
				<label for="message" class="form-label">Message</label>
				<textarea
					class="form-control"
					id="message"
					rows="5"
					v-model="message"
				></textarea>
			</div>
	
			<div class="mb-3 form-check">
				<input type="checkbox" class="form-check-input" id="newsletter" v-model="newsletter"/>
				<label class="form-check-label" for="newsletter"
					>Subscribe to newsletter</label
				>
			</div>
	
			<button type="submit" class="btn btn-primary" :disabled="isSending">Submit</button>
		</form>
	</div>
</template>

<style></style>
<style lang="scss"></style>
