<script>
import Checkbox from './Checkbox.vue';
export default {
	components: { Checkbox },
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
		},

		copyPassword()	{
			navigator.clipboard.writeText(this.password);
		},

		updateBooleanField(field) {
			this[field] = !this[field];
		},

		passwordIsEmpty() {
			console.log("passwordIsEmpty")

			if (this.password == '') {
				return true;
			}

			return false;
		}
	}
}
</script>

<template>
	<div class="h-auto w-[19rem] sm:w-[25rem] pt-xl px-2">
		<div class="bg-white rounded-xl drop-shadow-sm">

			<h1 class="text-center text-xl uppercase font-bold py-2">Password Generator</h1>

			<div class="px-2 pt-2 flex">
				<input
					class="w-full text-primary border border-primary rounded-l p-2"
					type="text"
					disabled
					:value="password"
					placeholder="Generate password"
				>
				<button
					@click="copyPassword"
					class="bg-primary text-white rounded-r hover:opacity-75 duration-100 ease-in cursor-pointer px-2"
					v-show="password != ''">
						<i class="fa-solid fa-clone"></i>
					</button>
			</div>

			<div class="px-2 pt-4">

				<div class="py-2">
					<label>Number of char</label>
					<input
						type="number"
						v-model="nbChar"
						:min="MIN_CHAR"
						:max="MAX_CHAR"
						class="w-full border border-gray-200 focus:outline-primary rounded mt-2 px-2 py-1"
					>
				</div>

				<checkbox :field="'caps'" :label="'With Caps'" @udpate-field="updateBooleanField"></checkbox>
				<checkbox :field="'number'" :label="'With Number'" @udpate-field="updateBooleanField"></checkbox>
				<checkbox :field="'special'" :label="'With Special Char'" @udpate-field="updateBooleanField"></checkbox>

			</div>

			<button
				class="mt-5 py-2 px-4 bg-primary text-white border border-primary rounded w-full hover:bg-white hover:text-primary duration-100 ease-in"
				@click="generate()"
				>
				Generate
			</button>
		</div>
	</div>
</template>
