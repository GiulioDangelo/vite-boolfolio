<script>
export default {
    data() {
			return {
				typeId:null,
			};
		},

    props: {
        arrTypes:{
            type:Array,
            required: true
        }
    },

    watch: {
        arrTypes(){
            this.typeId = this.arrTypes.length
            ? this.arrTypes[0].id
            : null
        }
    },

}
</script>

<template>
    <form class="my-5">
        <label class="mb-2" for="item">Types</label>
        <select class="form-select w-25" id="item" @change="$emit(console.log(this.typeId))" v-model="typeId">
            <option v-for="item in arrTypes" :key="item.id" :value="item.id">
                {{ item.name }}
            </option>
        </select>
    </form>
</template>

<style lang="">
    
</style>