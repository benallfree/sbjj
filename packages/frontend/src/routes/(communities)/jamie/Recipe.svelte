<script lang="ts">
  import recipeImg from './recipe.webp?enhanced'
  import Recipe from './recipe.svx'
</script>

<h2>Sample Recipe</h2>
<h3>Jamie Eats Special Spaghetti Carbonara Recipe</h3>

<div>
  <i
    >This is a sample recipe. To access the all Jamie Eats recipes, join the
    private #Jamie Eats# community today.</i
  >
</div>

<enhanced:img src={recipeImg} alt={`Recipe`} class={'rounded-lg w-96 '} />

<Recipe />
