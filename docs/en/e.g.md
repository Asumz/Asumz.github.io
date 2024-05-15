<script setup>
import { useData } from 'vitepress'

const { lang } = useData()
</script>

<h1>{{ lang }}</h1>
