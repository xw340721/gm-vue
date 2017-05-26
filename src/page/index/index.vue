<template>
    <div>
        <head-nav></head-nav>
        <el-row>
            <main-body></main-body>
            <el-col :span="19">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
	import headNav from "@/component/Nav";
	import mainBody from "@/component/MainBody";
	import{REMOVEITEM} from "../../store/menu/mutations-types"
	export default {
		data () {
			return {
			}
		},
		computed: {
		},
		components: {
			headNav,
			mainBody
		},
		methods: {

		},

	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

</style>
