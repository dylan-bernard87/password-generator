<script>
export default {
	created() {
		this.CHAR = 'abcdefghijklmnopqrstuvwxyz';
		this.SPECIAL_CHAR = '<>[]{}=?()&%$#@!¡?¿*_-.:;,';
		this.NUMBER = '123456789';
		this.MIN_CHAR = 8;
		this.MAX_CHAR = 16;
	},
	data() {
		return {
			password: "",
			nbChar: 8,
			caps: false,
			special: false,
			number: false,
		}
	},
	methods: {
		generate() {
			let newPassword = '';
			let chars = this.determineChars();
			for(let i = 0; i < this.nbChar; i++) {
				newPassword += chars[Math.floor(Math.random() * chars.length)];
			}
			this.password = newPassword;
		},
		determineChars() {
			let chars = this.CHAR;
			if (this.caps) chars += this.CHAR.toUpperCase();
			if (this.special) chars += this.SPECIAL_CHAR;
			if (this.number) chars += this.NUMBER;
			return chars;
		}
	}
}
</script>

<template>
	<div class="h-auto pt-xl w-[19rem] sm:w-[25rem] px-2">
		<div class="bg-white rounded-xl drop-shadow-sm">

			<h1 class="text-center py-2 text-xl uppercase font-bold">Password Generator</h1>

			<div class="px-2 pt-2">
				<input
					class="p-2 w-full text-primary border border-primary rounded"
					type="text"
					disabled
					:value="password"
					placeholder="Generate password"
				>
			</div>

			<div class="px-5 py-4">

				<div class="py-2">
					<input type="range" v-model="nbChar" :min="MIN_CHAR" :max="MAX_CHAR">
					<div>{{nbChar}}</div>
				</div>

				<div class="py-2">
					<input
						type="checkbox"
						v-model="caps"
						id="caps"
						class="custom-checkbox border border-primary checked:bg-primary"
					>
					<label class="cursor-pointer pl-2" for="caps">With CAPS</label>
				</div>

				<div class="py-2">
					<input type="checkbox" v-model="number" id="number" class="cursor-pointer">
					<label class="cursor-pointer pl-2" for="number">With Number</label>
				</div>

				<div class="py-2">
					<input type="checkbox" v-model="special" id="special" class="cursor-pointer">
					<label class="cursor-pointer pl-2" for="special">With Special Char</label>
				</div>
			</div>

			<button
				class="mt-5 py-2 px-4 bg-primary text-white border border-primary rounded w-full hover:bg-white hover:text-primary duration-100 ease-in"
				@click="generate()"
				>
				Générer
			</button>
		</div>
	</div>
</template>
